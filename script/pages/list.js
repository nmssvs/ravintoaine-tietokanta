app.controller('listController', ['$scope', '$log', 'ingredientService', 
    function($scope, $log, ingredientService) {
        ingredientService.getData(function(data) {
            $scope.data = data;
        });
    }
]);
