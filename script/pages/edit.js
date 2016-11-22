app.controller('editController', ['$scope', '$routeParams', 'ingredientService',
    function($scope, $routeParams, ingredientService) {
        ingredientService.getId($routeParams.id).then(function(data) {
            $scope.ingredient = data;
        });

        $scope.edit = function() {
            ingredientService.editIngredient($scope.ingredient);
        }
    }
]);
