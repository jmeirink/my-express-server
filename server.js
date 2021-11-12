const express = require('express');

const app = express();

app.get('/', function(req, res){
  res.send("<h1>Hello, world!</h1>");
});

app.get('/contact', function(req, res){
  res.send("Contact me at: jesse@meirink.com");
});

app.get('/about', function(req, res){
    res.send("Hi, my name is Jesse Meirink. Thanks for checking out my website.");
});

app.get('/hobbies', function(req, res){
  res.send("<ul><li>Coffee</li><li>Code</li><li>Beer</li></ul>");
});

app.listen(3000, function(){
  console.log("Server started on port 3000");
});
