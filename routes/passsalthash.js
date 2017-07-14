var db = require("../models");
var crypto = require("crypto");
var Passsalthash = {

    // getUser: function(userEmail) {

    //     db.User.findOne({
    //         where: {
    //             email: userEmail

    //         }
    //     }).then(function(userdata) {

    //         return userdata;
    //     });
    // },


    register: function(user) {
        user.salt = crypto.randomBytes(16).toString('hex')
        user.generateHash = crypto.pbkdf2Sync(user.password, user.salt, 1000, 512, 'sha512').toString('hex');
        return db.User.create({
            //key value pair goes here
            username: user.username,
            email: user.email,
            photoUrl: user.photoUrl,
            frontbackend: user.frontbackend,
            mentorpro: user.mentorpro,
            salt: user.salt,
            hash: user.generateHash,
        })
    },

    logIn: function(user, res) {

        db.User.findOne({
            where: {
                email: user.email

            }
        }).then(function(data) {


            if (!data) { console.log("please check your email and password"); } else {
                var hashToCheckAgainst = data.hash;
                var saltToUse = data.salt;
                var providedHash = crypto.pbkdf2Sync(user.password, saltToUse, 1000, 512, 'sha512').toString('hex');

                if (hashToCheckAgainst === providedHash) {

                    console.log("yaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaay good job");
                    res.json(data);

                } else {
                    console.log("Wrong Password!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!");
                }
            }

            return data;
        })

    }
}

module.exports = Passsalthash;