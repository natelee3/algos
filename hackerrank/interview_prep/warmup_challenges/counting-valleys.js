// An avid hiker keeps meticulous records of their hikes. During the last hike that took exactly {steps} steps, for every step it was noted if it was an uphill, {U} step, or a downhill, {D} step. Hikes always start and end at sea level, and each step up or down represents a  unit change in altitude. We define the following terms:

// A mountain is a sequence of consecutive steps above sea level, starting with a step up from sea level and ending with a step down to sea level.
// A valley isa sequence of consecutive steps below sea level, starting with a step down from sea level and ending with a step up to sea level.
// Given the sequence of up and down steps during a hike, find and print the number of valleys walked through. 

const steps = 8;
const path = 'UDDDUDUU';
//expected output number of valleys = 1




function countingValleys(steps, path) {
    //Define variables for number of valleys, current position, and sea level boolean
    let valleys = 0;
    let position = 0;
    let seaLevel = true;

    //Turn path string into an array
    const pathArray = path.split('');
    
    //Loop through the array and increment the current position
    for (let i = 0; i < pathArray.length; i++) {
        if (pathArray[i] === 'U') {
            position++;
        } else {
            position--;
        }

        //Check if we're at sea level going down
        if (position === 0) {
            seaLevel = true;
        } else if (position < 0 && seaLevel === true) {
            seaLevel = false;
            valleys++;
        }

    }
    return valleys;
};

console.log(countingValleys(steps, path));