/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function (matrix) {
    if (matrix.length == 0) {
        return []
    }

    let temp = []
    let max_i = matrix.length
    let max_j = matrix[0].length
    for (let i = 0; i < max_i; i++) {
        for (let j = 0; j < max_j; j++) {
            if (matrix[i][j] == 0) {
                temp.push([i, j])
            }
        }
    }

    for (let k = 0; i < temp.length; i++) {
        let a = temp[k][0]
        let b = temp[k][1]
        for (let i = 0; i < max_i; i++) {
            matrix[i][b] = 0
        }

        for (let j = 0; j < max_j; j++) {
            matrix[a][j] = 0
        }
    }
};

let matrix = [
    [0, 1, 2, 0],
    [3, 4, 5, 2],
    [1, 3, 1, 5]
]

console.log(setZeroes(matrix))