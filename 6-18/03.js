// 3. Intersecting Arrays
// Given two arrays, find the intersecting integers of the arrays.

const firstArray = [2, 2, 4, 1];
const secondArray = [1, 2, 0, 2];
// Expected return [2, 1]

function intersectingArrays(array1, array2) {
    intersect = []
    array1.forEach(item => {
        if (array2.includes(item) && !intersect.includes(item)) {
            intersect.push(item)
        }
    })
    console.log(intersect)
}

intersectingArrays(firstArray, secondArray)