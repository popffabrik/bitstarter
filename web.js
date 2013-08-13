var express = require('express');
var fs = require('fs');
var app = express();
app.use(express.logger());
var indexBuffer = fs.readFileSync('index.html').toString();

app.get('/', function(request, response) {
  response.send(indexBuffer);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
