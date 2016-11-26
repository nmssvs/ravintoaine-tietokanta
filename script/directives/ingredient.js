app.directive('ingredient', ['mealService', '$log', function(mealService, $log) {
    return {
        restrict: 'A',
        templateUrl: 'pages/directives/ingredient.html',
        scope: {
            ingredient: '=',
            updateNutrients: '&'
        },
        link: function(scope, elem, attrs) {
            scope.$watch('ingredient.amount', function(newVal, oldVal) {
                if (newVal) {

                    $log.debug(newVal);

                    mealService.update(scope.ingredient).then(function(data) {
                        $log.debug('return from callback');
                        scope.updateNutrients();
                    });
                }
            });
        }
    };
}]);
