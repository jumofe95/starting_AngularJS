(function(app){

    app.controller("Ctrl", function (myFactory, myService, myProvider, $http, $scope){
        myFactory.write();
        myService.write();
        myProvider.write();


        // Simple GET request example:
        myService.getData().then(function successCallback(response) {
            $scope.names = response.data;
            $scope.model = $scope.model||{};
            $scope.model.id = "2";

        }, function errorCallback(response) {
            console.log('KO');
        });


    });

}(angular.module("app")));