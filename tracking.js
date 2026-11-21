let order = JSON.parse(localStorage.getItem("order"));

let tracking = document.getElementById("tracking");

if (order) {

    tracking.innerHTML = `
        <h3>Customer: ${order.name}</h3>
        <p>Address: ${order.address}</p>
        <p>Phone: ${order.phone}</p>
        <h2>Status: ${order.status}</h2>
    `;

} else {

    tracking.innerHTML = "<h3>No orders found!</h3>";

}