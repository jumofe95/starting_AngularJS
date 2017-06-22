(function(app){
    app.controller("Ctrl",["$scope", function (scope){

        scope.hola = "Hola Mundo!!!";
        console.log(scope.hola);

        scope.data = {
            id:'1',
            name:'Julian'
        }

    }])
        .controller("Child1", ["$scope", function (scope){
            var listener = scope.$on('evento', function () {
                console.log(scope.data.name+' desde $on');
            });

            scope.click = function(){
                console.log(scope.data.name+' desde child1');
                listener();
            }
        }])

        .controller("Child2", ["$scope", function (scope){
            scope.click = function(){
                console.log(scope.data.name+' desde child2');
            }
        }])
}(angular.module("app")));