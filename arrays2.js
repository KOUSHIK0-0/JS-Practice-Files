const marvelHeros = ["Thor","IronMan","spiderMan"]
const dc = ["superMan","flash","batman"]
//marvelHeros.push(dc)
console.log(marvelHeros);
console.log(marvelHeros[3]);
//console.log(marvelHeros[3][0]);
//let allHeros = marvelHeros.concat(dc)
//console.log(marvelHeros);
//console.log(allHeros);

//Spread operator is used by three dots after array name
const AllHeros = [...marvelHeros,...dc]
console.log(AllHeros);

const anotherArray = [1,2,3,[4,5,6],7,[6,7,[4,5]]]

const realAnotherArray = anotherArray.flat(Infinity)
console.log(realAnotherArray);



console.log(Array.from("saikoushik"))


let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1,score2,score3));