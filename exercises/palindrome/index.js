// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

// solution #1
// function palindrome(str) {
//   return str.split('').reverse().join('') == str;
// }

// solution #2
// function palindrome(str) {
//   return str.split('').every((char, i) => {
//     return char == str[str.length - i - 1]
//   })
// }

// my solution w/ helper function
function reverse(str) {
    return str.length < 2 ? str :
        reverse(str.slice(1)) + str[0]
}
function palindrome(str) {
    return reverse(str) == str;
}


module.exports = palindrome;
