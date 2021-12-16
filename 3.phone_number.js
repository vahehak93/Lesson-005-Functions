// Given a phone number. Write a function to clean it up, so it is valid. The rules are as follows:
    // If the phone number is less than 10 digits assume that it is a bad number
    // If the phone number is longer than 10, then it is a bad number
    // If the phone number is 10 digits assume that it is good
    // If the phone number consists of 11 symbols and the first one is + and others are numbers, then trim +
    // and return remaining 10 digits.
    // If the phone number contains + symbol more than one, consider it as a bad number.
    // If the phone number contains + symbol not as the first character, consider it as a badnumber.

let phone_number = "+0123456789"
let num_arr = phone_number.split("")
const nums = [0,1,2,3,4,5,6,7,8,9]
const sym = "+"
let sym_count = 0;
let num_count = 0;


function num_check(num_arr) {
    let bad = " Bad number";
    let good = "Good number";
    for (let j = 0; j < num_arr.length; j++) {
        if (num_arr[j] === sym) {
            sym_count++
        } else if (nums.includes(num_arr[j])) {
            num_count++
        }
    }

    if (num_arr.length === 10 && num_arr[0] != sym) {
        if (num_count === num_arr.length) {                
        } return good
    } else if (num_arr.length === 11 && num_arr[0] === sym) {
            if (sym_count === 1) {
                num_arr.splice(0,1)
                let new_str = num_arr.join("")
                return new_str               
            }
    } 
    return bad
}   

console.log(num_check(num_arr))

    