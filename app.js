/*
For one to be able to use express, you need to install it as a dependency using
"npm install express --save". Alternatively one can use the express generator.
*/
var express = require('express');
var app = express();
//Telling the express app what to do when a request to the homepage is made
//This technique is called routing
app.get('/', function(req, res){
  res.send('<h1>Hello Express</h1>');
});
//different route
app.get('/me', function(req, res){
  res.send('@cngondo');
});
//Passing variables in the routes which can be displayed on the webpage
app.get('/who/:name?', function(req, res){
  var name = req.params.name;
    res.send('<h1>'+ name + ' was here!!</h1>');
});
/*
* You can also pass multiple variables in the routes that will be displayed
*/
app.get('/who/:name?/:title?', function(req, res){
  var name = req.params.name;
  var title = req.params.title;
  res.send('<h1>'+ name + ' who is a ' + title + ' was here!!</h1>');
});
/*
If you put a route that is not specified, then the following action will take place.
Kindly put this at the end after all the routes.
*/
app.get('*', function(req, res){
  res.send('Pole sana, umepotea. Jaribu kwingine');
});
//Server to listen from port 3000
var server = app.listen(3000, function(){
  console.log('Listening on port 3000...');
});
