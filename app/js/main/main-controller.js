var app;
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
