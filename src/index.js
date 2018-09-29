
//Backtracking Algorithm

module.exports = function solveSudoku(matrix) {
    
    if(mainSudoku(matrix, 9,9)) return matrix;
}
function findUnassignedLocation(matrix, row, col) {
    for (row = 0; row < 9 ; row++)
        for (col =0; col < 9 ; col++)
            if (matrix[row][col] == 0)
                return [row, col];
    return [-1, -1];
}

function used_in_row(matrix, row, number) {
    for (var col = 0; col < 9; col++)
        if (matrix[row][col] == number)
            return false;

    return true;
}

function used_in_col(matrix, col, number) {
    for (var row = 0; row < 9; row++)
    if (matrix[row][col] == number)
        return false;

    return true;    
}

function used_in_box(matrix, row, col, number) {
    row = Math.floor(row / 3) * 3;
    col = Math.floor(col / 3) * 3;

    for (var r = 0; r < 3; r++)
        for (var c = 0; c < 3; c++)
            if (matrix[row + r][col + c] == number)
                return false;
    return true;
}

function is_safe(matrix, row, col, number) {
    return used_in_row(matrix, row, number) && used_in_col(matrix, col, number) && used_in_box(matrix, row, col, number);
}

function mainSudoku(matrix, row, col) {
    var index = findUnassignedLocation(matrix, row, col);
    row = index[0];
    col = index[1];

    if (row == -1) return true;
    
    for (var number = 1; number <= 9; number++) {

        if ( is_safe(matrix, index[0], index[1], number) ) {   
            matrix[row][col] = number;

            if ( mainSudoku(matrix, 9, 9) ) {                
                return true;
            }
            matrix[row][col] = 0;
        }
    }
    return false;
}







