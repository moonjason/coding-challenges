//regular expressions 1 
    /*
     * Declare a RegExp object variable named 're'
     * It must match a string that starts and ends with the same vowel (i.e., {a, e, i, o, u})
     */

// Check to see if a str begins AND ends with the same vowel
// abda => true
// abdi => false
function vowelChecker(str) {
    //  ^ => first item matches:
    // () => stores matching value captured within
    // [aeiou] => matches any of the characters in the brackets
    // . => matches any character:
    // + => for 1 or more occurrances (this ensures str length > 3)
    // \1 => matches to previously stored match. 
        // \2 looks for matched item stored 2 instances ago 
        // \3 looks for matched item stored 3 ago, etc
    
    //  $ ensures that matched item is at end of the sequence
    
        let re = /^([aeiou]).+\1$/;
        return re;
}

function regexVar() {
    /*
     * Declare a RegExp object variable named 're'
     * It must match a string that starts with 'Mr.', 'Mrs.', 'Ms.', 'Dr.', or 'Er.', 
     * followed by one or more letters.
     */
    const re = /^(Mr|Mrs|Ms|Dr|Er)(\.)([a-zA-Z])*$/
    // (\.)  to match a period (special character: needs to be escaped by a \)
    // $ means the string must end with the character expression just before it. In this case it must end with an [A-za-z] character and not anything else.
    /*
     * Do not remove the return statement
     */
    return re;
}