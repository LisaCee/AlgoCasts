// --- Directions
// Print out the n-th entry in the fibonacci series.
// The fibonacci series is an ordering of numbers where
// each number is the sum of the preceeding two.
// For example, the sequence
//  [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
// forms the first ten entries of the fibonacci series.
// Example:
//   fib(4) === 3

// function fib(n) {
//     // iterative solution
//     let array = [0, 1]
//     for (let i = 1; i <= n ; i++) {
//         array.push(array[i-1] + array[i])
//     }
//     return array[n]
// }

// function fib(n) {
//     // recursive solution
//     if (n < 2) {
//         return n
//     } else {
//         return fib(n-1) + fib(n-2) 
//     }
// }

// function fib(n) {
//     //my memoization fib
//     let cache = {0:0, 1:1}
//     let i = 2
//     if (cache[n]) {
//         return cache[n]
//     } else {
//         if (n < 2) {
//             return n
//         } else {
//             while (i <= n) {
//                 cache[i] = cache[i-1] + cache[i-2]
//                 i++
//             }
//         }
//     }
//     return cache[n]
// }

function memoize(fn) {
    const cache = {}
    return function(...args) {

    }
}

function slowFib(n) {

    // recursive solution
    if (n < 2) {
        return n
    } else {
        return fib(n-1) + fib(n-2) 
    }

    
}


module.exports = fib;
