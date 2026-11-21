let cart = [];

function addToCart(product, price) {

    cart.push({ name: product, price: price });

    displayCart();
}

function displayCart() {

    let output = "";
    let total = 0;

    cart.forEach(function(item, index) {

        output += "<p>" + item.name + " - ₹" + item.price +
        " <button onclick='removeItem(" + index + ")'>Remove</button></p>";

        total += item.price;
    });

    document.getElementById("cart").innerHTML = output;

    document.getElementById("total").innerHTML = "Total: ₹" + total;
}

function removeItem(index) {

    cart.splice(index, 1);

    displayCart();
}

function displayAdminProducts() {

    let products = JSON.parse(localStorage.getItem("products")) || [];

    let output = "";

    products.forEach(function(product) {

        output += "<div class='product'>" +
        "<h3>" + product.name + "</h3>" +
        "<p>Price: ₹" + product.price + "</p>" +
        "<button onclick=\"addToCart('" + product.name + "'," + product.price + ")\">Add to Cart</button>" +
        "</div>";

    });

    document.getElementById("adminProducts").innerHTML = output;
}

displayAdminProducts();