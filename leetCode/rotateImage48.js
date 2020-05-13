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
            [matrix[c][r], matrix[r][c]] = [matrix[r][c], matrix[c][r]]; //ES2015 SWAPPING
        }
    }   

    for (let c = 0; c < matrix.length; c++) {
        for (let r = 0; r < matrix[c].length / 2; r++) { // ONLY LOOPING UNTIL THE HALF OF THE ARRAY 
            let temp = matrix[c][r]  // OTHER SWAPPING METHOD, WE ARE REVERSING THE INDICES EXCEPT THE MIDDLE COULD ALSO USE ARRAY.REVERSE()
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

// EXPLANATION:
// What this formula is doing is that we are swapping out each column for each row
// if c = 0, r = 0;
// [matrix[0][0], matrix[0][0]] = [matrix[0][0], matrix[0][0]]; 

// if c = 0, r = 1;
// [matrix[0][1], matrix[1][0]] = [matrix[1][0], matrix[0][1]]; 

// [
//   [1,2,3],
//   [4,5,6],
//   [7,8,9]
// ],

// = > 

// [
//   [1,4,3],
//   [2,5,6],
//   [7,8,9]
// ],

// if c = 0, r = 2;
// [matrix[0][2], matrix[2][0]] = [matrix[2][0], matrix[0][2]]; 

// [
//   [1,2,3],
//   [4,5,6],
//   [7,8,9]
// ],

// = > 

// [
//   [1,4,3],
//   [2,5,6],
//   [7,8,9]
// ],
