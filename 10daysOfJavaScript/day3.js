/**
*   Return the second largest number in the array.
*   and param {Number[]} nums - An array of numbers.
*   and return {Number} The second largest number in the array.
**/
function getSecondLargest(nums) {
    // nums is an array
    let largest = 0; 
    let secondLargest = 0;
    for (let i = 0; i < nums.length; i++){
        if (nums[i] > largest){
            secondLargest = largest;
            largest = nums[i];
        } else if (nums[i] > secondLargest && nums[i] < largest) {
            secondLargest = nums[i]
        }
    };
    return secondLargest;
}
