//++++++++++++Code exceution

/*

Global Exceution Context

Function Exceution Context

Eval Exceution COntext

*/

/*

code => Memory creation phase => Exceution phase

*/

// Code Snippet

/*
let val1 = 10
let val2 = 5

function addTwoNumbers(num1,num2)
{
    return num1 + num2;
}

let result = addTwoNumbers(val1,val2)
let result2 = addTwoNumbers(10,5)
*/

/*

step1 : Global Exceution -> this, it only declared at once

step2 : Memory Creation phase ->
 (val1 = undefined, val2 = undefined, addnNum = definition, result = undefined, result2 = undefined.)

step3 : Exceution phase
 (val1 = 10, val2 = 5, addNum = definition, result = addNum ( val1, val2 ) = 15 ( after returing back ) {
      it creates a new enivornment and thread (exceution context) because it is a function.

      step2 : Memory creation
       ( num1 = undefined, num2 = undefined, total = undefined.
        )

      step3 : Exceution Context
      ( num1 = 10, num2 = 5, total = 15)
      
      and return total, this total is return to the global exceution context.
      and result1 become 15.
      after return the new exceutional context is deleted.
 },

 result2 = addNum(10,2) = 12 ( after returning back )
 {
   it creates a new exceutional context and thread.

   step2 : Memory exceution Context
   ( num1 = undefined, num2 = undefined, total = undefined )

   step3 : Exceution Context
   ( num1 = 10, num2 = 2, total = 12)

   the total value is returned to the global exceutional context and assigned to the result2 variable.
 }
 
 )
*/


/*

CALL STACK


two()

one()

Global Exceution

if one() is on exceution phase , it enters the stack and when it completes the task assigned. it get deleted from the stack.


*/

