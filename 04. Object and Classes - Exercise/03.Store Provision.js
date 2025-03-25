function solve(initial, orders) {
    let stock = new Map();

    for (let i = 0; i < initial.length; i += 2) {
        let product = initial[i];
        let quantity = Number(initial[i + 1]);

        stock.set(product, quantity);
    }

    for (let i = 0; i < orders.length; i++) {
        let product = orders[i];
        let quantity = Number(orders[i + 1]);

        /*if (stock.has(product)) {
            let currentQuantity = stock.get(product);
            stock.set(product, currentQuantity + quantity);
        } else {
            stock.set(product, quantity);
        }*/

            if (!stock.has(product)) {
                stock.set(product, 0);
            }

            let currentQuantity = stock.get(product);
            stock.set(product, currentQuantity + quantity);
    }

    for (let [product, quantity] of stock) {
        console.log(`${product} -> ${quantity}`);
    }
}

solve(
    [
        'Chips', '5', 'CocaCola', '9', 'Bananas', '14', 'Pasta', '4', 'Beer', '2'
        ],
        [
        'Flour', '44', 'Oil', '12', 'Pasta', '7', 'Tomatoes', '70', 'Bananas', '30'
        ]        
);