// Leet Code 509 -- Fibonacci Number

// topic recursion , dynamic programming 


const fib = (n) => {
    const fib = (n) => {
      if (n === 0) {
          return 0; 
      } else if (n === 1) {
          return 1; 
      }
         
      return fib(n - 2) + fib(n - 1)
  }
}