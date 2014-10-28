/// <reference path="scapp.ts" />
SCApp.config([
    '$routeProvider', function ($routeProvider) {
        $routeProvider.when("/#home", {
            templateUrl: '/UI/Views/Home.html'
        }).otherwise({ redirectTo: "/#home" });
    }]);
//# sourceMappingURL=SCRoute.js.map
