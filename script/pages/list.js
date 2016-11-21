app.controller('listController', ['$scope', '$log', 'ingredientService', 
    function($scope, $log, ingredientService) {
        ingredientService.getData().then(function(data) {
            $scope.data = data;
        });
    }
]);
