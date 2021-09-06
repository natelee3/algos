//A left rotation operation on an array shifts each of the array's elements  unit to the left. For example, if 2 left rotations are performed on array [1,2,3,4,5], then the array would become [3,4,5,1,2]. Note that the lowest index item moves to the highest index in a rotation. This is called a circular array.

// Given an array a of n integers and a number, d, perform d left rotations on the array. Return the updated array to be printed as a single line of space-separated integers.

const a = [1,2,3,4,5];
const d = 4;

function rotLeft(a,d) {
    //Loop through up d number of times
    for (let i = 0; i < d; i++) {
        //Remove the first element
        let temp = a.shift();
        //Add it back to the end of the array
        a.push(temp)
    }
    return a;
};

console.log(rotLeft(a,d));