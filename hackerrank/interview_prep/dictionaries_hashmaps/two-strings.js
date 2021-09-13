//Given two strings, determine if they share a common substring. A substring may be as small as one character.

const s1 = 'and';
const s2 = 'art';
//expected output = YES

// const s1 = 'be';
// const s2 = 'cat';
// //expected output = NO

// Non-optimized solution using a for loop
// function twoStrings(s1,s2) {
//     //convert strings to arrays
//     const string1 = s1.split('');
//     const string2 = s2.split('');
//     //compare the arrays
//     for (let i = 0; i < string1.length; i++) {
//         if (string2.includes(string1[i])) {
//             return 'YES';
//             break;
//         }
//     }
//     return 'NO';
// };

//Optimized solution using array.filter
function twoStrings(s1,s2) {
    //Convert first string to array
    const string1 = s1.split('');
    //Create a new array of just the shared characters 
    const shared = string1.filter(char => s2.indexOf(char) > -1);
    return shared.length > 0 ? 'YES' : 'NO';
};

console.log(twoStrings(s1,s2));