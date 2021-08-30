const scores = [3,4,21,36,10,28,35,5,24,42];
//Expected output array [4, 0]

function breakingRecords(scores) {
    //create array to return
    let records = [0,0];
    //Set max and min to first value in scores
    let max = scores[0];
    let min = scores[0];
    //Loop through scores
    for (let i = 0; i < scores.length; i++) {
        //If the current score is greater than max, increment max count 
        if (scores[i] > max) {
            max = scores[i];
            records[0]++
        };
        //If current score is lower than min, increment min count
        if (scores[i] < min) {
            min = scores[i];
            records[1]++
        }
    }
    return records
};

console.log(breakingRecords(scores));