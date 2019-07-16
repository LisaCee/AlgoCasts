// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

function chunk(array, size) {
    // solution #1
    // let solution = [];
    // for (let el of array) {
    //     const last = solution[solution.length - 1];
    //     if (!last || last.length == size) {
    //         solution.push([el])
    //     } else {
    //         last.push(el);
    //     }
    // }
    // return solution;

    solution # 2
    let solution = [];
    let i = 0;
    while (i < array.length) {
        solution.push(array.slice(i, i + size));
        i += size;
    }
    return solution;

}

module.exports = chunk;
