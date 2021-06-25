// Plus One
// Given a non-negative integer represented as a non-empty array of digits, Add one to the integer, changing the value of the array.

const array = [9,9,9]
const array2 = [1,1,1]
// const plusOne = digits => {
//     //Add 1 to the end of the array bringing integer value inside to 1000 from 999
// };
//expected outcome 1000

function plusOne(arr) {
    for (let i = arr.length -1; i >= 0; i--) {
        if (arr[i] === 9) {
            arr[i] = 0;
        } else {
            arr[i]++; 
            return arr.join('');
        } 
    }
    arr.unshift(1);
    return arr.join('');
}

console.log(plusOne(array2))
console.log(plusOne(array))


