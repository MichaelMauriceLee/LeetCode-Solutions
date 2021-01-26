/**
 * @param {number[][]} mat
 * @return {number[][]}
 */
const diagonalSort = (mat) => {
    // do left side as starting position
    for (let j = mat[0].length - 1; j >= 0; j--) {
        sortDiagonalRow(mat, 0, j);
    }
    // do top as starting position
    for (let i = 0; i < mat.length; i++) {
        sortDiagonalRow(mat, i, 0);
    }

    return mat
};

const sortDiagonalRow = (mat, colIndex, rowIndex) => {
    const diagonal = [];
    for (let i = colIndex, j = rowIndex; i < mat.length && j < mat[i].length; i++, j++) {
        diagonal.push(mat[i][j]);
    }
    diagonal.sort((a,b) => parseInt(a) - parseInt(b));
    for (let i = colIndex, j = rowIndex, index = 0; index < diagonal.length; i++, j++, index++) {
        mat[i][j] = diagonal[index];
    }
}

console.log(diagonalSort([[11,25,66,1,69,7],[23,55,17,45,15,52],[75,31,36,44,58,8],[22,27,33,25,68,4],[84,28,14,11,5,50]]))
