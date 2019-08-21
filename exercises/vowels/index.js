// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0

function vowels(str) {
    let count = 0;
    const vowelsArray = ['a', 'e', 'i', 'o', 'u'];

    for (let letter of str.toLowerCase()) {
        if (vowelsArray.includes(letter)) {
            count++;
        } 
    }
    return count;
}

// function vowels(str) {
//     //my first solution
//     let vowelArray = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']
//     let count = 0;

//     for (let letter of str) {
//         if(vowelArray.includes(letter)) {
//             count += 1
//         }
//     }
//     return count;
// }

module.exports = vowels;
