// // Write a function which receives two strings and removes appearances of the second string from the
// first one.

let input = "This is some text.";
let str = "is";
let new_str = "";


function remove_str(input,str) {
    if (typeof input === "string" && typeof str === "string") {
        new_str = input.replace(/is/g, "");
        
    } else {
        return null
    } 
    return new_str 
}

console.log(remove_str(input,str))


















// function remove_str(input,str) {
    
//     for (let i = 0; i < input_list.length; i++) {
//         if (input_list.includes(str) && input_list[i].length === str.length) {
//             console.log(input_list[i])
//             delete input_list[i]
//         }

    //         for (let j = 0; j < input_list[i].length; j++) {
    //             if (input_list[i].includes(str)) {
    //                 input_list[i].replace(str,"")
    //             }
    //         }
    //     }
            
    // }
    // let n = input_list.join(",")       
//     }// return n
// }
// console.log(remove_str(input,str))
// console.log(input_list[0].includes(str))
