app.controller('listController', ['$scope', '$log', 'ingredientService', 
    function($scope, $log, ingredientService) {
        $scope.ordering = 'name';

        ingredientService.getData().then(function(data) {
            $scope.data = data;
        });

        $scope.orderBy = function(order) {
            if ($scope.ordering == order) {
                $scope.ordering = '-' + order;
            } else {
                $scope.ordering = order;
            }
        }
    }
]);
