var express = require('express');
var app = express();
//var hostname = 'localhost';
var port = 8080;
app.get('/',function(req,res){
  
});
app.listen(port, function(){
  console.log("Running at port: 8080");
});
