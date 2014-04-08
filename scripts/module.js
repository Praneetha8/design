var designCars = angular.module("designCars", ["ngRoute"]);

designCars.config(function($routeProvider) {
    $routeProvider.when('/',
      {
        templateUrl: "partials/home.html",
        controller: "HomeCtrl"
      }
    )
        .when('/models',
    {
      templateUrl:"partials/model.html",
      controller:"ModelCtrl"
    }
    )
        .when('/engines',
    {
      templateUrl:"partials/engine.html",
      controller:"EngineCtrl"
    }
    )
        .when('/colors',
    {
      templateUrl:"partials/color.html",
      controller:"ColorCtrl"
    }
    )
    .when('/models/:modelId',
    {
      templateUrl:"partials/details.html",
      controller:"ModelDetailsCtrl"
    }
    )
    .otherwise({redirectTo:'/'})
})

