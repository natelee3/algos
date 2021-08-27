const s = 7;
const t = 11;
const a = 5;
const b = 15;
const apples = [-2, 2, 1];
const oranges = [5, -6];

function applesAndOranges(s, t, a, b, apples, oranges) {
    let appleCount = 0;
    let orangeCount = 0;
    for (let i=0; i < apples.length; i++) {
        if (a + apples[i] >= s && a + apples[i] <= t) {
            appleCount++
        }
    };
    for (let j=0; j < oranges.length; j++) {
        if (b + oranges[j] >= s && b + oranges[j] <= t) {
            orangeCount++
        }
    };
    console.log(appleCount);
    console.log(orangeCount);
}

applesAndOranges(s, t, a, b, apples, oranges);