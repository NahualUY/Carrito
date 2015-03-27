
function store() {
    this.products = [
        new product("banana.jpg", "Banana", "Description...", 12, 11),
	    new product("frutilla.jpg", "Frutilla", "Description...", 20),
	    new product("hamburgesa.jpg", "Hamburgesa", "Description...", 50),
	    new product("mango.jpg", "Mango", "Description...", 8),
	    new product("manzana.jpg", "Manzana", "Description...", 17),
	    new product("naranja.jpg", "Naranja", "Description...", 10, 10, 2)
    ];
}
store.prototype.getProduct = function (sku) {
    for (var i = 0; i < this.products.length; i++) {
        if (this.products[i].sku == sku)
            return this.products[i];
    }
    return null;
}
