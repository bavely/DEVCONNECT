var path = require("path");
var db = require("../models");


module.exports = function(app){

    app.get("/", function(req,res){
        res.sendFile(path.join(__dirname + "../views/layouts/main.handlebars"))
    });
        
    app.get("/user/:id", function(req,res){
        db.User.findOne({
            where: {
                id: req.params.id
            }
        }).then(function(userdata){
            res.render("profile",userdata )
        })
        
    });

    
};