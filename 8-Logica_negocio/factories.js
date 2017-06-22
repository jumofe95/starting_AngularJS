(function(app){
    app.factory("myFactory", function (){

        var text = "Hello world from Factory...";
        return{
            write: function () {
                console.log(text);
            }
        };
    });

}(angular.module("app")));