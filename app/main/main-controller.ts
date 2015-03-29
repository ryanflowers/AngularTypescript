module app.main {
    export class MainController {

        constructor($scope: ng.IScope){
            var scope = (<any>$scope);
            scope.title = "Ryan";
            scope.setMyTitle = (value) => {
                scope.title = value;
            }
        }
    }
}


