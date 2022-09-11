console.log("page loaded...");

var elementReplace = document.querySelector("#name");

function replace(){
    elementReplace.innerText = "Claire Cho";
}

var elementRemove1 = document.querySelector("#cardlistitem1");

function remove1(){
    elementRemove1.remove();
}

var elementRemove2 = document.querySelector("#cardlistitem2");

function remove2(){
    elementRemove2.remove();
}

var requestNum = 2;
var countRequest = document.querySelector("#reqnum");

function decreaseReq() {
requestNum--;
countRequest.innerText = requestNum;
}

var connectNum = 418;
var countConnect = document.querySelector("#connectnum");

function increaseConnect() {
    connectNum++;
    countConnect.innerText = connectNum;
}