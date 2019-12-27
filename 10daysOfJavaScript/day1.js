/**
*   Calculate the area of a rectangle.
*
*   length: The length of the rectangle.
*   width: The width of the rectangle.
*   
*	Return a number denoting the rectangle's area.
**/
function getArea(length, width) {
    let area;
    // Write your code here
    area = length * width; 
    
    return area;
}

/**
*   Calculate the perimeter of a rectangle.
*	
*	length: The length of the rectangle.
*   width: The width of the rectangle.
*   
*	Return a number denoting the perimeter of a rectangle.
**/
function getPerimeter(length, width) {
    let perimeter;
    // Write your code here
    perimeter = (2 * length) + (2 * width);
    return perimeter;
}

/*
 * Create the function factorial here
 */
function factorial(num){
    let result = num;
    let count = 1; 
    while (count < num - 1){
        count ++;
        result *= count;
    }
    return result;
}

// console.log(factorial(4))


// Day 1 : Let and Const

function main(r) {
    // Write your code here. Read input using 'readLine()' and print output using 'console.log()'.
    const PI = Math.PI
    // Print the area of the circle:
    console.log(PI * Math.pow(r, 2))
    // Print the perimeter of the circle:
    console.log(PI * 2 * r)
    try {    
        // Attempt to redefine the value of constant variable PI
        PI = 0;
        // Attempt to print the value of PI
        console.log(PI);
    } catch(error) {
        console.error("You correctly declared 'PI' as a constant.");
    }
}

console.log(main(2.6))