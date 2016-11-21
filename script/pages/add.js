app.controller('addController', ['$scope', '$log', 'ingredientService',
    function($scope, $log, ingredientService) {
        $scope.ingredient = {
            calories: 0.0,
            carbs: 0.0,
            fat: 0.0,
            proteins: 0.0
        }

        $scope.add = function() {
            $log.debug("Sent");
        }
    }
]);
