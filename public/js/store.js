
function store() {
    this.products = [
        new product("APL", "Apple", "Eat one every day to keep the doctor away!", 12),
        new product("AVC", "Avocado", "Guacamole anyone?", 16),
        new product("BAN", "Banana", "These are rich in Potassium and easy to peel.", 4),
        new product("CTP", "Cantaloupe", "Delicious and refreshing.", 3),
        new product("FIG", "Fig", "OK, not that nutritious, but sooo good!", 10),
        new product("GRF", "Grapefruit", "Pink or red, always healthy and delicious.", 11),
        new product("GRP", "Grape", "Wine is great, but grapes are even better.", 8),
        new product("GUA", "Guava", "Exotic, fragrant, tasty!", 8),
        new product("KIW", "Kiwi", "These come from New Zealand.", 14),
        new product("LYC", "Lychee", "Unusual and highly addictive!", 18),
        new product("MAN", "Mango", "Messy to eat, but well worth it.", 8),
        new product("ORG", "Orange", "Vitamin C anyone? Go ahead, make some juice.", 9),
        new product("PAP", "Papaya", "Super-popular for breakfast.", 5),
        new product("PCH", "Peach", "Add some cream and enjoy.", 19)
    ];
}
store.prototype.getProduct = function (sku) {
    for (var i = 0; i < this.products.length; i++) {
        if (this.products[i].sku == sku)
            return this.products[i];
    }
    return null;
}
