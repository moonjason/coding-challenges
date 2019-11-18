// This function returns an array of all possible outcomes from flipping a coin N times.
// Input type: Integer
// For example, coinFlips(2) would return the following:
// ["HH", "HT", "TH", "TT"]
// H stands for Heads and T stands for tails
// Represent the two outcomes of each flip as "H" or "T"
let result = []
let hist = []
const coinFlips = (num) => {
    if (num === 0) {
        return result;
    }  

    if (result.length < 4) {
        result.push('H')
        result.push('T')
    } else {
        result.push(result[result.length - 2], result[result.length -1])
    }

    if (result.length > 2) {
        result = result.map(letter => {
            if (hist.includes(letter.concat('H'))) {
                hist.push(letter.concat('T'))
                return letter.concat('T')
            } else {
                hist.push(letter.concat('H'))
                return letter.concat('H')
            }
        })
    } 
    hist = result
    return coinFlips(num - 1);
} 

console.log(coinFlips(4))