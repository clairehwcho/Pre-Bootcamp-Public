var count=3;
var countElement = document.querySelector("#likes");

function increaseBy1 () {
    count++;
    countElement.innerText =count + " like(s)";
    console.log(count);
}