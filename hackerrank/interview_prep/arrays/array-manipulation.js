//Starting with a 1-indexed array of zeros and a list of operations, for each operation add a value to each the array element between two given indices, inclusive. Once all operations have been performed, return the maximum value in the array.

const n = 10;
const queries = [
    [1,5,3],
    [4,8,7],
    [6,9,1]
];

// O(n^2) solution using two nested loops

// function arrayManipulation(n,queries) {
//     //Create an array of length n and fill with zeroes
//     let array = Array(n).fill(0);
//     //Loop through queries
//     for (let i = 0; i < queries.length; i++) {
//         //Loop through the created array and add k to every index between a and b
//         for (let j = 1; j <= array.length; j++) {
//             if (j >= queries[i][0] && j <= queries[i][1]) {
//                 array[j-1] += queries[i][2];
//             }
//         }
//     }
//     return Math.max(...array);
// };

//Optimized O(n) solution using adjacent loops

function arrayManipulation(n, queries) {
    //Create an array of length n
    let arr = Array(n);
    //Set max and current values to zero
    let max = 0;
    let current = 0;
    //Loop through the queries array and mark the start and ending points of value additions
    queries.forEach(([start, end, val]) => {
        arr[start-1] = arr[start-1] || { s: 0, e: 0 };
        arr[end-1] = arr[end-1] || { s: 0, e: 0 };
        arr[start-1].s += val;
        arr[end-1].e += val;
    });
    //Loop through the new array, adding start values to the current and comparing to max, then subtracting any ending values
    arr.forEach(item => {
        if (item) {
            current += item.s;
            if (current > max) {
                max = current;
            } 
            current -= item.e;
        }
    })
    return max;
};

console.log(arrayManipulation(n,queries));
