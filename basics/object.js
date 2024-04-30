// singleton

// we can also use object.create to create a object - it will create the singleton object

// OBJECT LITERALS

const user={
    name:"ramji",
    age:20,
    location : "delhi",
    email:"ramji@123gmail.com",
    isLoggedIn:false,
    lastLoginDays:["Monday" , "Saturday"]
}

console.log(user.email)
console.log(user["email"])
user.email="abcde123123@gmail.com"
console.log(user)

user.greeting = function(){
    console.log("Hello user  i am here ");

}
console.log(user.greeting());
