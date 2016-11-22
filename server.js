var express = require('express');
var fs = require('fs');
var app = express();
var bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use('/', express.static(__dirname));
app.listen(8080);

var foodList = [];

fs.readFile('data/nutrients.json', 'utf8', (err, data) => {
    if (err) throw err;
    foodList = JSON.parse(data);
});


app.get('/api/foods', function(req, res) {
    res.json(foodList);
});

app.post('/api/foods', function(req, res) {
    foodList.push(req.body);
    fs.writeFile('data/nutrients.json', JSON.stringify(foodList), 'utf8', (err) => {
        if (err) throw err;
        res.send({status: "SUCCESS"});
    });
});

console.log("starting server in 127.0.0.1:8080");
