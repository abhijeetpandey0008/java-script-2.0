// it is always written in square bracket 
// in js arrays size  are resizable and can contain a mix of different data types.
// element cna be accesses  using nonnegative integers and cannot be accessed  using arbitrary string as indexes
// in array-copy operation java script create "shallow copies" rather than "deep copies"
// A shallow copy of an object is a copy whose properties share the same references (point to the same underlying values) as those of the source object from which the copy was made
//A deep copy of an object is a copy whose properties do not share the same references (point to the same underlying values) as those of the source object from which the copy was made.







// const myArr = [0,1,2,3,4]
// console.log(myArr);
// console.log(myArr.length);

//  ARRAY METHODS 
// myArr.push(6);// adding new element 
// console.log(myArr);
// myArr.pop(); // simply remove last element from the array 
// console.log(myArr);
// myArr.unshift(8);// insert  new element at the starting 
// console.log(myArr);
// myArr.shift(); // remove element from starting 
// console.log(myArr);

// const newArr = myArr.join();
// console.log(newArr);
// // using join() we cna chage the data types  of arrays 

// console.log(typeof myArr);
// console.log(typeof newArr);


// ***********SLICE AND SPLICE******* 
// slice do not manipulate the original array 
//splice does manipulate the original array

// console.log("A " , myArr);
// const myn1 = myArr.slice(1, 3)
// console.log(myn1);
// console.log("B " , myArr);
// const myn2 = myArr.splice(1, 3)
// console.log("C " , myArr);
// console.log(myn2);

// // we can use concat() or spread(..., ...) function to combime two or more arrays
// // in case of push it treate other array as  a single element 

// const array1=[1,2,3,4,5,6]
// const array2=[11,22,33,444,555,666]

// const result=array1.concat(array2)
// console.log(result)

// const result3=array1.push(array2)
// console.log(result3)

// const result2 = [...array1, ...array2]
// console.log(result2)

// const another_array = [1,2,3,[4,5,6],7,[6,7,[4,5]]]
// // we use the flat() function to concatinate all the sub array  in a single array

// const real= another_array.flat(Infinity)

// console.log(real)

// let score1=100
// let score2=200
// let score3=300
// console.log(Array.of(score1,score2,score3))

// //Returns a new array from a set of elements.
// //items — A set of elements to include in the new array object.








