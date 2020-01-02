// Inheritance 
class Rectangle {
    constructor(w, h) {
        this.w = w;
        this.h = h;
    }
}

/*
 *  Write code that adds an 'area' method to the Rectangle class' prototype
 */
Rectangle.prototype.area = function() {
    return this.w * this.h || Math.pow(this.w, 2)
}
/*
 * Create a Square class that inherits from Rectangle and implement its class constructor
 */
class Square extends Rectangle {
    constructor(w, h){
        super(w, h);
    }
}

if (JSON.stringify(Object.getOwnPropertyNames(Square.prototype)) === JSON.stringify([ 'constructor' ])) {
    const rec = new Rectangle(3, 4);
    const sqr = new Square(3);
    
    console.log(rec.area());
    console.log(sqr.area());
} else {
    console.log(-1);
    console.log(-1);
}

// Template Literals
// WARNING HAS NOTHING TO DO WITH LITERALS...
/*
 * Determine the original side lengths and return an array:
 * - The first element is the length of the shorter side
 * - The second element is the length of the longer side
 * 
 * Parameter(s):
 * literals: The tagged template literal's array of strings.
 * expressions: The tagged template literal's array of expression values (i.e., [area, perimeter]).
 */
function sides(literals, ...expressions) {
    let A = expressions[0];
    let P = expressions[1];
    const answers = [];
    const s1 = (P+Math.sqrt(Math.pow(P, 2)-16*A))/4;
    const s2 = (P-Math.sqrt(Math.pow(P, 2)-16*A))/4;
    
    answers.push(s1);
    answers.push(s2);
    
    return answers.sort();
}


// Arrow Functions 
/*
 * Modify and return the array so that all even elements are doubled and all odd elements are tripled.
 * 
 * Parameter(s):
 * nums: An array of numbers.
 */
const modifyArray = (nums) => {
    for (let i = 0; i < nums.length; i++ ){
        nums[i] % 2 === 0 ? nums[i] *= 2 : nums[i] *= 3;
    } 
    return nums;
}
