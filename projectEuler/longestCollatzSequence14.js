// grab the length of the chain 

const lengthChain = (num, map) => {
    let count = 1; 
    while (num > 1){ 
        if (map.get(num)) {
            count += map.get(num);
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