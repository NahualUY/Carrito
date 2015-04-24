function product(sku, name, description, price, cart_price, increment, unit, min_age, discount) {
    this.sku = sku; // product code (SKU = stock keeping unit)
    this.name = name;
    this.description = description;
    this.price = price;
    this.cart_price = price;
    this.increment = 1;
    this.unit = unit;
    this.min_age = min_age;
    this.discount = discount;
    if(cart_price) {
        this.cart_price = cart_price;
    }
    if(increment) {
        this.increment = increment;
    }
}
