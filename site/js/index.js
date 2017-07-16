var app = angular.module('app', ['ngRoute', 'ngAnimate', 'mgcrea.ngStrap']);

app.config(function($routeProvider, $locationProvider) {
    $locationProvider.hashPrefix('');
    // not supported by any of browsers fully yet
    // $locationProvider.html5Mode({
    //      enabled: true,
    //      requireBase: false
    //  });
    $routeProvider
        .when('/about', {
            templateUrl: 'site/templates/body/about.html',
            controller: 'aboutController'
        })

        .when('/login', {
            templateUrl: 'site/templates/body/login.html',
            controller: 'loginController'
        })

        .when('/test/:number', {
            templateUrl: 'site/templates/body/about.html',
            controller: 'aboutController'
        })

        .when('/index', {
            templateUrl: 'site/templates/body/index.html',
            controller: 'indexController'
        })

        .otherwise({
            redirectTo: '/login'
        });
});

