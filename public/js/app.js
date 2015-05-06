'use strict';

var storeApp = angular.module('app', ['ngRoute', 'ui.bootstrap']).
  config(['$routeProvider', function($routeProvider) {
  $routeProvider.
      when('/store', {
        templateUrl: 'partials/store.htm',
        controller: storeController 
      }).
      when('/cart', {
        templateUrl: 'partials/shoppingCart.htm',
        controller: storeController
      }).
      when('/registro', {
        templateUrl: 'partials/registro.html',
        controller: registrationController,
        controllerAs: 'ctrl'
      }).
      when('/login', {
        templateUrl: 'partials/login.html',
        controller: loginController,
        controllerAs: 'ctrl'
      }).
      when('/checkout', {
        templateUrl: 'partials/checkout.html',
        controller: checkoutController,
        controllerAs: 'ctrl'
      }).
      when('/gracias', {
        templateUrl: 'partials/gracias.html',
        controller: storeController
      }).
      otherwise({
        redirectTo: '/store'
      });
}]);

storeApp.factory("DataService", function ($http) {

    // create store
    var myStore = new store($http);

    // create shopping cart
    var myCart = new shoppingCart("app");

    // return data object with store and cart
    return {
        store: myStore,
        cart: myCart
    };
});

storeApp.directive('fixFocus', ['$parse', function ($parse) {
    return function (scope, element, attr) {
        var fn = $parse(attr['fixFocus']);
        element.bind('focus', function (event) {
            if (!scope.$$phase) {
                scope.$apply(function () {
                    fn(scope, { $event: event });
                });
            }
            else {
                fn(scope, { $event: event });
            }
        });
    }
}]);
