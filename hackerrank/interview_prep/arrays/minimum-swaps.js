//You are given an unordered array consisting of consecutive integers  [1, 2, 3, ..., n] without any duplicates. You are allowed to swap any two elements. Find the minimum number of swaps required to sort the array in ascending order.

const arr = [2,3,4,1,5];

function minimumSwaps(arr) {
    console.log(arr)
    //Initialize swaps at 0
    let swaps = 0;
    //Loop through the array in order
    for (let i = 0; i < arr.length; i++) {
        //As long as the current value is out of place...
        while (arr[i] !== i + 1) {
            //Increment the swap counter
            swaps++;
            //Move the value at the current index to its correct spot
            let temp = arr[i];
            arr[i] = arr[temp - 1];
            arr[temp - 1] = temp;
            console.log(arr)
        }
    }
    return swaps;
};

console.log(minimumSwaps(arr));