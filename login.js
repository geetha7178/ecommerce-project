document.getElementById("loginForm").onsubmit = function(e) {

    e.preventDefault();

    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;

    let users = JSON.parse(localStorage.getItem("users")) || [];

    let user = users.find(function(u) {
        return u.email == email && u.password == password;
    });

    if (user) {

        localStorage.setItem("loggedInUser", JSON.stringify(user));

        document.getElementById("message").innerHTML =
            "Login Successful! Welcome " + user.name;

    }
    else {

        document.getElementById("message").innerHTML =
            "Invalid Email or Password!";

    }
};