/*
 * Complete the Rectangle function
 */
function Rectangle(a, b) {
    const rec = {
        length: a, 
        width: b,
        perimeter: 2 * (a + b),
        area: a * b
    }
    console.log(rec.length);
    console.log(rec.width);
    console.log(rec.perimeter);
    console.log(rec.area)
    return result;
}

/*
 * Return a count of the total number of objects 'o' satisfying o.x == o.y.
 * 
 * Parameter(s):
 * objects: an array of objects with integer properties 'x' and 'y'
 */
function getCount(objects) {
    let counter = 0;
    objects.forEach(o => {
        if (o.x === o.y) {
            counter++;
        }
    })
    return counter;
}
