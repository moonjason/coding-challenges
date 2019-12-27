/*
 * Complete the vowelsAndConsonants function.
 * Print your output using 'console.log()'.
 */
function vowelsAndConsonants(s) {
    const word = s.split('')
    const vowelList = 'aeiou';
    for (let i = 0; i < word.length; i ++){ 
        if(vowelList.indexOf(word[i]) !== -1){
            console.log(word[i])
        } 
    }
    for (let i = 0; i < word.length; i++){
        if(vowelList.indexOf(word[i]) === -1){
            console.log(word[i])
        }
    }
}

// vowelsAndConsonants('javascriptloops');


// #2 If - Else Statements
// Complete the getGrade(score) function in the editor. It has one parameter: an integer, , denoting the number of points Julia earned on an exam. It must return the letter corresponding to her  according to the following rules:
function getGrade(score) {
    let grade;
    // Write your code here
    if (score <= 30 && score > 25) {
        grade = 'A'
    } else if (score <= 25 && score > 20) {
        grade = 'B'
    } else if (score <= 20 && score > 15) {
        grade = 'C'
    } else if (score <= 15 && score > 10) {
        grade = 'D'
    } else if (score <= 10 && score > 5) {
        grade = 'E'
    } else { 
        grade = 'F'
    }
    return grade;
}


// #3 switch statements
// REMEMBER your switch statement should be whatever the case has to equal to !!!! 

function getLetter(s) {
    let letter = s[0];
    switch(true) {
        case ['a','e','i','o','u'].indexOf(letter) !== -1:
            return 'A';
            break;
        case ['b','c','d','f','g'].indexOf(letter) !== -1:
            return 'B';
            break;
        case ['h','j','k','l','m'].indexOf(letter) !== -1:
            return 'C';
            break;
        default:
            return 'D';
    }   
    return letter;
}
