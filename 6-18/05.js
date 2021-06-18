// 5. Missing Number
// Given an array containing n distinct numbers taken from 0, 1, 2, ..., n, find the one that is missing from the array.

const array = [9,6,4,3,2,5,7,0,1];
const newArray = [17,20,22,18,16,23,19]
//expected answer 8


//Sum of consecutive integers = n/2(first + last)



function missingNumber (array) {
    //sort them into order
    sortedArray = array.sort((a,b) => a - b)
    console.log({sortedArray})
    //Get expected sum
    let expected = (array.length+1)/2*(sortedArray[0] + sortedArray[array.length-1])
    console.log({expected})
    //Get actual sum
    sumTotal = array.reduce((a,b) => a + b)
    console.log({sumTotal})
    //Get the missing number
    let missing = expected - sumTotal;
    console.log({missing})
    }

missingNumber(array)
missingNumber(newArray)