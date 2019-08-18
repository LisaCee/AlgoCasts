// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'

// solution # 1
// function pyramid(n) {
// for (let row = 0; row < n; row++) {
//     let level = '';
//equation to find how many columns, given the number of rows(n)
//     cols = n * 2 - 1
//     // find col center index
//     let mid = Math.floor((2 * n  -1) / 2);
//     for (let col = 0; col < 2* n - 1; col++){
//         // if col is greater than mid - row AND col is less that mid + row
//         // '#'
//         if (mid - row <= col && mid + row >= col) {
//             level += '#'
//         } else {
//             level += ' '
//         }
//     }
//     console.log(level)
// }
// }

// solution #2
//recursive solution
function pyramid(n, row=0, level='') {
    //base case
    if(row === n) return;
    //check if string is correct amout of characters
    // console log and call pyramid for the next row
    if(level.length === 2 * n -1) {
        console.log(level);
        return pyramid(n, row+1)
    }
    const mid = Math.floor((2 * n - 1) / 2);
    // temporary variable to store string
    let add;
    if (mid - row <= level.length && mid + row >= level.length) {
        add = '#';
    } 
    // this else sequence  is required
    else add = ' ';
    pyramid(n, row, level + add)
}


module.exports = pyramid;
