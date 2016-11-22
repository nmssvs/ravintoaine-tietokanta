app.controller('homeController', ['$scope', 'ingredientService', '$log',
    function($scope, ingredientService, $log) {
        $scope.selectedIngredient = undefined;

        ingredientService.getData().then(function(data) {
            $scope.list = data;
            $log.debug(data);
        });
    }
]);
