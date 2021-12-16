// Write a function, which receives a string, finds possible largest numbers in the string and returns their
// sum.

let string = "FwrtY45KHL120mn-10P";
let arr2 = string.split("");
let sum = [];
let result = [];


function largest_sum(string) {

    for (let i = 0; i < arr2.length; i++) {
        if (isNaN(arr2[i]) === false) {
            sum.push(Number(arr2[i]))
        } else if (arr2[i] === "-") {
            sum.push(arr2[i])
        } else {
            sum.push(".")
        }
        
    }
    for (let j = 0; j < sum.length-1; j++) {
        let count = 0;
        let l = []
       if (typeof (sum[j]) === "number" && count < sum.length || sum[j] === "-") {
            count++

            result.push((String(sum[j]) ))
           
       } else {
           continue
       }
    } 
    return result
                  
}

console.log(largest_sum(string))
console.log((sum[15] + sum[5]))