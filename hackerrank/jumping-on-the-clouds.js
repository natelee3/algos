// There is a new mobile game that starts with consecutively numbered clouds. Some of the clouds are thunderheads and others are cumulus. The player can jump on any cumulus cloud having a number that is equal to the number of the current cloud plus 1 or 2. The player must avoid the thunderheads. Determine the minimum number of jumps it will take to jump from the starting postion to the last cloud. It is always possible to win the game.

// For each game, you will get an array of clouds numbered 0 if they are safe or 1 if they must be avoided.

// const c = [0,0,1,0,0,1,0];
//expected output = 4

const c = [0,0,0,0,1,0];
//expected output = 3


function jumpingOnClouds(c) {
    //Set initial jumps to 0
    let jumps = 0;

    //Loop through the input array 
    for (let i = 0; i < c.length; i++) {
        //Try to jump two clouds
        if (i + 2 < c.length && c[i+2] === 0) {
            jumps++;
            i++;
        //Else try to jump one cloud
        } else if (i + 1 < c.length && c[i+1] === 0) {
            jumps++
        }
    }
    
    return jumps;
};

console.log(jumpingOnClouds(c));