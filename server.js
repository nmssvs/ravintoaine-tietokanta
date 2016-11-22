var express = require('express');
var fs = require('fs');
var app = express();
var bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use('/', express.static(__dirname));
app.listen(8080);

var foodList = [];
var mealList = [];
var largestId = 0;

function saveFoodListToFile() {
    fs.writeFile('data/nutrients.json', JSON.stringify(foodList), 'utf8', (err) => {
        if (err) throw err;
    });
}

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

app.get('/api/foods/:foodId', function(req, res) {
    for (var food of foodList) {
        if (food.id == req.params.foodId) {
            res.json(food);
            break;
        }
    }
});

app.get('/api/meal', function(req, res) {
    res.json(mealList);
});

app.post('/api/foods', function(req, res) {
    var food = req.body;
    food.id = ++largestId;
    foodList.push(food);
    saveFoodListToFile();
});

app.post('/api/meal', function(req, res) {
    mealList.push(req.body);
});

app.put('/api/foods/:foodId', function(req, res) {
    for (var food of foodList) {
        if (food.id == req.body.id) {
            food.name = req.body.name;
            food.measure = req.body.measure;
            food.calories = req.body.calories;
            food.carbs = req.body.carbs;
            food.fat = req.body.fat;
            food.proteins = req.body.proteins;
            saveFoodListToFile();
            break;
        }
    }
});

app.put('/api/meal/:foodId', function(req, res) {
    for (var food of mealList) {
        if (food.id == req.body.id) {
            food.amount = req.body.amount;
            break;
        }
    }
});

app.delete('/api/foods/:foodId', function(req, res) {
    for(var i = 0; i < foodList.length; i++) {
        if (foodList[i].id == req.params.foodId) {
            foodList.splice(i, 1);
            break;
        }
    }
});

app.delete('/api/meal/:foodId', function(req, res) {
    for(var i = 0; i < mealList.length; i++) {
        if (mealList[i].id == req.params.foodId) {
            mealList.splice(i, 1);
            break;
        }
    }
});

console.log("starting server in 127.0.0.1:8080");
