let a = 300
if(true)
{
    let a = 20
}
//console.log(a);


//++++++++++NESTED SCOPE

function one()
{
    const username = "Saikoushik"
    function two()
    {
        const website = "youtube"
        console.log(username);
    }
    //console.log(website);
    //two()
}

//one()

if (true)
{
    const username = "Saikoushik"
    if (username === "Saikoushik") {
        const website = " youtube"
       // console.log(username + website)
    }
    //console.log(website);
}
//console.log(username);


// ++++++++++++++++ interesting +++++++
console.log(addOne(5))

function addOne(number)
{
    return number + 1
}


//console.log(addTwo(4))
const addTwo = function(num){
    return num + 2
}

console.log(addTwo(4))
