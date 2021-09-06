const x1 = 0;
const v1 = 3;
const x2 = 4;
const v2 = 2;

function kangaroo(x1, v1, x2, v2) {
    //Loop through 1 to 10,000 jumps
    for (let i = 1; i < 10000; i++) {
        //For each jump, check if the kangaroos are in the same location
        if (x1 + (v1 * i) === x2 + (v2 * i)) {
            return 'YES'
        }
    }
    return 'NO'
}

console.log(kangaroo(x1, v1, x2, v2))