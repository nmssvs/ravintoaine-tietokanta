app.service('mealService', ['$http', '$log', 'ingredientService', 
    function($http, $log, ingredientService) {

        this.getData = function() {
            return $http.get('/api/meal').then(function(response) {
                return response.data;
            });
        }

        this.addIngredient = function(ingredient) {
            $http({
                url: '/api/meal', 
                method: 'POST',
                data: JSON.stringify(ingredient), 
                headers: {'Content-Type': 'application/json'}
            });
        }
    }
]);
