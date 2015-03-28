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
//# sourceMappingURL=admin.js.map;var app;
(function (app) {
    // Declare app level module which depends on views, and components
    angular.module('myApp', [
        'ngRoute',
        'myApp.main',
        'myApp.admin'
    ]).config(['$routeProvider', function ($routeProvider) {
        $routeProvider.otherwise({ redirectTo: '/main' });
    }]);
})(app || (app = {}));
//# sourceMappingURL=app.js.map;var app;
(function (app) {
    var main;
    (function (main) {
        var MainController = (function () {
            function MainController($scope) {
                $scope.title = "test";
            }
            return MainController;
        })();
        main.MainController = MainController;
    })(main = app.main || (app.main = {}));
})(app || (app = {}));
//# sourceMappingURL=main-controller.js.map;/// <reference path="./main-controller.ts" />
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