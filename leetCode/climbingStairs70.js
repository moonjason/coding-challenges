// leet code problem # 70 

// subject: dynamic programming 

const climbStairs = (n) => {
    let cache = {};
  
    let howManyWays = (n) => {
      // if the number is in the object, return the cache's key 
      if (n in cache) {
        return cache[n];
      }
  
      // if cache is 1, 2, 3 return that number AND give that value in the cache
      // this way we immediately return that value instead of checking this condition and setting the value below
      if (n < 4) { 
        cache[n] = n;
        return cache[n]
      }
  
      //recursiveness used to reach the case listed directly above 
      // this is being used because we absolutely know that there are 3 ways to get to 3, 2 ways to get to 2, 1 way to get to 1 
      cache[n] = (howManyWays(n - 1) + howManyWays(n - 2));
      return cache[n];
    }
  
    return howManyWays(n);
  }
  
  console.log(climbStairs(4))