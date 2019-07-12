// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

// function reverseInt(n) {
//   return parseInt(n.toString().split('').reverse().join(''))
// }

// my solution
function reverseInt(n) {
    let result = 0;
    while (n != 0) {
        result *= 10;
        result += n % 10;
        n -= n % 10;
        n /= 10
    }
    return result;
}

module.exports = reverseInt;
