'use strict';

var storeApp = angular.module('app', ['ngRoute']).
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
        controllerAs: 'ctrl'
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