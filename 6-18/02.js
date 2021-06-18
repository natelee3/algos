// 2. Remove Duplicates
// Given an array of integers, remove the duplicates and return an array of only unique elements.

const array = [1, 2, 3, 5, 1, 5, 9, 1, 2, 8];
// Expected return [1, 2, 3, 5, 9, 8] 


function removeDuplicates (array) {
    uniqueArray = []
    array.forEach(item => {
        if (!uniqueArray.includes(item)) {
            uniqueArray.push(item)
        }
    })
    console.log(uniqueArray)
}

removeDuplicates(array)