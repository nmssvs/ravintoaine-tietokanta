app.service('mealService', ['$http', '$log', 'ingredientService', 
    function($http, $log, ingredientService) {

        this.getData = function() {
            return $http.get('/api/meal').then(function(response) {
                return response.data;
            });
        }

        this.add = function(ingredient) {
            $http({
                url: '/api/meal', 
                method: 'POST',
                data: JSON.stringify(ingredient), 
                headers: {'Content-Type': 'application/json'}
            });
        }

        this.remove = function(ingredient) {
            $http.delete('/api/meal/' + ingredient.id);
        }
    }
]);
