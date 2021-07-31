var temp = document.querySelectorAll(".covertableTemp");
var main = document.querySelectorAll(".main_weather");
var weather_img = document.querySelectorAll(".weather_img");
console.log(main);

async function display(element) {
    alert("Loading weather report...")
    var cityName = element.innerText;
    var city = document.getElementById("city")
    city.innerText = cityName;
    if (cityName == "Beijing") {
        var response = await fetch("https://api.openweathermap.org/data/2.5/onecall?lat=39.916668&lon=116.383331&exclude=current,minutely,hourly,alerts&&lang=zh_cn&units=metric&appid=ebfaff6df41f414767fba06af8960d55");
    } else if (cityName == "Tokyo") {
        var response = await fetch("https://api.openweathermap.org/data/2.5/onecall?lat=35.658581&lon=139.745438&exclude=current,minutely,hourly,alerts&&lang=zh_cn&units=metric&appid=ebfaff6df41f414767fba06af8960d55");
    } else if (cityName == "Singapore") {
        var response = await fetch("https://api.openweathermap.org/data/2.5/onecall?lat=1.290270&lon=103.851959&exclude=current,minutely,hourly,alerts&&lang=zh_cn&units=metric&appid=ebfaff6df41f414767fba06af8960d55");
    }
    var weather_data = await response.json();
    temp[0].innerText = Math.floor(weather_data.daily[0].temp.max);
    temp[1].innerText = Math.floor(weather_data.daily[0].temp.min);
    temp[2].innerText = Math.floor(weather_data.daily[1].temp.max);
    temp[3].innerText = Math.floor(weather_data.daily[1].temp.min);
    temp[4].innerText = Math.floor(weather_data.daily[2].temp.max);
    temp[5].innerText = Math.floor(weather_data.daily[2].temp.min);
    temp[6].innerText = Math.floor(weather_data.daily[3].temp.max);
    temp[7].innerText = Math.floor(weather_data.daily[3].temp.min);

    for (var i = 0; i < main.length; i++) {
        main[i].innerText = weather_data.daily[i].weather[0].main;
        if (main[i].innerText == "Clear") {
            weather_img[i].src = "./assets/some_sun.png";
        } else if (main[i].innerText == "Clouds") {
            weather_img[i].src = "./assets/some_clouds.png";
        } else if (main[i].innerText == "Rain") {
            weather_img[i].src = "./assets/some_rain.png";
        }
    }

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