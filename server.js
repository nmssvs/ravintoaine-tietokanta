var express = require('express');
var fs = require('fs');
var app = express();
var bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use('/', express.static(__dirname));
app.listen(8080);

var foodList = [];
var largestId = 0;

fs.readFile('data/nutrients.json', 'utf8', (err, data) => {
    if (err) throw err;
    foodList = JSON.parse(data);
    for (var food of foodList) {
        if (food.id > largestId) largestId = food.id;
    }
});


app.get('/api/foods', function(req, res) {
    res.json(foodList);
});

app.post('/api/foods', function(req, res) {
    var food = req.body;
    food.id = ++largestId;
    foodList.push(food);
    fs.writeFile('data/nutrients.json', JSON.stringify(foodList), 'utf8', (err) => {
        if (err) throw err;
        res.send({status: "SUCCESS"});
    });
});

app.delete('/api/foods/:foodId', function(req, res) {
});

console.log("starting server in 127.0.0.1:8080");
