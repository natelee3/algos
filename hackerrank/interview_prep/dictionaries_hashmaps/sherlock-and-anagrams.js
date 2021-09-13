//Two strings are anagrams of each other if the letters of one string can be rearranged to form the other string. Given a string, find the number of pairs of substrings of the string that are anagrams of each other.

const s = 'kkkk';

function sherlockAndAnagrams(s) {
    //Create helper function to find all permutations
    function getAllSubstrings(str) {
        let i, j, result = [];
        for (i = 0; i < str.length; i++) {
            for (j = i + 1; j < str.length + 1; j++) {
                result.push(str.slice(i, j));
            }
        }
        return result;
      };
    //Run the function
    const result = getAllSubstrings(s)
    //Create helper function to sort each string alphabetically
    function sortStrings(result) {
        const sorted = result.map(string => {
            if (string.length > 1) {
                let temp = string.split('').sort().join('');
                return temp
            } else {
                return string
            }
        })
        return sorted;
    }
    const sortedArray =  sortStrings(result);
    //Create an object to store the number of occurrences of each string
    const occurrences = sortedArray.reduce((acc, curr) => {
        //If the entry exists, increment it. Otherwise, add it
        return acc[curr] ? ++acc[curr] : acc[curr] = 1, acc
    }, {});
    console.log(occurrences)
    //Find the number of matching pairs
    let anagrams = 0;

    function factorial(x) {
        return (x > 1) ? x * factorial(x-1) : 1;
      };
    for (let [key, value] of Object.entries(occurrences)) {
        if (value > 1) anagrams += (value*(value-1)/2);
    }
    return anagrams;
};


console.log(sherlockAndAnagrams(s));

