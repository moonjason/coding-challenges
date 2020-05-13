// https://leetcode.com/problems/rotate-image/

// Arrays 

// Given a 2D Matrix, rotate the image by 90 degrees (clockwise);

// Given input matrix = 
// [
//   [1,2,3],
//   [4,5,6],
//   [7,8,9]
// ],

// rotate the input matrix in-place such that it becomes:
// [
//   [7,4,1],
//   [8,5,2],
//   [9,6,3]
// ]


const input = 
                [
                    [1,2,3],
                    [4,5,6],
                    [7,8,9]
                ];

const rotate = (matrix) => {


    for (let c = 0; c < matrix.length; c++) {
        for(let r = c; r < matrix[c].length; r++) {
            [matrix[c][r], matrix[r][c]] = [matrix[r][c], matrix[c][r]]; 
        }
    }   

    for (let c = 0; c < matrix.length; c++) {
        for (let r = 0; r < matrix[c].length / 2; r++) {
            let temp = matrix[c][r]
            matrix[c][r] = matrix[c][matrix[c].length - 1 - r];
            matrix[c][matrix[c].length - 1 - r] = temp;
        }

    }

    return matrix;
}

console.log(rotate(input));



// --  REVIEWING THIS NESTED LOOP  -- 

// for (let c = 0; c < matrix.length; c++) {
//     for(let r = c; r < matrix[c].length; r++) {
//         [matrix[c][r], matrix[r][c]] = [matrix[r][c], matrix[c][r]]; 
//     }
// }   
