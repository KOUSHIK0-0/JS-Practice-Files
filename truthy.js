const userEmail = {}

// empty string is false

/*if(userEmail.length === 0)
{
    console.log("Array is empty.");
}
else{
    console.log("don't have user email");
}*/

/*

FALSE

0, -0, BigInt 0n, "" , null, undefined, NaN

TRUE

"0", "false", " ", [], {}, function(){}, 

*/

const emptyObject = {}

if (Object.keys(emptyObject).length === 0)
{
    console.log("Object is empty");
}

const emptyFunction = function(){}

if(emptyFunction)
{
    console.log("true")
}

// Nullish Coalescing Operator (??): null, undefined

let val1;
//val1 = 5 ?? 10
// val1 = null ?? 10
//val1 = undefined ?? 10
// it is used as a special operator to set default value, avoid null and undefined.
console.log(val1);
val1 = null ?? 10 ?? 15
// the first value is assigned to the variable.
console.log(val1);

// Terniary Operator is different

//condition ? (true) : (false)

const iceTeaPrice = 100
iceTeaPrice >= 80 ? console.log("Less than 80") : console.log("more than 80");









