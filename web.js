var express = require('express');
var fs = require('fs');
var app = express.createServer(express.logger());
app.get('/', function(request, response) {
       var file="index.html";
	   var temp= fs.readFileSync(file);
	   response.send(temp.toString('utf-8'));
});
var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});








