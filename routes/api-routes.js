
var db = require("../models")


module.exports = function(app){

    app.post("/api/newuser", function(req,res){
        //Create new user 
        db.Answer.create({
            // key value pair goes here


        }).then(function(result){
            res.end();
        })
    })

    //Get all USERS info (Name,Location .etc)
    app.get("api/user", function(req,res){

        //JSON of all users

    })
    
    
}