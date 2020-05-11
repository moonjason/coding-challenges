// Leetcode 35 - Search Insert Position
// https://leetcode.com/problems/search-insert-position/

// Given a sorted array and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.

// You may assume no duplicates in the array.

// Input: [1,3,5,6], 5
// Output: 2

// Input: [1,3,5,6], 0
// Output: 0


const searchInsert = (nums, target) => {
    for(let i = 0; i < nums.length; i++) {
      if (nums[i] === target) {
        return i;
      } 
    }
    if (nums.indexOf(target) < 0) {
      nums.push(target)
      nums.sort((a,b) => a - b)
      return nums.indexOf(target);
    }
  }
  
  console.log(searchInsert([1,3,5,6], 0))