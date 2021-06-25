// Shortest Word Distance
// Given a list of words and two words word1 and word2, return the shortest distance between these two words in the list. It should count the distance between the words. It should count from the value of word1 to the value of word2, practice is value 0, coding is value 3. Therefore making expected outcome 3.

const words = ["practice", "makes", "perfect", "coding", "makes"];
// shortestWordDistance(words, "practice", "coding");
//expected output = 3

function shortestWordDistance(arr, word1, word2) {
    if (!arr.includes(word1) | !arr.includes(word2)) {
        return console.log ('Word not found in array')
    }
    let index1 = [], i = -1;
    while ((i = arr.indexOf(word1, i+1)) != -1){
        index1.push(i);
    }
    console.log({index1})

    let index2 = [], j = -1;
    while ((j = arr.indexOf(word2, j+1)) != -1){
        index2.push(j);
    }
    console.log({index2})

    if (index1.length > 1) {
        let newArray = index1.map(value=> {
           return Math.abs(index2[0] - value)
        })
        let shortest = Math.min(...newArray)
        console.log(`There are ${newArray.length} instances of ${word1}`)
        console.log(`The shortest distance is ${shortest}`)

        
        } else {
        if (index2.length > 1) {
            let secondArray = index2.map(value=> {
                return Math.abs(index1[0] - value)
            })
            let shortest = Math.min(...secondArray)
            console.log(`There are ${secondArray.length} instances of ${word2}`)
            console.log(`The shortest distance is ${shortest}`)
            


            } else {
                let result = Math.abs(index2-index1);
                console.log(`The shortest distance between ${word1} and ${word2} is ${result}`)
            }
    }
};

shortestWordDistance(words, 'practice', 'makes')

