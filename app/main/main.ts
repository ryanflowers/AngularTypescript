/// <reference path="./main-controller.ts" />
module app.main {
    angular.module('myApp.main', ['ngRoute', 'myApp.components'])

        .config(['$routeProvider', function ($routeProvider) {
            $routeProvider.when('/main', {
                templateUrl: 'main/main.html',
                controller: 'MainCtrl'
            });
        }])
        .controller('MainCtrl', ['$scope', app.main.MainController]);
}