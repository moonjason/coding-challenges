// https://leetcode.com/problems/longest-substring-without-repeating-characters/

// Hash Tables, Sliding Window, Two pointers, String 

// Given a string, find the length of the longest substring without repeating chars



const lengthOfLongestSubstring = (str) => {
    if (str.length === 0) return 0;

    let charCount = new Map();
    let longest = 0;
    let left = 0;

    for(let right = 0; right < str.length; right++) { // looping till closing window hits the end of string
        if(charCount.has(str[right])) {
            left = Math.max(left, charCount.get(str[right]) + 1) // we check which one is larger in case our startWindow passes a previously seen character!!
        }
        charCount.set(str[right], right);
        longest = Math.max(longest, right - left + 1); // right - left is the size of the window and we add 1 because of indices
    }

    return longest;
}



console.log(lengthOfLongestSubstring("pwwkew")); 
// => 3
// because "wke" is longest substring not "pwke" because that is a subsequence


// Different solution ... 

// const lengthOfLongestSubstring = (str)  => {
//     let largest = 0;
//     let tempLength = 0;
//     let table = {};

//     for (let i = 0; i < str.length; i++) {
//         let char = str[i];

//         if( table[char] >= tempLength ){
//             largest = Math.max(largest, i - tempLength);
//             tempLength = table[char] + 1;
//         }

//         table[char] = i; // we are putting the character as the key and the value as the index
//     }

//     return largest;
// }
