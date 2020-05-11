// Leet Code 1137 N-th Tribonacci Number
//https://leetcode.com/problems/n-th-tribonacci-number/
const map = new Map();
map.set(0, 0);
map.set(1, 1);
map.set(2, 1);

const tribonacci = (n) => {
    if ( map.get(n) !== undefined ) {
        return map.get(n); 
    } else if ( !map.get(n) ) {
        const value =  tribonacci(n - 1) + tribonacci(n - 2) + tribonacci(n - 3);
        map.set(n, value); 
    }
    return map.get(n);
};