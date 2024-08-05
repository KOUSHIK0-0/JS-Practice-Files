function calculateCartPrice(val1,val2,...num1){
    return num1
}

//console.log(calculateCartPrice(200,400,500,2000))

const user = {
    userName: "koushik",
    prices: 199
}

function handleObject(user)
{
    console.log(`User Name is ${user.userName} and price is ${user.price}`)
}
//handleobject(user)
handleObject({
    userName: "Sam",
    price: 399
})

const myNewArray = [200,400,100,600]

function arraySecondValue(arr)
{
    return arr[1];
}

//console.log(arraySecondValue(myNewArray))
console.log(arraySecondValue([100,2000,400]))