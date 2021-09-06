//There are 16 hourglasses in {arr}. An hourglass sum is the sum of an hourglass' values. Calculate the hourglass sum for every hourglass in , then print the maximum hourglass sum. The array will always be 6x6.

const arr = [
    [-9, -9, -9, 1, 1, 1],
    [0, -9, 0, 4, 3, 2],
    [-9, -9, -9, 1, 2, 3],
    [0, 0, 8, 6, 6, 0],
    [0, 0, 0, -2, 0, 0],
    [0, 0, 1, 2, 4, 0] 
];

function hourglassSum(arr) {
    //Create an array to hold the hourglass sums
    let hourglasses = [];
    //Find the 16 hourglasses and push their sums into the array
    for (let i = 0; i < arr.length - 2; i++) {
        for (let j = 0; j < arr[i].length - 2; j++) {
            let firstRow = arr[i][j] + arr[i][j+1] + arr[i][j+2];
            let secondRow = arr[i+1][j+1];
            let thirdRow = arr[i+2][j] + arr[i+2][j+1] + arr[i+2][j+2];
            hourglasses.push(firstRow + secondRow + thirdRow)
        }
    }
    return Math.max(...hourglasses);
};

console.log(hourglassSum(arr));