var app = angular.module('app', ['ngRoute', 'ngAnimate', 'mgcrea.ngStrap']);

app.config(function($routeProvider, $locationProvider) {
    $locationProvider.hashPrefix('');
    $routeProvider
        .when('/', {
            templateUrl: 'site/templates/body/index.html',
            controller: 'indexController'
        })
        .when('/about', {
            templateUrl: 'site/templates/body/about.html',
            controller: 'aboutController'
        })
        .otherwise({
            redirectTo: '/'
        });
});