document.addEventListener("DOMContentLoaded", function(){
    document.getElementById("autos").addEventListener("click", function() {
        localStorage.setItem("catID", 101);
        window.location = "products.html"
    });
    document.getElementById("juguetes").addEventListener("click", function() {
        localStorage.setItem("catID", 102);
        window.location = "products.html"
    });
    document.getElementById("muebles").addEventListener("click", function() {
        localStorage.setItem("catID", 103);
        window.location = "products.html"
    });
});

function login() {

    let username = document.querySelector("#username").value;
    let password = document.querySelector("#password").value;

    if (username && password) {
        localStorage.setItem("username", username)
        window.location.href = "index.html"
    } else {
        alert("Error")
    }

}

//Esta funcion te devuelve al login si no tiene usuario en localstorage
document.addEventListener("DOMContentLoaded", function () {
    if (localStorage.getItem("username") == null) {
        window.location = "login.html"
    }
});

