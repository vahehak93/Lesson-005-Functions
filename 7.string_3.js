// Write a function to compute a new string from the given one by moving the first char to come after
// the next two chars, so "abc" yields "bca". Repeat this process for each subsequent group of 3 chars.
// Ignore any group of fewer than 3 chars at the end.

let str = "dfgjkloyp"; 

let str1 = (str.substring(1,) + str[0])
console.log(str.length)
function str_break(str) {
    let result = "";
    if (str.length < 3) {
        return result
    } else if (str.length === 3) {  
        result = (str.substring(1,) + str[0]) 
    } else {
        let step = 2;
        for (let i = 0; i < str.length; i+=3) {
            result += (str.substring(step-1,step+1) + str.substring(step-2,step-1))
            step+=3;
        }
    }
    return result

}

console.log(str_break(str))


