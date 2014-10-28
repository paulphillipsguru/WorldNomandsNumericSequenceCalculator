/// <reference path="scapp.ts" />

SCApp.config(['$routeProvider', $routeProvider => {
    $routeProvider.when("/#home", {
        templateUrl: '/UI/Views/Home.html'
        
        })
   .otherwise({
        redirectTo: "/#home"});
}]);
