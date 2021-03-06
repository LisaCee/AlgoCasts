// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

// function anagrams(stringA, stringB) {
//     //solution # 1
//     let charA = buildCharMap(stringA);
//     let charB = buildCharMap(stringB);

//     if (Object.keys(charA).length !== Object.keys(charB).length) {
//         return false;
//     }
//     for (let char in charA) {
//         if (charA[char] !== charB[char]) {
//             return false;
//         }
//     }
//     return true;
// }

// function buildCharMap(str) {
//     const charMap = {};

//     for (let char of str.replace(/[^\w]/g, "").toLowerCase()) {
//         charMap[char] = charMap[char] + 1 || 1;
//     }
//     return charMap;
// }

//solution #2
function anagrams(stringA, stringB) {
     return sorted(stringA) === sorted(stringB);
}
function sorted(str) {
    return str.replace(/[^\w]/g, "").toLowerCase().split('').sort().join('');
}

module.exports = anagrams;
