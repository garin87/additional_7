
//Backtracking Algorithm

module.exports = function solveSudoku(matrix) {
    
    if(mainSudoku(matrix, 9,9)) return matrix;
}

function noConflicts(matrix, row, col, num) {
    return isRowOk(matrix, row, num) && isColOk(matrix, col, num) && isBoxOk(matrix, row, col, num);
}

function isRowOk(matrix, row, num) {
    for (var col = 0; col < 9; col++)
        if (matrix[row][col] == num)
            return false;

    return true;
}

function isColOk(matrix, col, num) {
    for (var row = 0; row < 9; row++)
    if (matrix[row][col] == num)
        return false;

    return true;    
}

function isBoxOk(matrix, row, col, num) {
    row = Math.floor(row / 3) * 3;
    col = Math.floor(col / 3) * 3;

    for (var r = 0; r < 3; r++)
        for (var c = 0; c < 3; c++)
            if (matrix[row + r][col + c] == num)
                return false;
    return true;
}

function mainSudoku(matrix, row, col) {
    var cell = findUnassignedLocation(matrix, row, col);
    row = cell[0];
    col = cell[1];

    if (row == -1) return true;
    
    for (var num = 1; num <= 9; num++) {

        if ( noConflicts(matrix, cell[0], cell[1], num) ) {   
            matrix[row][col] = num;

            if ( mainSudoku(matrix, 9, 9) ) {                
                return true;
            }
            matrix[row][col] = 0;
        }
    }
    return false;
}


function findUnassignedLocation(matrix, row, col) {
    for (row = 0; row < 9 ; row++)
        for (col =0; col < 9 ; col++)
            if (matrix[row][col] == 0)
                return [row, col];
    return [-1, -1];
}




