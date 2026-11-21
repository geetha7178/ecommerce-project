document.getElementById("registerForm").onsubmit = function(e) {

    e.preventDefault();

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;

    let users = JSON.parse(localStorage.getItem("users")) || [];

    let exists = users.find(function(user) {
        return user.email == email;
    });

    if (exists) {
        document.getElementById("message").innerHTML =
            "User already registered!";
    }
    else {

        users.push({
            name: name,
            email: email,
            password: password
        });

        localStorage.setItem("users", JSON.stringify(users));

        document.getElementById("message").innerHTML =
            "Registration Successful!";

    }
};