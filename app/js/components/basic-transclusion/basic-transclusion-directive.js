var app;
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
                link: function (scope, ielem, attrs) {
                    scope.title = 'Charlie';
                }
            };
            return basicTransclusionDefinition;
        }
        components.BasicTransclusionFactory = BasicTransclusionFactory;
    })(components = app.components || (app.components = {}));
})(app || (app = {}));
