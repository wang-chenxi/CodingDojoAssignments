var countLikes = [0, 0];

var likes = [document.querySelector("button#1"), document.querySelector("button#2")];

function ninjaButton(element) {
    alert("ninja was liked!");
    var index = element.id - 1;
    countLikes[index]++;
    element.innerText = countLikes[index] + " like(s)";
}

function logButton(element) {
    if (element.innerText == "Login") {
        element.innerText = "Logout";
    } else {
        element.innerText = "Login";
    }
}

function hide(element) {
    element.remove();
}