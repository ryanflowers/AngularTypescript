/// <reference path="basic-transclusion/basic-transclusion-directive.ts" />
module app.components {
    angular.module('myApp.components', [])

//        .config(['$routeProvider', function ($routeProvider) {
//            $routeProvider.when('/main', {
//                templateUrl: 'main/main.html',
//                controller: 'MainCtrl'
//            });
//        }])
        .directive('basicTransclusion', [app.components.BasicTransclusionFactory]);
}