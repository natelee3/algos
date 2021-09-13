function codingScoreReport(scores) {
    const key = [
        0,
        'Poor - ',
        'Fair - ',
        'Good - ',
        'Excellent - ',
        'Elite - '
    ]
   //Loop through scores and assign a category
    const levels = scores.map(score => {
        if (score < 600) return 1;
        if (score >= 600 && score < 700) return 2;
        if (score >= 700 && score < 750) return 3;
        if (score >=750 && score < 800) return 4;
        return 5;
    });
    //Create an object that hold the amounts for each category > 0
    let outputObj = levels.reduce((acc, curr) => {
        return acc[curr] ? ++acc[curr] : acc[curr] = 1, acc
    }, {});
    //Turn that object into a sorted 2D array
    let outputArray = Object.entries(outputObj).sort((a,b) => {
        return b[1] - a[1] || parseInt(b[0]) - parseInt(a[0])
    });
    //Format the resulting array 
    let result = [];
    for (let i = 0; i < outputArray.length; i ++) {
        const category = parseInt(outputArray[i][0])
        const amount = outputArray[i][1];
        result.push(`${key[category]}${amount}`)
    };
    return result;
}

const scores =  [330, 723, 730, 825];

console.log(codingScoreReport(scores))