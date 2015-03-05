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
      otherwise({
        redirectTo: '/store'
      });
}]);

storeApp.factory("DataService", function () {

    // create store
    var myStore = new store();

    // create shopping cart
    var myCart = new shoppingCart("app");

    // return data object with store and cart
    return {
        store: myStore,
        cart: myCart
    };
});