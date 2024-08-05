
function sayMyName(){
console.log("S");
console.log("A");
console.log("I");
console.log("K");
console.log("O");
console.log("U");
console.log("S");
console.log("H");
console.log("I");
console.log("K");
}

// sayMyName()

function addTwoNumbers(number1, number2){

    /*let result = number1 + number2
    return result*/
    return number1 + number2
}

const result = addTwoNumbers(3, 5)
//console.log(result);

function loginUserMessge(/*userName*/ userName = "User")
{
    if(/*userName === undefined*/ !userName)
    {
        console.log("Please enter the username.")
        return
    }
    return `${userName} just logged in.`
}

//console.log(loginUserMessge("Koushik"))
console.log(loginUserMessge())


















