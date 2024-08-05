const accountId = 1443355
let accountEmail = "ananthojusaikoushik@gmail.com"
var accountPassword = "1234"
accountCity = "Hyderabad"

// accountId = 5 // not allowed.

accountEmail = "sai@gmail.com"

console.log(accountId);

console.table([accountId,accountEmail,accountPassword,accountCity])

/*
Prefer not to use "var"
because of issue in block scope and functional scope.
*/

let accountState;

console.log(accountState);