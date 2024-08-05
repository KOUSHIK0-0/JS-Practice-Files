// Dates

let myDate = new Date()
console.log(myDate);
console.log(myDate.toString())
console.log(myDate.toLocaleString());
console.log(myDate.toDateString());
console.log(myDate.toLocaleDateString())
console.log(typeof myDate);

let myCreatedDate = new Date("2024-01-25")
console.log(myCreatedDate.toDateString());
console.log(myCreatedDate.toLocaleString());
console.log(myCreatedDate.toLocaleDateString());

let myTimeStamp = Date.now()
console.log(myCreatedDate.getTime());
console.log(Date.now());


let newDate = new Date()
console.log(newDate.getMonth());
console.log(newDate.getDay());
console.log(newDate.getHours());
console.log(newDate.getMinutes());
console.log(newDate.getSeconds());
console.log(newDate.toLocaleString('default', {
    weekday: "long"
}));