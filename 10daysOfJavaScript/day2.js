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

vowelsAndConsonants('javascriptloops');