app.controller('listController', ['$scope', '$log', 'ingredientService', 
    function($scope, $log, ingredientService) {
        $scope.ordering = 'name';

        function updateData() {
            ingredientService.getData().then(function(data) {
                $scope.data = data;
            });
        }

        updateData();

        $scope.orderBy = function(order) {
            if ($scope.ordering == order) {
                $scope.ordering = '-' + order;
            } else {
                $scope.ordering = order;
            }
        }

        $scope.delete = function(id) {
            ingredientService.delete(id);
            updateData();
        }
    }
]);
