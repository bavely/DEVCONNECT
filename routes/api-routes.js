
var db = require("../models")


module.exports = function(app){

    // app.post("/api/newuser", function(req,res){
        //Create new user 
        // db.Answer.create({
            //key value pair goes here


    //     }).then(function(result){
    //         res.end();
    //     })
    // })

    //Get all USERS info (Name,Location .etc)
    app.get("/api/users", function(req,res){

        db.Answer.findAll({}).then(function(data){
            console.log(data);
           return res.json(data);

        })
        //JSON of all users
        

    })
    
    
}