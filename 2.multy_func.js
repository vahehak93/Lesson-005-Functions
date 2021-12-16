// Write a function that calculates sum, difference, multiplication and division between given array
// elements depending on passed operation symbol. Write appropriate function for each operation.

let arr = [15,0,5,10,25] // 75 -45  25 20 15 10 5

function math_oper(arr = [], operator) {
    if (operator === "+") {
        let sum = 0;
        for (let i = 0; i < arr.length; i++) {
            sum += arr[i]
        } return sum
    } else if (operator === "-") {
          let sub = 0;
          for (let j = 0; j < arr.length; j++) {
              sub -= arr[j]
          } return sub
    } else if (operator === "*") {
        let multiple = 1;
        for (let k = 0; k < arr.length; k++) {
            multiple *= arr[k]
        } return multiple
    }  else if (operator === "/") {
        let div = 1;
        for (let x = 0; x < arr.length; x++) {
            div /= arr[x]
        } return div
    } else {
        return 0   
    } 
}


console.log(math_oper(arr, "*"))
// console.log()
