const a = [2,4];
const b = [16,32,96];
//expected output: 3

//Determine all integers that BOTH
// 1. Include all elements in array a as factors
// 2. Are a factor of the second array

function getTotalX(a, b) {
    //Set initial count at 0
    let count = 0;
    //For every integer between 1 and the max of either array
    for (let i = 1; i <= Math.max(...a, ...b); i ++) {
        //If every value in a is a factor
        if (a.every(val => (i % val === 0))) {
            //And every value in b is a multiple
            if (b.every(val => (val % i === 0))) {
                //Increment the count by one
                count++
            }
        }
    }
    //Return the count
    return count;
}

console.log(getTotalX(a, b))