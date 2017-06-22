(function(app){
    app.service("myService", function ($http){

        var text = "Hello world from service..!";

        return{
            getData: function() {
                return $http({
                    method: 'GET',
                    url: 'names.json'
                });
            },
            write: function () {
                console.log(text);
            }
        };

    })

}(angular.module("app")));