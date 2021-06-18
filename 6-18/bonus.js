// Bonus Challenge 1
// Square Root
// Find the square root of 81.

function square (n, i, j) {
    let mid = (i + j) /2
    let mul = (mid * mid)
    if ((mul === n || (Math.abs(mul - n) < 0.01))) {
        return mid;
    } else if (mul < n) {
        return square(n, mid, j)
    } else {
        return square(n, i, mid)
    }
}


function root(num) {
    let i = 1;
    const found = false;
    while (!found) {
        if (i * i === num) {
            return console.log(`The perfect square of ${num} is ${i}`);
        } else if (i * i > num) {
            // console.log(num, i-1, i)
            let result = square(num, i-1, i)
            return console.log(`The square root of ${num} is approximately ${result}`)
        }
        i++
    }
}


root(111)
root(25)
