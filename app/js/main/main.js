/// <reference path="./main-controller.ts" />
var app;
(function (app) {
    var main;
    (function (main) {
        angular.module('myApp.main', ['ngRoute']).config(['$routeProvider', function ($routeProvider) {
            $routeProvider.when('/main', {
                templateUrl: 'main/main.html',
                controller: 'MainCtrl'
            });
        }]).controller('MainCtrl', ['$scope', app.main.MainController]);
    })(main = app.main || (app.main = {}));
})(app || (app = {}));
//# sourceMappingURL=main.js.map