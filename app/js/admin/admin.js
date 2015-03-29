var app;
(function (app) {
    var main;
    (function (main) {
        angular.module('myApp.admin', ['ngRoute']).config(['$routeProvider', function ($routeProvider) {
            $routeProvider.when('/admin', {
                templateUrl: 'admin/admin.html',
                controller: 'AdminCtrl'
            });
        }]).controller('AdminCtrl', [function () {
        }]);
    })(main = app.main || (app.main = {}));
})(app || (app = {}));
