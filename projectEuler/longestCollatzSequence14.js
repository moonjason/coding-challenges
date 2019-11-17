// grab the length of the chain 

const lengthChain = (num) => {
    let count = 1; 
    while (num > 1){ 
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
    let longest = 0;
    map.set('result', 0);
    for (let i = 999999; i > 1; i--) {
        chainLength = lengthChain(i);
        if (chainLength > longest) {
            longest = chainLength;
            map.set('result', i);
        } 
    }
    return map.get('result');
}

console.time("END");
console.log(longestChain());
console.timeEnd("END");