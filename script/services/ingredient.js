app.service('ingredientService', ['$http', function($http) {
    function parseToObject(data) {
        var lines = data.split("\n");
        var ingredients = [];
        for (let ingredient of lines) {
            var split = ingredient.split(",");
            if (split[0]) {
                ingredients.push({
                    name: split[0],
                    measure: split[1],
                    calories: parseFloat(split[2]),
                    carbs: parseFloat(split[3]),
                    fat: parseFloat(split[4]),
                    proteins: parseFloat(split[5])
                })
            }
        }
        return ingredients;
    }

    this.getData = function() {
        return $http.get('/data/nutrients.csv').then(function(response) {
            return parseToObject(response.data);
        });
    }

    this.addIngredient = function(ingredient) {
    }
}]);
