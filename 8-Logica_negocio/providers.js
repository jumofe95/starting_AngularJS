(function(app){
    app.provider("myProvider", function (){

        var defaultText = "Hello world from provider!";
        var text = defaultText;

        this.setCulture = function (culture) {
            (culture === 'es') ? text = "Hola mundo desde provider!" : defaultText;
        };

        this.$get = ['$http', function (http) {
            return {
                write: function () {
                    console.log(text);
                }
            };
        }];
    });

}(angular.module("app")));