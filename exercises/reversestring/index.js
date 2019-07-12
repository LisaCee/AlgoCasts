
// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

// solution #1
// function reverse(str) {
//   debugger;
//   return str.split('').reduce(((reversed, character) => {
//     return character + reversed;
//   }), '');
// }
// function reverse(str) {
//   return str.split('').reverse().join('')
// }

// solution #2
// function reverse(str) {
//     let reversed = ""
//     for(let character of str) {
//       reversed = character + reversed;
//     }
//     return reversed;
//   }

// my solution
function reverse(str) {
    if (str.length < 2) return str;
    return reverse(str.slice(1)) + str[0]
}

module.exports = reverse;