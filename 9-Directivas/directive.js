(function(app){
    app.directive("monthSelect", function (){

        return {
            template: '<select ng-model="selectedMonth" ng-options="m as m for m in months"></select>',
            restrict: 'E',
            scope: {
                selectedMonth: '@'
            },
            link:function(scope,elem,attrs){
                scope.months = [
                    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12
                ];
                scope.selectedMonth = scope.months[0];
            }
        };


    })
        .directive("yearSelect", function (){

        return {
            template: '<select ng-model="selectedYear" ng-options="y as y for y in years"></select>',
            restrict: 'E',
            scope: {
                selectedYear: '@'
            },
            link:function(scope,elem,attrs){
                scope.years = []; //array of years

                var actualDate = new Date(); //get actual date
                var actualYear = actualDate.getFullYear(); //get actual year

                const QUANTITY = 30;
                for (var i = -1; i < QUANTITY; i++) {
                    scope.years.push(actualYear + i);
                }

                scope.selectedYear = scope.years[1];
            }
        };


    })

}(angular.module("app")));