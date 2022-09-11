var cookieMessage = document.querySelector(".bottomContainer");

function remove () {
    cookieMessage.remove();
}

function loading () {
    alert("Loading weather report...");
}



function c2f (temp) {
    return Math.round(9 / 5 * temp + 32);
}

function f2c (temp) {
    return Math.round((temp - 32) * 5 / 9);
}

function convert (element) {
    console.log(element.value);
    for (var i = 1; i < 9; i++) {
        var tempSpan = document.querySelector("#temp" + i);
        var tempVal = parseInt(tempSpan.innerText);
        if (element.value == "celsius") {
            tempSpan.innerText = f2c(tempVal);
        }
        else {
            tempSpan.innerText = c2f(tempVal);
        }
    }
}