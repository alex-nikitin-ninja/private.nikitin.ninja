var app = angular.module('app', ['ngRoute', 'ngAnimate', 'mgcrea.ngStrap']);

app.config(function($routeProvider, $locationProvider) {
    $locationProvider.hashPrefix('');
    // not supported by any of browsers fully yet
    // $locationProvider.html5Mode({
    //      enabled: true,
    //      requireBase: false
    //  });
    $routeProvider
        .when('/', {
            templateUrl: 'site/templates/body/index.html',
            controller: 'indexController'
        })

        .when('/about', {
            templateUrl: 'site/templates/body/about.html',
            controller: 'aboutController'
        })

        .when('/test/:number', {
            templateUrl: 'site/templates/body/about.html',
            controller: 'aboutController'
        })

        .otherwise({
            redirectTo: '/'
        });
});
