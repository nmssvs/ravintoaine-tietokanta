app.controller('homeController', ['$scope', 'ingredientService', '$log',
    function($scope, ingredientService, $log) {
        $scope.selectedIngredient = undefined;
        $scope.ingredients = [];
        $scope.ordering = undefined;

        ingredientService.getData().then(function(data) {
            $scope.list = data;
        });

        $scope.selectIngredient = function(ingredient) {
            $log.debug(ingredient);
            $scope.ingredients.push(ingredient);
            $scope.selectedIngredient = undefined;
        }
    }
]);
