var express = require('express');
var app = express();
//Telling the express app what to do when a request to the homepage is made
//This technique is called routing
app.get('/', function(req, res){
  res.send('<h1>Hello Express</h1>');
});

//Server to listen from port 3000
var server = app.listen(3000, function(){
  console.log('Listening on port 3000...');
});
