//Primitive datatypes.
/*

There are seven categories

String
Number
Boolean
null
undefined
Symbol
BigInt
*/



//Reference (Non - Primitive datatype)

/*
Arrays
Objects
Functions
*/

// == means it performs the type conversion and performs the operation

// === means without performing the type conversion it performs the operations

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outSideTemp = null

let userEmail = undefined

const id = Symbol('123')
const anotherId = Symbol('123')
console.log(typeof id);
console.log(id == anotherId);

//const bigNumber = 123674326452374523754732

//console.log(bigNumber);

const heros = ["krish","shaktiman", "hanuman"]
const student = {
    name : "Sai",
    rollNumber : 243,
    gender: "Male"
}

console.log(heros);
console.log(student);

const myFunction = function(){
    console.log("Hello World");
}

console.log(typeof(heros),typeof(student),typeof(myFunction));
