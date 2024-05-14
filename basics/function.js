// // // // **********FUNCTIONS *********
// // // //  without parenthesis if we call function it will  be like the reference only 
// // // // function addTwoNumbers(number1, number2){// this is parameter
// // // //     console.log(number1 + number2);
// // // // }
// // // function addTwoNumbers(number1, number2){// this is parameter
// // //     // let result = number1 + number2

// // //     // return result // after return nothing will be printed 
// // //     // console.log("Abhijeet ") // this will not be printed 
// // //     return number1 + number2
// // // }

// // // const result = addTwoNumbers(5 , 4)// argumnet is passed in this  // calling of function we will pass value in the parenthesis 

// // // // console.log("Result : "  , result) ; 

// // // function loginUserMessage(username){
// // //     return `${username} just logged in `

// // // }

// // // loginUserMessage("Abhijeet Pandey ") // nothing will be printed becouse we are not saying it to print we just passing the argument 
// // // console.log(loginUserMessage("Abhijeet Pandey ") ) // this will print 
// // // console.log(loginUserMessage(" ") )
// // // console.log(loginUserMessage() )


// // // function calculateCardPrice(...num1){ // ... - it is the rest operator used to pass all the value 
// // //     // rest operator convert the argument in the form of array 

// // //     return num1

// // // }

// // // console.log(calculateCardPrice(200,300,4000))

// // const user  ={
// //     username:"abhijeeet " , 
// //     price : 500
// // }

// // function handleObject(anyobject){
// //     console.log(`username is ${anyobject.username} and price is ${anyobject.price}`);

// // }
// // handleObject(user)
// // handleObject({
// //     username : "nikki",
// //     price : 5000

// // })



// // ********   SCOPE *************

// // {} -  this is scope 

// // we have 2 scopes 
// // 1 - Block scope   , 2 - Global scope 

// let a = 300
// if(true){
//     let a = 10

//     const b = 20        // all the thing written in if() is called the block code rest are called as global scope 

//     //var c = 30
//     //console.log("INNER : "  , a)
// }


// console.log(b)
// console.log(a)


// function one(){
//     const username = "abhijeet "
//     function two(){
//         const website = "cnjsjheekeke"
//         console.log(username);
//     } // here two can access  all the variable  which is present in one 
//     //console.log(website);
//     two()
// }
// // one()

// if (true){
//     const username = "abhijeet"
//     if(username === "abhijeet"){
//         const website = "youtube"
//         console.log(username + website);
//     }
//     //console.log(website);
// }
// // console.log(username);

// +++++++++++++ interesting fact++++++++++++++++


// console.log(addone(5))

// function addone(num){
//     return num + 1
// }

// addTwo(5) // we can not access this before becouse we  have hold this as variable during initialization 

// const addTwo = function(num){
//     return num+2
// }

// **************ARROW FUNCTIONS*************88
// this() - it is used to reffer current context 

//  const user  = {
//     username: "abhijeet ",
//     price: 999,
//     welcomeMessage : function(){
//         console.log(`${this.username} , welcome to website `);
//        console.log(this);

//     }
//  }

//  user.welcomeMessage()
//  user.username = "sam"
//  user.welcomeMessage()

 // console.log(this);
 // in browser  the global object is "WINDOW"

// function chai(){
//     console.log(this);

// }
// chai()

const  chai  = () => { // way to declare the arrow function 
    let username = "abhijeet"
    console.log(this);
}

 // chai()
 // arrow function

 //const addTwo = (num1 , num2) =>{
  //  return num1 + num2
 //}

 //console.log(addTwo(3,5));

 // this is a way of implicite return where we do not need to write return
//  const addTwo = (num1 , num2) => (num1 + num2) // if we wrapp in parenthesis then we do not need to write return 
//  console.log(addTwo(3,5));

// ***************Immediately Invoked Function Expression (IIFE)*********************

// we use this to avoide the pollution from the global and the variables of the global  scope and to execute immediately 
// we use ()()  for IIFE function  in 1st parenthesis() we write the definition of function 
// in 2nd parenthesis we  use it for  the execution  call

// (function chai() {
//     // NAMED IIFE
//     console.log(`DB CONNECTED`);

// }) ();

// // WE CAN ALSO  DO IT WITH THE ARROW FUNCTIONS

// ((name) => {
//     // SIMPLE IIFE
//     console.log(`DB CONNECTED TWO  ${name}`);
// }) ('ABHIJEET PANDEY')


