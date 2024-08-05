const firstName = "Ananthoju"
const secondName = "SaiKoushik"
const repoValue = 15
console.log(`My Name is ${firstName} ${secondName} having repoCount  ${repoValue}`)

let gameName = new String("Saikoushik-ks-ert")

console.log(typeof(gameName));

console.log(gameName[2]);
console.log(gameName.__proto__);
console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(4))
console.log(gameName.indexOf('o'));
console.log(gameName.concat("-sk"));

const newString = gameName.substring(0,4)

console.log(newString);

const anotherString = gameName.slice(0,4)

console.log(anotherString);
console.log(gameName.split('-'));
console.log(gameName.replaceAll('-','$'))