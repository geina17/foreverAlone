//need two routes
//GET route to url/api/friends ->used to display json of all friends
//POST routes to /api/friends ->handles incoming surevy results
var friends =require('../data/friends');

module.exports=function(app){
    //define the get api/friends
    app.get('/api/friends',function(req,res){
        res.json(friends);
    });
    //define post api/friends route
    app.post('/api/friends',function(req,res){
        // friends.push(req.body);
        var bestMatch = {
            name: '',
            image:'',
            difference: Infinity 
        };
        var usrData = req.body;
        var usrSkore = req.body.scores;
        var totalDiff;

        for(var i = 0;i<friends.length;i++){
            totalDiff=0;
            for(var j = 0;j<friends[i].scores.length;j++){
                var curntFriSkore = friends[i].scores[j];
                var curntUsrSkore = usrSkore[j];
                totalDiff += Math.abs(parseInt(curntUsrSkore)-parseInt(curntFriSkore));
            }
            if(totalDiff <= bestMatch.difference){
                bestMatch.name=friends[i].name;
                bestMatch.image=friends[i].image;
                bestMatch.difference=totalDiff;
            }
        }
        friends.push(usrData);
        res.json(bestMatch);
    });
};