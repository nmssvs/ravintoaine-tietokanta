app.service('mealService', ['$http', '$log', 'ingredientService', 
    function($http, $log, ingredientService) {

        this.getData = function() {
            return $http.get('/api/meal').then(function(response) {
                return response.data;
            });
        }

        this.add = function(ingredient) {
            return $http({
                url: '/api/meal', 
                method: 'POST',
                data: JSON.stringify(ingredient), 
                headers: {'Content-Type': 'application/json'}
            }).then(function(response) {
                return response.data;
            });
        }

        this.update = function(ingredient) {
            return $http({
                url: '/api/meal/' + ingredient.id,
                method: 'PUT',
                data: JSON.stringify(ingredient),
                headers: {'Content-Type': 'application/json'}
            }).then (function(response) {
                return response.data;
            });
        }

        this.remove = function(ingredient) {
            return $http.delete('/api/meal/' + ingredient.id).then(function(response) {
                return response.data;
            });
        }

        this.resetMeal = function() {
            $http.delete('/api/meal').then(function(response) {
                return response.data;
            });
        }
    }
]);
