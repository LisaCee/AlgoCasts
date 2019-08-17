// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'


function steps(n) {
    //base case
    if (n === 0) return;

    console.log(n);

    steps(n - 1);
}

// recursive solution


// first solution
// for (let row = 0; row < n; row++) {
//     let stair = '';
//     for (let col = 0; col < n; col++) {
//         if (col <= row) {
//             stair += '#';
//         } else {
//             stair += ' ';
//         }
//     }
//     console.log(stair)
// }

// my solution
// if (n < 1) return;
//     let i = 1;

//     while (i <= n) {
//         console.log('#'.repeat(i) + ' '.repeat(n - i));
//         i++;
//     }

module.exports = steps;
