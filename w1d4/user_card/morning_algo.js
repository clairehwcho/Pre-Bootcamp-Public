var x = 5;

function setX (newValue) {
    x = newValue;
}

console.log(x); // 5
setX(15);
console.log(x); // 15
//output: 5, 15



var x = 5;

function addToX (amount) {
    console.log("hello there"); //when we have a return, we don't need to do console.log
    return x + amount;
}

console.log(x); // 5
var result = addToX(-10); // hello there
console.log(result); // 5+(-10)= -5
console.log(x); // 5
//output: 5, -5, 5



function isPal (arr) {
    for (var left = 0; left < arr.length / 2; left++) {
        var right = arr.length - 1 - left;
        if (arr[left] != arr[right]) {
            return "Not a pal-indrome!";
        }
    }
    return "Pal-indrome!";
}

var result1 = isPal([1, 1, 2, 2, 1]);
console.log(result1);
/*
var left=0; 0<2.5;
var right=5-1-0=4;
if(arr[0] != arr[4]) = if(1!=1) which is false.
var left=1; 1<2.5;
var right=5-1-1=3;
if(arr[1] != arr[3]) = if(1 != 2) which is true.
return is "Non a pal-indrome!"
var left=2; 2<2.5;
var right=5-1-2=2;
if(arr[2] != arr[2]) = if(2 != 2) which is false.
var left=3; 3<2.5 which is false. End the loop
*/
var result2 = isPal([3, 2, 1, 1, 2, 3]);
console.log(result2);
/*
var left=0; 0<3;
var right=6-1-0=5;
if(arr[0] != arr[5]) = if(3!=3) which is false.
var left=1; 1<3;
var right=6-1-1=4;
if(arr[1] != arr[4]) = if(2 != 2) which is false.
var left=2; 2<3;
var right=6-2-2=2;
if(arr[2] != arr[2]) = if(1 != 1 ) which is false.
var left=3; 3<3; is false. End the loop.
return is "Pal-indrome!"

output = Non a pal-indrome!, Pal-indrome!
*/