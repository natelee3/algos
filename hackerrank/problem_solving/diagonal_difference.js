const arr =[[11,2,4], [4,5,6], [10,8,-12]]

function diagonalDifference(arr){
    //get length of matrix rows
    const n = arr.length;

    //set initial values for diagonals
    let firstDiagonal = 0;
    let secondDiagonal = 0;

    //loop through each row, then each column to see all matrix points
    for (let i=0; i<n; i++) {
        for (let j=0; j< n; j++) {
            //Get the first diagonal: (0,0), (1,1), (2,2), etc.
            if (i === j) {
                firstDiagonal += arr[i][j];
            //Get the second diagonal: (0,2), (1,1), (2,0), etc.
            }
            if (i + j === n - 1) {
                secondDiagonal += arr[i][j];
            }
        }
    }
    //Return the absolute value of the difference
    return Math.abs(firstDiagonal - secondDiagonal)
}

diagonalDifference(arr)