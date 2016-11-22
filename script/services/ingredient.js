app.service('ingredientService', ['$http', '$log', function($http, $log) {
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
        return $http.get('/api/foods').then(function(response) {
            return response.data;
        });
    }

    this.addIngredient = function(ingredient) {
            $log.debug(JSON.stringify(ingredient));
        $http({
            url: '/api/foods', 
            method: 'POST',
            data: JSON.stringify(ingredient), 
            headers: {'Content-Type': 'application/json'}
        });
    }
}]);
