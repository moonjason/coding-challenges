//https://leetcode.com/problems/container-with-most-water/

// Two Pointers , Arrays

// Given n non-negative integers (a[1], a[2], a[3]), where each represents a point at coordinate (i,a[i])
// n vertical lines are drawn such that the two endpoints of line i is at (l, a[i]) and (i, 0)
// Find two lines, which together with x-axis forms a container, such that the container contains the most water 


const maxArea = (height) => {
    if (height.length < 2) return null;

    let left = 0;
    let right = height.length - 1;
    let largestArea = 0;
    let area;

    while (left !== right) {

        if(height[left] > height[right]) {
            area = height[right] * (right - left);
            right--;
        } else if (height[left] < height[right]) {
            area = height[left] * (right - left);
            left++;
        } else {
            area = height[left] * (right - left);
            left++;
        }

        if (area > largestArea) largestArea = area;


    }

    return largestArea;
}

// var maxArea = function(height) {
//     let i = 0;
//     let j = height.length - 1;
//     let max = -Infinity;
    
//     while(i < j) {
//         const min = Math.min(height[i], height[j]);
//         max = Math.max(max, min * (j - i));
//         if (height[i] < height[j]) {
//             i++;
//         } else {
//             j--;
//         }
//     }
    
//     return max;
// };


console.log(maxArea([1,8,6,2,5,4,8,3,7]));