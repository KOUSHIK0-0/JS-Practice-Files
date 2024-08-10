const Name = function(){
    console.log("Saikoushik")
}
setTimeout(Name, 2000)
const ChangeName = function()
{
    document.querySelector('h1').innerHTML = 'Best Async Course in JS'
}
const changeMe = setTimeout(ChangeName,5000)
document.querySelector('button').addEventListener('click',function(e){
    clearTimeout(changeMe)
})
