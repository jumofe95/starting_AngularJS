(function(app){
    app.controller("Ctrl", function ($scope){

        $scope.fullname = function(){
            return ($scope.name || " ")+" "+($scope.surname || " ");
        };
    })

}(angular.module("app")));