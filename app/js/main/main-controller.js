var app;
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
//# sourceMappingURL=main-controller.js.map