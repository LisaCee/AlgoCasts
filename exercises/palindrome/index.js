// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

// solution #1
// built in reverse method
// split the string into array, reverse and join
// compare to the original
// true if it's a palindrome (matches), false if it is different.

// function palindrome(str) {
//   return str.split('').reverse().join('') == str;
// }

// solution #2
// split the string into an array
// for every character in array, see if it matches the last character of array
// keep track of index value to move from the end of the array towards the middle
// function returns once the current letter and the opposite letter no longer match or all letters are checked
// every returns boolean

// function palindrome(str) {
//   return str.split('').every((char, i) => {
//     return char == str[str.length - i - 1]
//   })
// }

// my solution w/ helper function
// recursive function to reverse string
function reverse(str) {
    return str.length < 2 ? str :
        reverse(str.slice(1)) + str[0]
}
// call reverse function with string and compare it to original
function palindrome(str) {
    return reverse(str) == str;
}


module.exports = palindrome;
