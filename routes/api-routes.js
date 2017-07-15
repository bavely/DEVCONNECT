var db = require("../models");
var crypto = require("crypto");
var Passsalthash = require("./passsalthash.js");

module.exports = function(app) {

    //Reg Route
    app.post("/api/users/", function(req, res) {
        //Create new user 

        var newUser = {
            username: req.body.username,
            password: req.body.password,
            photoUrl: req.body.photoUrl,
            email: req.body.email,
            frontbackend: req.body.frontbackend,
            mentorpro: req.body.mentorpro,
        }

        Passsalthash.register(newUser).then(function(result) {
                console.log(result)
                    // res.redirect("/users/" + result.id);
                    // res.render("users", result)
                res.json(result);
            })
            .catch(function(error) {
                console.error(error);
                res.json({ error: error.message });

            })
    })

    //Get all USERS info (Name,Location .etc)
    app.get("/api/users", function(req, res) {

        db.User.findAll({}).then(function(data) {
                console.log(data);
                return res.json(data);

            })
            //JSON of all users
            

    })


}