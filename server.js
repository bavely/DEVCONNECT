//npm install socket.io@1.7.4

var express = require("express");
var bodyParser = require("body-parser");
var methodOverride = require("method-override");
var path = require("path");
var db = require("./models");
var PORT = process.env.PORT || 8080;
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);
// $.ajax({
//   url: "https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js",
//   dataType: "script",
  
// }).done(function(){
// 	var someVal = require('./public/javascript/socket.js');
// });




app.use(express.static("public"));

app.use(bodyParser.urlencoded({ extended: false }));

app.use(methodOverride("_method"));


var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

require("./routes/api-routes.js")(app);
require("./routes/html-routes.js")(app);

var clients = {};
var userSocketMapping = {};

io.on('connection', function(socket){


  clients[socket.id] = socket;

  console.log(socket.id);

  socket.on('chat message', function(msg){
  	console.log(msg);
    io.emit('chat message', socket.id + ": " + msg);
  });

  socket.on('join', function(msg){
  	userSocketMapping[msg] = socket.id;
  	console.log(msg);
  });

  socket.on('direct message', function(msg){
  	var pieces = msg.split('^');
  	io.to(userSocketMapping[pieces[1]]).emit('direct message', socket.id + ": " + pieces[0]);
  	io.to(socket.id).emit('direct message', socket.id + ": " + pieces[0]);
  });

  // socket.on('disconnect', function() {
  //  console.log("oops");
  // })


});


db.sequelize.sync().then(function() {

  http.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
});
