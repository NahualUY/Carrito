function product(sku, name, description, price, cart_price, increment) {
    this.sku = sku; // product code (SKU = stock keeping unit)
    this.name = name;
    this.description = description;
    this.price = price;
    this.cart_price = price;
    this.increment = 1;
    if(cart_price) {
        this.cart_price = cart_price;
    }
    if(increment) {
        this.increment = increment;
    }
}
