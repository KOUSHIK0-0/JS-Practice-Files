// OBJECTS

// Singleton

// object literals

const mySym = Symbol("key1")

const jsUser = {
    name: "Saikoushik",
    "full name": "Saikoushik Ananthoju",
    [mySym]: "mykey1",
    age: 18,
    location: "Hyderabad",
    email: "koushik@fe.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday","Saturday"]
}

console.log(jsUser.name);
console.log(jsUser["name"]); // it is a correct practice.
console.log(jsUser["full name"]);
console.log(jsUser[mySym]);

jsUser["email"] = "koushk@fe.com";
console.log(jsUser["email"]);
//Object.freeze(jsUser)
jsUser["email"] = "koushik@microsoft.com"
console.log(jsUser);
jsUser.greetings = function()
{
    console.log("Hello JS User")
}
console.log(jsUser.greetings());
jsUser.greetingsTwo = function(){
    console.log(`Hello JS User ${this["full name"]}`)
}
console.log(jsUser.greetingsTwo());