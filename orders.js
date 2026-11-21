function displayOrders() {

    let orders = JSON.parse(localStorage.getItem("orders")) || [];

    let output = "";

    orders.forEach(function(order, index) {

        output += `
            <div class="product">
                <h3>Order ${index + 1}</h3>
                <p>Name: ${order.name}</p>
                <p>Address: ${order.address}</p>
                <p>Phone: ${order.phone}</p>
                <p>Status: ${order.status}</p>

                <select id="status${index}">
                    <option>Order Placed</option>
                    <option>Processing</option>
                    <option>Shipped</option>
                    <option>Delivered</option>
                </select>

                <button onclick="updateStatus(${index})">
                    Update Status
                </button>
            </div>
        `;
    });

    document.getElementById("orders").innerHTML = output;
}

function updateStatus(index) {

    let orders = JSON.parse(localStorage.getItem("orders")) || [];

    let status = document.getElementById("status" + index).value;

    orders[index].status = status;

    localStorage.setItem("orders", JSON.stringify(orders));

    localStorage.setItem("order", JSON.stringify(orders[index]));

    displayOrders();

    alert("Order Status Updated!");
}

displayOrders();