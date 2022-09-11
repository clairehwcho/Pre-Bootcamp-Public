var cookie = document.querySelector(".cookieContainer");

function remove () {
    cookie.remove();
}

function cartalert () {
    alert("Your cart is empty!");
}

var img = document.querySelector("#succulents");
var before = img. src;

function over (element) {
    img.src = "images/assets/succulents-2.jpg";
}

function out(element) {
    img.src = before;
}