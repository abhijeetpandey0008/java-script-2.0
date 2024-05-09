// // // singleton

// // // we can also use object.create to create a object - it will create the singleton object

// // // OBJECT LITERALS

// // const mySym = Symbol("key1")

// // const user={
// //     name:"ramji",
// //     [mySym]:"myKey1",
// //     age:20,
// //     location : "delhi",
// //     email:"ramji@123gmail.com",
// //     isLoggedIn:false,
// //     lastLoginDays:["Monday" , "Saturday"]
// // }

// // console.log(user.email)
// // console.log(user["email"])// while using this we have to pass the value in the form of string 
// // user.email="abcde123123@gmail.com"
// // console.log(user)

// // user.greeting = function(){
// //     console.log("Hello user  i am here ");

// // }
// // console.log(user.greeting());
// // console.log(user.greeting);

// // user.greeting2 = function(){
// //     console.log(`Hello user  i am here  , ${this.name}`);
// // }
// // console.log(user.greeting2());
// // console.log(user.greeting2);

// //const tinderuser = new Object() //  this is singleton object 
// const tinderuser  = {}// this is non single ton object 

// tinderuser.id = "12121acd"
// tinderuser.name = "sammi"
// tinderuser.isLoggedIn = false
// //console.log(tinderuser); 

// const regularuser = {
//     email: "sammi@gmail.com",
//     fullname:{
//         userfullname :{
//             firstname: "ramu",
//             lastname: "chaubey"
//         }
//     }
// }
// console.log(regularuser);
// console.log(regularuser.fullname.userfullname.firstname);
// console.log(regularuser.fullname.userfullname.firstname.length);
// console.log(regularuser.fullname.userfullname.lastname);
// console.log(regularuser.fullname.userfullname.lastname.length);


// const obj1 = {1: "a" , 2: "b"}
// const obj2 = {3 : "c" , 4 : "d"}

// // const obj3  = {obj1 , obj2} // this will take obj2 as a single element 


// //const obj3 = Object.assign(obj1,obj2)
// const obj3 = Object.assign({} , obj1,obj2)


//   console.log(obj3);

// we can de-structure the object  according to our convinence

// const course = {
//   coursename : "abcd",
//   price : "998",
//   courseInstructor : "xyz"

// }
// // console.log(course.courseInstructor) - this is  quite lengthy to use it again and again when in a function 
// // so  we use the concept of object - de-structure

// const {courseInstructor : instructor} = course // here we de-struct the object 
// //console.log(courseInstructor);
// console.log(instructor);

// **********API*************


