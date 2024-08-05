console.log(Math.abs(-4));
console.log(Math.round(4.3));
console.log(Math.round(4.6));
console.log(Math.ceil(4.2));
console.log(Math.floor(4.9));
console.log(Math.sqrt(2));
console.log(Math.min(4,3,6,8));
console.log(Math.max(3,5,12,10));

console.log(Math.random()*10);


let min = 10
let max = 20

let randNumber = Math.random()

console.log(Math.floor(randNumber * (max-min+1)) + min);
console.log(Math.ceil(randNumber * (max-min+1)) + (min-1));