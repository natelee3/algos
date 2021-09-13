const h = [1,4,2];
const points = [2,3,2];
const timeForQuests = 4;

function questEfficiencyItem(h, points, timeForQuests) {
    //Build a powerset of all index combinations
    function powerSet(arr) {
        let result = [];
        for (let i = 0; i < Math.pow(2, arr.length); i++) {
            let combination = [];
            for (let j = 0; j < arr.length; j++) {
                if (i & (1 << j)) combination.push(j);
            };
            result.push(combination);
        };
        return result;
    };
    const all = powerSet(h);
    //Keep only the subsets that fit the time requirement
    let feasible = [];
    for (let k = 0; k < all.length; k++) {
        const hourSum = all[k].reduce((a,b) => a + h[b], 0);
        if (hourSum > 0 && hourSum <= timeForQuests) {
            feasible.push(all[k]);
        };
    };
    //Add up the value of each and find the max
    let max = 0;
    for (let j = 0; j < feasible.length; j++) {
        const current = feasible[j].reduce((a,b) => {
            return a + points[b];
        }, 0);
        if (current > max) max = current;
    };
    return max;
}

console.log(questEfficiencyItem(h, points, timeForQuests));
