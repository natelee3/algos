'use strict';

// 1. Product of three largest integers
//  Given an array of integers, find the largest product of three integers.

const unsortedArray = [-10, 7, 29, 30, 5, -10, -70];
const differentArray = [10, 7, 29, 31, 5, 10, 70]
const negativeArray = [-10, -7, -29, -30, -5, -10, -70]
// Expected return 21000


function Productof3Largest (array) {
    //Sort array smallest to largest
    let sortedArray = array.sort((a, b) => a - b)
    //Multiply the lowest two integers(negatives) with the largest positive
    if (sortedArray[0] < 0 && sortedArray[1] < 0) {
        if (sortedArray[sortedArray.length-1] < 0) {
            let product = (sortedArray[sortedArray.length-1]*sortedArray[sortedArray.length-2]*sortedArray[sortedArray.length-3])
            console.log(product)
        } else {
        let product = (sortedArray[0] * sortedArray[1] * sortedArray[sortedArray.length-1])
        console.log(product)
        }
    } else {
        let product = (sortedArray[sortedArray.length-1]*sortedArray[sortedArray.length-2]*sortedArray[sortedArray.length-3])
        console.log(product)
    }
}

Productof3Largest(unsortedArray)
Productof3Largest(differentArray)
Productof3Largest(negativeArray)

