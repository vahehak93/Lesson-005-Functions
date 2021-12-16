// Given a word and a list of possible anagrams, select the correct sublist.

let input = "listen";
let arr  = ["enlists","google","inlets","banana"];


function anagram(arr,input) {
    let false_count = 0;
    let str = [];
    let count = 0; 
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].length != input.length) {
            false_count++
            continue
        } else {
            for (let j = 0; j < arr[i].length; j++) {
                count++
                if (arr[i].includes(input[j]) && input.includes(arr[i][j])) {
                    str += arr[i][j]
                    for (let k = 0; k < input.length; k++) {
                        if (str.includes(arr[i])) {
                            return [arr[i]]
                        } 
                    }               
                } 
            }   
        }    
    }
    if (false_count === arr.length) {
        let output = "Anagram does not exist";
        return output
    }
}       

console.log(anagram(arr,input))