//need two routes
//route to /survey
//route to 'catch all' /home.html
var path = require('path');

module.exports=function(app){
    //define home page
    app.get('*',function(req,res){
        res.sendFile(path.join(__dirname,'/../public/home.html'));
    });
    //define about route
    app.get('/survey',function(req,res){
        res.sendFile(path.join(__dirname,'/../public/survey.html'));
    });
};