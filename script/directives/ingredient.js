app.directive('ingredient', ['mealService', '$log', function(mealService, $log) {
    return {
        restrict: 'A',
        templateUrl: 'pages/directives/ingredient.html',
        transclude: true,
        scope: {
            ingredient: '=',
            remove: '&',
            updateNutrients: '&'
        },
        link: function(scope, elem, attrs) {
            scope.$watch('ingredient.amount', function(newVal, oldVal) {
                if (newVal && newVal != oldVal) {
                    mealService.update(scope.ingredient).then(function(data) {
                        scope.updateNutrients();
                    });
                }
            });
        }
    };
}]);
