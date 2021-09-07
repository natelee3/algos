//Harold is a kidnapper who wrote a ransom note, but now he is worried it will be traced back to him through his handwriting. He found a magazine and wants to know if he can cut out whole words from it and use them to create an untraceable replica of his ransom note. The words in his note are case-sensitive and he must use only whole words available in the magazine. He cannot use substrings or concatenation to create the words he needs.

// Given the words in the magazine and the words in the ransom note, print Yes if he can replicate his ransom note exactly using whole words from the magazine; otherwise, print No.

const magazine = ['give', 'me', 'one', 'grand', 'today', 'night'];
const note = ['give', 'one', 'grand', 'today'];
//expected output = 'Yes'

function checkMagazine(magazine, note) {
    //Check each word from note in magazine
    for (let i = 0; i < note.length; i++) {
    //if it's not there, end the loop and print 'No'
        if (!magazine.includes(note[i])) {
            return console.log('No');
            break;
    //otherwise, find the word and remove it from magazine
        } else {
            const index = magazine.indexOf(note[i]);
            magazine.splice(index, 1);
        }
    }
    return console.log('Yes');
};

checkMagazine(magazine, note);