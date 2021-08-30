//There is a large pile of socks that must be paired by color. Given an array of integers representing the color of each sock, determine how many pairs of socks with matching colors there are.

let n = 9;
let ar = [10,20,20,10,10,30,50,10,20];
//Expected output: 3

function sockMerchant(n, ar) {
    //Create an object with the number of occurrences of each value that appears in the array
    const occurrences = ar.reduce((acc, curr) => {
        //If the entry exists, increment it. Otherwise, add it
        return acc[curr] ? ++acc[curr] : acc[curr] = 1, acc
    }, {});
    //Set initial number of pairs to zero
    let pairs = 0;
    //Iterate through the values and increment pairs for every pair found
    for (const [key, value] of Object.entries(occurrences)) {
        pairs += Math.floor(value/2);
    }
    return pairs;
};

console.log(sockMerchant(n,ar));