let intervalId = null

function randomColor(){
    const hex = '0123456789ABCDEF'
    let color = '#'
    for (let index = 0; index < 6; index++) {
        const r = Math.floor(Math.random() * 16)
        color += hex[r]
    }
    return color
}
function changeColors()
{
    const bodyColor = document.querySelector('body')
    bodyColor.style.backgroundColor = randomColor()
}
document.querySelector('#start').addEventListener('click',()=>{
    if(intervalId == null)
    intervalId = setInterval(changeColors,1000)
})

document.querySelector('#stop').addEventListener('click',()=>{
    clearInterval(intervalId)
    intervalId = null
})



