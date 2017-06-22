(function(app){
    app.controller("Ctrl",["$scope", function (scope){

        scope.hola = "Hola Mundo!!!"
        console.log(scope.hola);

    }])
}(angular.module("app")));