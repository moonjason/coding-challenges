// Problem 3 Project Euler
// The prime factors of 13195 are 5, 7, 13 and 29.

// What is the largest prime factor of the number 600851475143 ?

const findLargestPrimeFactor = (num) => {
    let largestPrime; 
    for (let i = 2; i <= num ; i++) {
        if (num % i === 0) {
            num = num / i
            largestPrime = i
        }
    }
    return largestPrime;
}

console.log(findLargestPrimeFactor(600851475143))
