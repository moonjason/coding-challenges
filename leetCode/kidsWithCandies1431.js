// /**
//  * @param {number[]} candies
//  * @param {number} extraCandies
//  * @return {boolean[]}
//  */

// https://leetcode.com/problems/kids-with-the-greatest-number-of-candies/
// Leet code easy 
// Arrays

var kidsWithCandies = function(candies, extraCandies) {
    const res = [];
    let largest = 0;
    for (let i = 0; i < candies.length; i++) {
        if (largest < candies[i]) {
            largest = candies[i]
        }
    }
    for ( let i = 0; i < candies.length; i++) {
        console.log(candies[i] + extraCandies)
        if (candies[i] + extraCandies >= largest) {
            res.push(true);
        } else {
            res.push(false);
        }
    }
    
    return res;
};

console.log(kidsWithCandies([2,3,5,1,3], 3));


// using 
//  var max = Math.max(...candies); 
// is a good way to find the largest number ... same run time tho i believe
