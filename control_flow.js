// if

const isUserLoggedIn = true

/*if (isUserLoggedIn /*true then code will exceute , if it false it wont exceute ) */

// 2 < 2 => false, 2 <= 2 => true
// < , > , <= , >= , ==, "=" is assignment, != used for not equal.

if ( 2 == "2")
{
   // console.log("exceuted.");
}

// "===" used for type checking and value checking and it is also called as strict checking


const temperature = 41

if ( temperature < 50 )
{
    //console.log("Temperature less than 50");
}
else{
   // console.log("Temperature is greater than 50");
}
//console.log("Exceute.");


/*const score = 200

if (score > 100)
{
    let power = "fly"
    console.log(`User power: ${power}`);
}
console.log(`User power: ${power}`);*/

// var scope is global.


const balance = 1000
/*if ( balance > 500)
{
    console.log("test");
}*/

/*if (balance < 500 ){
    console.log("less than 500");
}
else if(balance < 750){
    console.log("less than 750");
}
else if(balance < 900)
{
    console.log("less than 900");
}
else
{
    console.log("less than 1200");
}*/


const debitCard = true

if (isUserLoggedIn && debitCard && 2==2)
{
    console.log("allowed to buy course");
}

const loggedInFromGoogle = false
const loggedInFromEmail = true

if(loggedInFromGoogle || loggedInFromEmail)
{
    console.log("User logged in");
}














