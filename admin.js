let products = JSON.parse(localStorage.getItem("products")) || [];

displayProducts();

document.getElementById("productForm").onsubmit = function(e) {

    e.preventDefault();

    let name = document.getElementById("name").value;
    let price = document.getElementById("price").value;

    products.push({ name: name, price: price });

    localStorage.setItem("products", JSON.stringify(products));

    displayProducts();

    document.getElementById("productForm").reset();
};

function displayProducts() {

    let output = "";

    products.forEach(function(product, index) {

        output += "<p>" + product.name + " - ₹" + product.price +
        " <button onclick='deleteProduct(" + index + ")'>Delete</button></p>";

    });

    document.getElementById("productList").innerHTML = output;
}

function deleteProduct(index) {

    products.splice(index, 1);

    localStorage.setItem("products", JSON.stringify(products));

    displayProducts();
}