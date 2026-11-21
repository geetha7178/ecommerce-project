document.getElementById("orderForm").onsubmit = function(e) {

    e.preventDefault();

    let name = document.getElementById("customerName").value;
    let address = document.getElementById("address").value;
    let phone = document.getElementById("phone").value;

    let order = {
        name: name,
        address: address,
        phone: phone,
        status: "Order Placed"
    };

    let orders = JSON.parse(localStorage.getItem("orders")) || [];

    orders.push(order);

    localStorage.setItem("orders", JSON.stringify(orders));
    localStorage.setItem("order", JSON.stringify(order));

    document.getElementById("orderMessage").innerHTML =
        "<h2>Order Placed Successfully!</h2>" +
        "<p>Thank you " + name + " for shopping with us.</p>" +
        "<a href='tracking.html'>Track Your Order</a>";
};