// for loop

for (let i = 0;i < 10; i++)
{
    const element = i;
    if(element == 5){
     //   console.log("5 is best number");
    }
   // console.log(element);

}

for (let i = 0; i <= 10; i++) {
    //console.log(`OUTER LOOP VALUE: ${i}`);
    //console.log(`${i}th table`);
    
    for (let j = 0; j <= 10; j++) {
        //console.log(`INNER LOOP VALUE ${j} and INNER LOOP VALUE ${i}`);
        //console.log(i + '*' + j + '=' + i*j);
        
    }
    
}
const myArray = ['hanuman','batsman','superman']
console.log(myArray.length);
for (let index = 0; index < myArray.length; index++) {
    const element = myArray[index];
    //console.log(element);
}


//KEYWORDS
//break and continue

for (let index = 0; index <= 30; index++) {
    if(index == 5)
    {
       //console.log(`Detected ${index}`);
        break
    }
    //console.log(`Value of i is ${index}`);
}


for (let index = 0; index <= 30; index++) {
    if(index == 5)
    {
       console.log(`Detected ${index}`);
        continue
    }
    console.log(`Value of i is ${index}`);
}



