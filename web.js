var fs = require('express');
var fs = require('fs');
var app = express.createServer(express.logger());
app.get('/', function(request, response) {
       var file="index.html";
	   var temp= fs.readSync(file);
	   response.send('hello parallel worlds!!');
});
var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});








