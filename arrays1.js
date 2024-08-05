// arrays

const myArr = [1,2,3,4,5,true,"hitesh"]
//console.log(myArr[6])
const myHeros = ["shakti","hanuman"]
const myArr2 = new Array(1,2,3,4,5,6,7)
//console.log(myArr[3])

// array methods

myArr.push(10)
myArr.push(14)
//console.log(myArr);
myArr.pop()

//console.log(myArr);
//console.log(myArr.includes(2));
//console.log(myArr.indexOf("hitesh"))
//console.log(myArr.indexOf("sai"))


const newArr = myArr.join()
//console.log(newArr);

// slice, splice

console.log("A ", myArr);
//console.log(myNewArray);


const myNewArray = myArr.slice(1,3)
console.log(myNewArray);

console.log("B ",myArr);
const newArray2 = myArr.splice(1,3)
console.log("C ",myArr);
console.log(newArray2);

