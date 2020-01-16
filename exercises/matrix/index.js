// --- Directions
// Write a function that accepts an integer N
// and returns a NxN spiral matrix.
// --- Examples
//   matrix(2)
//     [[1, 2],
//     [4, 3]]
//   matrix(3)
//     [[1, 2, 3],
//     [8, 9, 4],
//     [7, 6, 5]]
//  matrix(4)
//     [[1,   2,  3, 4],
//     [12, 13, 14, 5],
//     [11, 16, 15, 6],
//     [10,  9,  8, 7]]

function matrix(n) {
    let results = []
    let counter = 1
    let start_row = 0
    let end_row = n - 1
    let start_col = 0
    let end_col = n - 1
    //while start_col <== end_col && start_row <== end_row
    while (start_col <= end_col && start_row <= end_row){
        //loop from start_col to end_col

            //at results[start_row][counter], assign counter var
            //increment counter
        //increment start_row
        //loop from start_row to end_row
            //at results[i][end_col], assign counter var
            // increment counter
        //decrement end row

        //repeat for other two sides
    }
}

module.exports = matrix;
