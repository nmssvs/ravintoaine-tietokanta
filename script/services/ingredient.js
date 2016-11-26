app.service('ingredientService', ['$http', '$log', function($http, $log) {

    this.getData = function() {
        return $http.get('/api/foods').then(function(response) {
            return response.data;
        });
    }

    this.getId = function(id) {
        return $http.get('/api/foods/' + id).then(function(response) {
            return response.data;
        });
    }

    this.addIngredient = function(ingredient) {
        return $http({
            url: '/api/foods', 
            method: 'POST',
            data: JSON.stringify(ingredient), 
            headers: {'Content-Type': 'application/json'}
        }).then(function(response) {
            return response.data;
        });
    }

    this.editIngredient = function(ingredient) {
        $http({
            url: '/api/foods/' + ingredient.id,
            method: 'PUT',
            data: JSON.stringify(ingredient),
            headers: {'Content-Type': 'application/json'}
        });
    }

    this.delete = function(id) {
        $http.delete('/api/foods/' + id);
    }

}]);
