// 1. Print odds 1-20
function odds () {
    for (var i = 1; i < 21; i++) {
        if (i % 2 != 0) {
            console.log(i);
        }
    }
}

odds();

// 2. Decreasing multiples of 3
function multiples () {
    for (var i = 100; i > 0; i--) {
        if (i % 3 == 0) {
            console.log(i);
        }
    }
}

multiples();

// 3. Print the sequence
function sequence () {
    for (var i = 4; i >= -3.5; i = i - 1.5) {
        console.log(i);
    }
}

sequence();

// 4. Sigma
function sigma () {
    var sum = 0;
    for (var i = 1; i < 101; i++) {
        sum += i;
    }
    return sum;
}
sigma();
console.log(sigma());

// 5. Factorial
function factorial () {
    var product = 1;
    for (var i = 1; i < 13; i++) {
        product *= i;
    }
    return product;
}
factorial();
console.log(factorial());