var express = require('express');
var app = express();
var moment = require('moment');
var port = 8080;
app.get('/',function(req,res){
  res.sendFile(__dirname + '/index.html');
});
app.get('/:datestring', function(req,res) {
  var date;
  if(/^\d{8,}$/.test(req.params.datestring)) {
    date = moment(req.params.datestring, "X");
  } else {
    date = moment(req.params.datestring, "MMMM D, YYYY");
  }

  if(date.isValid()) {
    res.json({
      unix: date.format("X"),
      natural: date.format("MMMM D, YYYY")
    });
  } else {
    res.json({
      unix: null,
      natural: null
    });
  }
});
app.listen(port, function(){
  console.log("Listening on port: " + port);
});
