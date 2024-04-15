// const  accouuntId = "12344"
// let accouuntEmail = "abcderfrf1212@gmail.com"

// var accouuntPassword = "1234"

// accountCity  = "jaipur"



 //console.table([]) // we can use this to display the data in the form of table , and we can pass  multiple values which we want to display the data 

 //console.table([ accouuntId,  accouuntEmail , accouuntPassword])

/*
 prefer not to use "var "  becouse of issue in block scope and functional scope 
*/


// DATA TYPES IN JS 

//alert(3 + 3 ) // this will not popup the alert slider like as when we code it on broweser  becouse we are using NODE JS  this time 

// number 
// String
// Boolean
// null => standalone value
// undefined
// Symbol => uniquness


// let score = "33abs"

// console.log(typeof score )
// console.log(typeof(score))

// let valurInNumber = Number(score)
// console.log(valurInNumber)

// console.log(typeof valurInNumber)


// let isLoggedIn = ""
// let booleanIsLoggedIn  = Boolean(isLoggedIn)

// console.log(booleanIsLoggedIn)

// "" = false in boolean conversion 
// "any charrecter"  = return true in boolean conversion 

// *******           OPERATION  IN JAVA SCRIPT       //

 // Arithmetic
 // logical

// Some conparisons 

// console.log(null > 0) ;
// console.log(null == 0) ; 
// console.log(null >= 0)

// console.log(undefined == 0);

// comparison and the equality checks both work differently in java script

/// === it strickly check for both the number and their data type also 



// DATA TYPES
//  1. PRIMITIVE DATA TYPE 
// 7 types =>  String , Number , Boolean , null , undefine, symbol , BigInt
// 2. Reference (Non-primitive) 

//  3 type = Array , objects , Functions 

// const  heros = ["shaktiman" , "nagarjun" ,  "doga"];

// let myObj = {
//     name: "abhijeet",
//     age : 20,
// }

// const myFunction = function(){
//     console.log("hello to this repo");
// }
// console.log(myFunction);


// MEMORIES
// 1 . stack(used in Primitive one ), 2 . Heap(use in Non-Primitive) 
 
let userOne = {
    email : "abcede@gmail.com",
    upi : "avhbhjf@ybl"
};

let uswrTwo = {
    userOne,
}
userTwo.email = "raju@google.com"
console.log(userOne.email);
console.log(userTwo.email);