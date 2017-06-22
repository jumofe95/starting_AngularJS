(function(app){
    app.controller("Ctrl", ["$scope", function (scope){

        scope.send = function () {
            if(scope.myForm.$valid){
                console.log('OK');
                console.log(scope.data);
            }else{
                console.log('KO');
            }
        }


    }])

}(angular.module("app")));