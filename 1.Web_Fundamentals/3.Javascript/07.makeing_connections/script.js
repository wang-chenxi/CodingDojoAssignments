var userName = document.querySelector("#user-name");
function changeName() {
    if (userName.innerText == "Chenxi Wang") {
        userName.innerText = "Chaoyue Yang";
    } else {
        userName.innerText = "Chenxi Wang";
    }
}

var requestCountElement = document.querySelector(".requestCount");

var connectCountElement = document.querySelector(".connectCount")

function remove(element) {
    console.log(element.parentElement.parentElement.parentElement);
    if (element.classList.contains("accept")) {
        connectCountElement.innerText++;
        alert("You have accepted the conenction request")
    } else {
        alert("The request has been removed");
    }
    element.parentElement.parentElement.parentElement.remove();
    requestCountElement.innerText--;
}