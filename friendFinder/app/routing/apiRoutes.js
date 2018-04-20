//need two routes
//GET route to url/api/friends ->used to display json of all friends
//POST routes to /api/friends ->handles incoming surevy results
var amigos =require('../data/friends');

module.exports=function(app){
    //define the get api/friends
    app.get('/api/friends',function(req,res){
        res.json(friends);
    });
    //define post api/friends route
    app.post('/api/frinds',function(req,res){
        amigos.push(req.body);
    });
};