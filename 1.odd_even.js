// . Given an array of numbers. Write a function to separate odd and even numbers in different arrays.

let arr = [16,8,21,7,6,5,3,14]

function odd_even(arr = []) {

    let arr_even = []
    let arr_odd = []
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === 0) {
            continue
        } else if (arr[i] % 2 == 0) {
            arr_even.push(arr[i])
        } else {
            arr_odd.push(arr[i])
        } 
    } return {arr_even,arr_odd} 

}            

console.log(odd_even(arr))


