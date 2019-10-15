
// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

//go around # 2

// function reverse(str) {
//     let reversed = ''
//     for (let i = str.length - 1; i > -1; i--) {
//         reversed += str[i]
//     }
//     return reversed;
// }

function reverse(str) {
    if (str === '') {
        return ''
    } else {
        return reverse(str.slice(1)) + str[0];
        //or
        // return reverse(str.slice(1)) + str.charAt(0);
    }
}

// solution #1
// built in method reduce
// reduce starts with an empty string (end)
// split string into array, 
//reversed = accumulator
// character = current letter
// first letter added to string
// second letter added to string before first letter
// return reversed string

// function reverse(str) {
//   return str.split('').reduce(((reversed, character) => {
//     return character + reversed;
//   }), '');
// }

// solution #2
// built in method reverse
// split string into array
// reverse the order of the letters in array
// join them back together

// function reverse(str) {
//   return str.split('').reverse().join('')
// }

// solution #3
// let char of str
// declare an empty string
// for each letter in the original string,
// starting at the beginning, add character to front of new string

// function reverse(str) {
//     let reversed = ""
//     for(let character of str) {
//       reversed = character + reversed;
//     }
//     return reversed;
//   }

// my solution
// recursive solution, not as efficient, but looks cool
// if the string is only 1 letter, return (base case)
// otherwise, keep calling the reverse function by continuing to slice the first item and collecting them in reverse order
// when the base case is met (only 1 letter) add that letter to the end of the other characters

// function reverse(str) {
//     if (str.length < 2) return str;
//     return reverse(str.slice(1)) + str[0]
// }

module.exports = reverse;