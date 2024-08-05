// for of loop



/*for (let i = 0; i < myArray.length; i++) {
    const element = myArray[i];
    //console.log(element);
}*/

const arr = [1,2,3,4,5]

for (const i of arr) {
    //console.log(i);
}

/*for (const object of myArray) {
    //console.log(object);
}*/

const greetings = "hello world!"

for (const char of greetings) {
    //console.log(char);
    
}

/*const obj = {
    name: "Koushik",
    subject: "math",
    grade: 10.0,
    gender: "male"
}

for (const element of obj) {
    console.log(element);
    
}*/

//MAPS

const map = new Map()
map.set('IN',"india")
map.set('USA',"United states of America")
map.set('Fr',"france")

for (const [key, value] of map) {
   // console.log(key, ':-', value);
    
}

const obj = {
    name: "Koushik",
    subject: "math",
    grade: 10.0,
    gender: "male"
}

// Objects are not iterable by forof loops.

// for in


for (const key in obj) {
    //console.log(`${key} :- ${obj[key]}`);
}

for (const element in arr) {
   // console.log(`The element of index ${element} is ${arr[element]}`);
}

// for each

const coding = ['python','java','cpp','c','ruby']

/*coding.forEach(function (item) {
    console.log(item);
    
})*/

/*coding.forEach((item) => {
    console.log(item);
    
})*/

/*function printMe(item)
{
    console.log(item);
    
}

coding.forEach(printMe)*/

/*coding.forEach((item,index,arr) => {
    console.log(item,index,arr);
})*/

const myArray = [
    {
        name: "Sai",
        school: "Montessori"
    },{
        name: "Koushik",
        school: "fatima"
    },{
        name: "vignesh",
        school: "marymother"
    }
]

myArray.forEach((item)=>{
    console.log(item.name);
    
})

map.forEach((values)=>{
    console.log(values);
    
})