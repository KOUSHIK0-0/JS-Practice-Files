const user = {
    username: "Saikoushik",
    price: 999,
    welcomeMessage: function() {

        console.log(`${this.username}, welcome to website`);
        console.log(this);
    }
}

user.welcomeMessage()
user.username = "Sam"
user.welcomeMessage()


/*function chai(){
    let username = "hitesh"
    //console.log(this); "this" is not workson function
}

chai() */

//++++++++++++++ arrow functions +++++++++++++

/*const chai = () =>
{
    let username = "Saikoushik"
    console.log(this);
}

chai() */

/* const addtwo = (num1,num2) => {
    return num1 + num2
} */

//const addtwo = (num1,num2) =>  (num1 + num2) Implicit arrow function

//const addtwo = (num1,num2) =>  (num1 + num2)

// returning the object
const addtwo = (num1 , num2 ) => ({username: "Saikoushik"})

console.log(addtwo(3,5))

