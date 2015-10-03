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
        return !$scope.search || product.name.toLowerCase().indexOf($scope.search.toLowerCase()) > -1;
    }
}

function registrationController($http) {
    var _this = this;
    _this.completed = false;

    _this.submitForm = function(form){
        if(form.$valid){
            _this.processing = true;
            $http.post('clients', _this.cliente).success(function(response){
                _this.cliente = null;
                _this.completed = true;
            }).error(function(response){
                _this.completed = true;
                alert('ERROR!!!');
            })
        }
    }
}
