// The following iterative sequence is defined for the set of positive integers:

// n → n/2 (n is even)
// n → 3n + 1 (n is odd)

// Using the rule above and starting with 13, we generate the following sequence:

// 13 → 40 → 20 → 10 → 5 → 16 → 8 → 4 → 2 → 1
// It can be seen that this sequence (starting at 13 and finishing at 1) contains 10 terms. Although it has not been proved yet (Collatz Problem), it is thought that all starting numbers finish at 1.

// Which starting number, under one million, produces the longest chain?

// NOTE: Once the chain starts the terms are allowed to go above one million.


// grab the length of the chain 

const lengthChain = (num, map) => {
    let count = 1; 
    while (num > 1){ 
        if (map.get(num)) { // memoization | checking to see if map already has length of a number in the chain
            count += map.get(num); // if we see a length of a num in a chain, stop the loop and just add rest
            break;
        }
        if (num % 2 === 0) {
            num /= 2;
        } else {
            num = (num * 3) + 1
        }
        count++;
    }
    return count;
}

// grab the longest chain of a starting number under one million 

const longestChain = () => {
    const map = new Map()
    let longestLength = 0;
    let longestStarter = 0;
    for (let i = 2; i < 1000000; i++) {
        chainLength = lengthChain(i, map);
        map.set(i, chainLength)
        if (chainLength > longestLength) {
            longestLength = chainLength;
            longestStarter = i;
        } 
    }
    return longestStarter;
}

console.time("END");
console.log(longestChain());
console.timeEnd("END");