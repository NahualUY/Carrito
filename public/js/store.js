
function store($http) {
    _this = this;
    $http.get('products').success(function(products){
        _this.products = [];
        for(var i = 0; i < products.length; i++){
            var prod = products[i];
            _this.products.push(new product(prod.imagen, prod.nombre, prod.descripcion, prod.precio, prod.precio,
                1, prod.Unidad.singular, prod.edad_minima, prod.descuento))
        }
    });
}
store.prototype.getProduct = function (sku) {
    for (var i = 0; i < this.products.length; i++) {
        if (this.products[i].sku == sku)
            return this.products[i];
    }
    return null;
}
