//Given an array of integers, sort the array in ascending order using the Bubble Sort algorithm above. Once sorted, print the following three lines:

// Array is sorted in numSwaps swaps., where  is the number of swaps that took place.
// First Element: firstElement, where  is the first element in the sorted array.
// Last Element: lastElement, where  is the last element in the sorted array.

// const a = [6,4,1];

// const a = [3,2,1];

const a = [1,2,3];

function countSwaps(a) {
    let swap = 0;
    //Run the given bubble sort function
    for (let i = 0; i < a.length; i++) {
        for (let j = 0; j < a.length - 1; j++) {
            // Swap adjacent elements if they are in decreasing order
            if (a[j] > a[j + 1]) {
                [a[j], a[j + 1]] = [a[j + 1], a[j]];
                //If a swap occurs, increment the swap count
                swap++;
            }
        }
    }  
    console.log(`Array is sorted in ${swap} swaps.`);
    console.log('First Element:', a[0]);
    console.log('Last Element:', a[a.length-1]);
};

countSwaps(a);