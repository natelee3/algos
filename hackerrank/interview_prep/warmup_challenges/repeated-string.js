//There is a string, , of lowercase English letters that is repeated infinitely many times. Given an integer, s, find and print the number of letter a's in the first n letters of the infinite string.

// const s = 'aba';
// const n = 10;
// //expected output = 7

// const s = 'a';
// const n = 1000000000000;
// //expected output = 1000000000000

const s = 'gfcaaaecbg';
const n = 547602;
//expected output = 164280


function repeatedString(s,n) {
    //Check if there are any a's in the input string
    if (!s.includes('a')) {
        return 0;
    }
    //Find number of matches in original string
    const matches = s.match(/a/g).length;
    //Find number of full repeats needed
    const repeats = Math.floor(n / s.length);
    //Calculate initial result
    let initialResult =  matches * repeats;
    //Find how many extra characters are needed
    const remainder = n % s.length;
    //If there is a remainder, add the number of 'a's from it
    if (remainder !== 0) {
        const extras = s.slice(0,remainder).match(/a/g);
        if (extras !== null) {
            return initialResult + extras.length;
        }
    } 
    return initialResult;
};

console.log(repeatedString(s,n));

