var express = require('express');
var app = express();

app.use(express.static(__dirname));
app.listen(8080);

console.log("starting server in 127.0.0.1:8080");
