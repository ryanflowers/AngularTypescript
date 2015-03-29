/// <reference path="basic-transclusion/basic-transclusion-directive.ts" />
var app;
(function (app) {
    var components;
    (function (components) {
        angular.module('myApp.components', []).directive('basicTransclusion', [app.components.BasicTransclusionFactory]);
    })(components = app.components || (app.components = {}));
})(app || (app = {}));
