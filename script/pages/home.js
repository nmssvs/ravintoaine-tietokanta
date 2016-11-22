app.controller('homeController', ['$scope', 'ingredientService', 'mealService', '$log',
    function($scope, ingredientService, mealService, $log) {
        $scope.selectedIngredient = undefined;
        $scope.ordering = undefined;

        function updateMealList() {
            mealService.getData().then(function(data) {
                $scope.ingredients = data;
            });
        }

        updateMealList();

        ingredientService.getData().then(function(data) {
            $scope.list = data;
        });

        $scope.selectIngredient = function(data) {
            var ingredient = data;
            if (ingredient.measure == '100g') {
                ingredient.amount = 100;
            } else {
                ingredient.amount = 1;
            }
            mealService.add(ingredient);
            $scope.selectedIngredient = undefined;
            updateMealList();
        }

        $scope.updateAmount = function(ingredient) {
            mealService.update(ingredient);
            updateMealList();
        }

        $scope.remove = function(ingredient) {
            mealService.remove(ingredient);
            updateMealList();
        }
    }
]);
