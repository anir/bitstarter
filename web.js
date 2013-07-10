var fs = require('fs');
var express = require('express');
var buffer = new Buffer(16);
var app = express.createServer(express.logger());

app.get('/', function(request, response) {
    var temp=fs.readSync('index.html');
    response.send(temp);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
