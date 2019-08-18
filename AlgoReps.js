// reverseString
// Solution # 1
// Challenge: used 'in' instead of 'of' in loop, returned digits
function reverseString(str) {
    let reversed = '';
    for (let letter of str) {
        reversed = letter + reversed;
    }
    return reversed;
}
console.log(reverseString('Lisa'))
// palindrome
function palindrome(str) {
    return str.split('').reverse().join('') === str;
}

console.log(palindrome('abba'))