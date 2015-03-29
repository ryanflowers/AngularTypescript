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
;var app;
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
;var app;
(function (app) {
    var components;
    (function (components) {
        function BasicTransclusionFactory() {
            var basicTransclusionDefinition = {
                transclude: true,
                scope: {
                    setTitle: '&setTitle'
                },
                templateUrl: './components/basic-transclusion/basic-transclusion.html',
                link: function (scope, ielem, attrs, ctrl, transclude) {
                    transclude(function (clone) {
                        angular.forEach(clone, function (cloneEl) {
                            if (cloneEl.attributes) {
                                var tId = cloneEl.attributes.getNamedItem("transclude-to").value;
                                var target = ielem.find('[transclude-id="' + tId + '"]');
                                if (target.length) {
                                    target.append(cloneEl);
                                }
                                else {
                                    cloneEl.remove;
                                }
                            }
                        });
                    });
                }
            };
            return basicTransclusionDefinition;
        }
        components.BasicTransclusionFactory = BasicTransclusionFactory;
    })(components = app.components || (app.components = {}));
})(app || (app = {}));
;/// <reference path="basic-transclusion/basic-transclusion-directive.ts" />
var app;
(function (app) {
    var components;
    (function (components) {
        angular.module('myApp.components', []).directive('basicTransclusion', [app.components.BasicTransclusionFactory]);
    })(components = app.components || (app.components = {}));
})(app || (app = {}));
;var app;
(function (app) {
    var main;
    (function (main) {
        var MainController = (function () {
            function MainController($scope) {
                var scope = $scope;
                scope.title = "Ryan";
                scope.setMyTitle = function (value) {
                    scope.title = value;
                };
            }
            return MainController;
        })();
        main.MainController = MainController;
    })(main = app.main || (app.main = {}));
})(app || (app = {}));
;/// <reference path="./main-controller.ts" />
var app;
(function (app) {
    var main;
    (function (main) {
        angular.module('myApp.main', ['ngRoute', 'myApp.components']).config(['$routeProvider', function ($routeProvider) {
            $routeProvider.when('/main', {
                templateUrl: 'main/main.html',
                controller: 'MainCtrl'
            });
        }]).controller('MainCtrl', ['$scope', app.main.MainController]);
    })(main = app.main || (app.main = {}));
})(app || (app = {}));
