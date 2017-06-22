(function(app){
    app.config(function (myCulture, myProviderProvider) {
        myProviderProvider.setCulture(myCulture);
    });

}(angular.module("app")));