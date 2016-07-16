var express = require('express');
var app = express();
//var hostname = 'localhost';
var port = 8080;
app.get('/',function(req,res){
  res.send('<h1>Hello World!</h1>');
});
app.listen(port, function(){
  console.log("Running at port: 8080");
});
