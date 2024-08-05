//const coding = ["phyton","ruby","cpp","java"]

//for each cannot return the values

/*const values = coding.forEach((item)=>{
    //console.log(item);
    return item
})
console.log(values);*/



/*const filtered_numbers = numbers.filter((num)=>{
    if(num > 4)
    {
        return num;
    }
})
console.log(filtered_numbers);
*/

const new_numbers = []

/*numbers.forEach((item)=>{
    if(item > 4)
    {
        new_numbers.push(item)
    }
})
console.log(new_numbers);*/

const students = [
    { id: "001", name: "Anish", sports: "Cricket" },
    { id: "002", name: "Smriti", sports: "Basketball" },
    { id: "003", name: "Rahul", sports: "Cricket" },
    { id: "004", name: "Bakul", sports: "Basketball" },
    { id: "005", name: "Nikita", sports: "Hockey" },
    { id: "006", name: "Amit", sports: "Hockey" },
    { id: "007", name: "Narul", sports: "Basketball" },
    { id: "008", name: "Mandanna", sports: "Hockey" },
    { id: "009", name: "Nitin", sports: "Basketball" },
    { id: "010", name: "Suresh", sports: "Hockey" }
]

let hockey_players = students.filter((obj)=>{
    if(obj.sports == "Hockey")
    {
        return obj
    }
})

let basket_players = students.filter((obj)=>{
    if(obj.sports == "Basketball")
    {
        return obj
    }
})

let cricket_players = students.filter((obj)=>{
    if(obj.sports == "Cricket")
    {
        return obj
    }
})

hockey_players.forEach((players)=>{
    console.log(`The Hockey players are := ${players.name}`);
})

basket_players.forEach((players)=>{
    console.log(`The Basket Ball players are := ${players.name}`);
})


cricket_players.forEach((players)=>{
    console.log(`The Cricket players are := ${players.name}`);
})


let numbers = [1,2,3,4,5,6,7,8,9,10]

const new_nums = numbers
.map((num)=>{
    return num * 10
})
.map((num)=>{
    return num + 1
})
.filter((num) => {
    if(num >= 40)
    {
        return num
    }
})

console.log(new_nums);

//REDUCE

const myNums = [1,2,3]

const myTotal = myNums.reduce((acc,curr)=>{
    console.log(`Acc: ${acc} and CurrVal: ${curr}`);
    
    return acc+curr 
},0)

console.log(myTotal);


const shoppingCart =[
    {
        itemName: "Java course",
        price: 2999
    },
    {
        itemName: "C++ course",
        price: 1499
    },
    {
        itemName: "Python course",
        price: 1699
    },
    {
        itemName: "Devops course",
        price: 3999
    },
    {
        itemName: "AI-ML course",
        price: 2699
    },
    {
        itemName: "Web Development course",
        price: 15999
    },
    {
        itemName: "Data Science course",
        price: 1799
    }
]

const shoppingCartTotal = shoppingCart.reduce((intial,obj) => {
    console.log(`The Inital Value :- ${intial} and Course Price :- ${obj.price}`);
    return intial + obj.price
},0)

console.log(shoppingCartTotal);




