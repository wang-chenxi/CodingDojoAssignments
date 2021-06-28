var count = [1, 1, 1];
var likeCount = [document.querySelector("#like-1"), document.querySelector("#like-2"), document.querySelector("#like-3")];
function addLike(index) {
    console.log(index);
    count[index - 1]++;
    likeCount[index - 1].innerText = count[index - 1] + " like(s)";
}

