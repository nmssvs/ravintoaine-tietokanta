app.controller('homeController', ['$scope', 'ingredientService', 'mealService', '$log',
    function($scope, ingredientService, mealService, $log) {
        $scope.selectedIngredient = undefined;
        $scope.ordering = undefined;
        $scope.newIngredient = undefined;
        $scope.servings = 2;

        $scope.calories = 0;
        $scope.proteins = 0;
        $scope.carbs = 0;
        $scope.fat = 0;

        function updateMealList() {
            mealService.getData().then(function(data) {
                $scope.ingredients = data;
            });
        }

        function updateNutrients() {
            $scope.calories = 0;
            $scope.proteins = 0;
            $scope.carbs = 0;
            $scope.fat = 0;

            for (var food of $scope.ingredients) {
                var amount = food.amount;
                if (food.measure == '100g') {
                    amount /= 100;
                }
                amount /= $scope.servings;

                $scope.calories += amount * food.calories;
                $scope.proteins += amount * food.proteins;
                $scope.carbs += amount * food.carbs;
                $scope.fat += amount * food.fat;
            }
        }

        updateMealList();

        ingredientService.getData().then(function(data) {
            $scope.list = data;
        });

        $scope.update = function() {
            updateMealList();
            updateNutrients();
        }

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
            updateNutrients();
        }

        $scope.updateAmount = function(ingredient) {
            mealService.update(ingredient);
            updateMealList();
            updateNutrients();
        }

        $scope.remove = function(ingredient) {
            mealService.remove(ingredient);
            updateMealList();
            updateNutrients();
        }

        $scope.addNewIngredient = function() {
            $scope.newIngredient.name = $scope.selectedIngredient;
            ingredientService.addIngredient($scope.newIngredient);
            $scope.selectIngredient($scope.newIngredient);
            $scope.newIngredient = undefined;
            $scope.selectedIngredient = "";
        }
    }
]);
