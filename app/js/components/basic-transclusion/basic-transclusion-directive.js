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
