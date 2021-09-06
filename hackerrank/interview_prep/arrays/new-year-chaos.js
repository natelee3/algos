//It is New Year's Day and people are in line for the Wonderland rollercoaster ride. Each person wears a sticker indicating their initial position in the queue from 1 to n. Any person can bribe the person directly in front of them to swap positions, but they still wear their original sticker. One person can bribe at most two others.

// Determine the minimum number of bribes that took place to get to a given queue order. Print the number of bribes, or, if anyone has bribed more than two people, print Too chaotic.

// const q = [4,1,2,3];

const q = [2,1,5,3,4];

function minimumBribes(q) {
    //Set initial values for chaotic and number of bribes
    let chaotic = false;
    let bribes = 0;
    //Loop through the array from the end to beginning
    for (let i = q.length - 1; i > 0; i--) {
        //Check if the current position is more than 2 bribes away from its initial position
        if (q[i] - i > 3) {
            chaotic = true;
        }
        //Check if the number before it is out of place
        for (let j = q[i] - 2; j < i; j++ ) {
            if (q[j] > q[i]) {
                bribes++;
            }
        }
    }
    console.log(chaotic ? 'Too chaotic' : bribes);
};

minimumBribes(q);