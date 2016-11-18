app.service('ingredientService', ['$http', '$log', '$q', function($http, $log, $q) {
    function parseToObject(data) {
        var lines = data.split("\n");
        var ingredients = {};
        for (let ingredient of lines) {
            var split = ingredient.split(",");
            if (split[0]) {
                ingredients[split[0]] = {
                    measure: split[1],
                    calories: parseFloat(split[2]),
                    carbs: parseFloat(split[3]),
                    fat: parseFloat(split[4]),
                    proteins: parseFloat(split[5])
                }
            }
        }
        $log.debug(ingredients);
        return ingredients;
    }

    this.getData = function(callback) {
        $http.get('/data/nutrients.csv')
            .success(function(data) {
                callback(parseToObject(data));
            })
    }
}]);
