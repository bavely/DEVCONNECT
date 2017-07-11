var path = require("path");
var db = require("../models");


module.exports = function(app){

    app.get("/", function(req,res){
        res.sendFile(path.join(__dirname + "../views/layouts/main.handlebars"))
    });


//login route
    app.get("/logger", function(req,res){
        db.User.findOne({
            where: {
                username: req.body.username,
                password: req.body.password

            }
        }).then(function(userdata){
            if(userdata){
                res.redirect("/profile/:userdata.id");
                //rander
            }else{
                res.text("please check mail and pass");
            }
        })
        
    });

//signup route
app.post("/logger", function(req,res){
        db.User.findOne({
            where: {
                username: req.body.username,
                password: req.body.password

            }
        }).then(function(userdata){
            if(userdata){
                res.text("this user name already exist");
            }else{
                db.user.create({
                username: req.body.username,
                password: req.body.password
                 
            })
            res.redirect("/servay/:userdata.id");
            }
        })
        
    });

//servay
// app.post("/servay/:id", )
        
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