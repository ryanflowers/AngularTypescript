module app.components {
    export function BasicTransclusionFactory() {
        var basicTransclusionDefinition = {
            transclude: true,
            scope: {
                setTitle: '&setTitle'
            },
            templateUrl: './components/basic-transclusion/basic-transclusion.html',
            link: function (scope, ielem, attrs) {
                scope.title = 'Charlie';
            }
        }
        return basicTransclusionDefinition;
    }
}