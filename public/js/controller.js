'use strict';

// the storeController contains two objects:
// - store: contains the product list
// - cart: the shopping cart object
function storeController($scope, $routeParams, DataService) {

    // get store and cart from service
    $scope.store = DataService.store;
    $scope.cart = DataService.cart;

    // use routing to pick the selected product
    if ($routeParams.productSku != null) {
        $scope.product = $scope.store.getProduct($routeParams.productSku);
    }

    $scope.mySearch = function(product){
        return !$scope.search || product.name.indexOf($scope.search) > -1;
    }
}

function registrationController($http) {
    var _this = this;
    _this.completed = false;

    var today = new Date();
    _this.min_date = moment(new Date(today.getFullYear() - 100, today.getMonth(), today.getDay())).format('YYYY-MM-DD');
    _this.max_date = moment(new Date(today.getFullYear() - 12, today.getMonth(), today.getDay())).format('YYYY-MM-DD');

    _this.submitForm = function(form){
        if(form.$valid){
            _this.processing = true;
            $http.post('clients', _this.cliente).success(function(response){
                _this.cliente = null;
                _this.completed = true;
            }).error(function(response){
                _this.completed = false;
                alert('El mail ingresado ya fue usado por otro usuario');
            })
        }
    };
}

function loginController($http, $scope, $location) {
    var _this = this;

    _this.submitForm = function(form){
        if(form.$valid){
            $http.post('clients/log-in', _this.login).success(function(response){
                if (localStorage != null && JSON != null) {
                    localStorage["logged_in_user"] = JSON.stringify(response);
                }
                $scope.$parent.loggedInUser = response;
                $location.url('/');
            }).error(function(response){
                alert('ERROR!!!');
            })
        }
    }
}

function checkoutController($scope, DataService){
    var _this = this;
    $scope.cart = DataService.cart;

    _this.submitForm = function(payForm){
        //todo: guardar la orden y vaciar el carrito
    }
}

function mainController($scope, $location) {
    var _this = this;
    $scope.loggedInUser = null;

    var user = localStorage != null ? localStorage["logged_in_user"] : null;
    if (user != null && JSON != null) {
        try {
            $scope.loggedInUser = JSON.parse(user);
        }
        catch (err) {
            // ignore errors while loading...
        }
    }

    _this.logout = function(){
        if($scope.loggedInUser != null){
            $scope.loggedInUser = null;
            delete localStorage["logged_in_user"];
        }
        $location.url('/');
    }
}