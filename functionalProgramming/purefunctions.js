const user = {
    name: 'Kim',
    active: true,
    cart: [],
    purchases: []
};

// apply compose - right to left
purchaseItem(emptyCart, buyItem, applyTaxToItems, addItemTocart)(user, {name: 'laptop', price: 562})

console.log(purchaseItem(user, {name: 'laptop', price: 356}))

function addItemTocart(item) {

}

function applyTaxToItems() {}

function buyItem() {}

function emptyCart() {}