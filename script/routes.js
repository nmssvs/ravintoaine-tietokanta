app.config(function($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: 'pages/home.html',
            controller: 'homeController'
        })
        .when('/list', {
            templateUrl: 'pages/list.html',
            controller: 'listController'
        })
        .when('/add', {
            templateUrl: 'pages/add.html',
            controller: 'addController'
        });
});
