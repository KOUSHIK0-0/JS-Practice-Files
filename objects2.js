const tinderUser = new Object()
console.log(tinderUser);


tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false

console.log(tinderUser); 


const regUser = 
{
    email: "sam@gmail.com",
    fullname: {
        userfullname: {
            firstname: "hitesh",
            lastname: "chaudary"
        }
    }
}

//console.log(regUser.fullname);

const object1 = {
    1:"a",
    2:"b"
}

const object2 = {
    2: "c",
    4: "d"
}

//const obj3 = {object1,object2}
//const obj3 = Object.assign({},object1,object2)
//console.log(obj3);


const obj3 = {...object1,...object2}
console.log(obj3);


const users = [
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 2,
        email: "h@gmail.com"
    },
    {
        id: 3,
        email: "h@gmail.com"
    }
]

console.log(users[1].email);
console.log(tinderUser);

console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));


console.log(tinderUser.hasOwnProperty('isLoggedIn'));

