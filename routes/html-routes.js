var path = require("path");
var db = require("../models");
var crypto = require("crypto");
var Passsalthash = require("./passsalthash.js");

module.exports = function(app) {

    app.get("/", function(req, res) {
        res.sendFile(path.join(__dirname + "../views/layouts/main.handlebars"))
    });


    //login route
    app.post("/login", function(req, res) {
        var logginginUser = {
            email: req.body.email,
            password: req.body.password
        }
        Passsalthash.logIn(logginginUser, res);


    });

    // app.post("/rege", function(req, res) {

    //     var newUser = {
    //         username: req.body.username,
    //         password: req.body.password,
    //         photoUrl: req.body.photoUrl,
    //         email: req.body.email,
    //         frontbackend: req.body.frontbackend,
    //         mentorpro: req.body.mentorpro,
    //     }

    //     Passsalthash.register(newUser, function(result) {

    //         res.render("profile", result);
    //         res.end();

    //     })
    // });

    app.get("/user/:id", function(req, res) {
        console.log("fdsffffffffffffffffffffffffffffg")
        db.User.findOne({
            where: {
                id: req.params.id
            }

        }).then(function(userdata) {
            console.log(userdata)
            res.render("users", userdata.dataValues)
        })

    });



    //signup route
    // app.post("/logger", function(req, res) {
    //     db.User.findOne({
    //         where: {
    //             username: req.body.username,
    //             password: req.body.password

    //         }
    //     }).then(function(userdata) {
    //         if (userdata) {
    //             res.text("this user name already exist");
    //         } else {
    //             db.user.create({
    //                 username: req.body.username,
    //                 password: req.body.password

    //             })
    //             res.redirect("/servay/:userdata.id");
    //         }
    //     })

    // });

    //servay
    // app.post("/servay/:id", )

    // app.get("/user/:id", function(req, res) {
    //     db.User.findOne({
    //         where: {
    //             id: req.params.id
    //         }
    //     }).then(function(userdata) {
    //         res.render("profile", userdata)
    //     })

    // });


};