var express = require('express');
// var path = require ('path');
var parser = require('body-parser');
var app = express();
var dock = process.env.PORT || 3000;

//sets up  express app to handle the data parsing
app.use(parser.json());
app.use(parser.urlencoded({extended:true}));
app.use(parser.text());
app.use(parser.json({type:'application/vnd.api+json'}));

//starts the server to begin listening
app.listen(dock,function(){
    console.log('app is listening in on port'+dock);
});

//routes
require('./app/routing/htmlRoutes.js')(app);
require('./app/routing/apiRoutes.js')(app);