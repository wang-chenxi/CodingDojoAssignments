var temp = document.querySelectorAll(".covertableTemp");

function display() {
    alert("Loading weather report...")
}

function hide(element) {
    element.parentElement.remove();
}

function convertion(element) {
    if (element.value == "°C") {
        toCelsius();
        console.log(temp);
    } else {
        toFahrenheit();
        console.log(temp);
    }
    alert("You select " + element.value);
}

function toCelsius() {
    for (var i = 0; i < temp.length; i++) {
        var currentTemp = temp[i].innerText;
        temp[i].innerText = Math.floor((currentTemp - 32) * 5 / 9);
    }
}

function toFahrenheit() {
    for (var i = 0; i < temp.length; i++) {
        var currentTemp = temp[i].innerText;
        temp[i].innerText = Math.floor(currentTemp * 9 / 5 + 32);
    }
}