/*
document.getElementById('images').addEventListener("click",()=>{
    alert("UL clicked")
})
document.getElementById('third-photo').addEventListener("click",(e)=>{
    alert("Third photo clicked")
    e.stopPropagation()
})
document.getElementById('google').addEventListener("click",(e)=>{
    e.preventDefault()
    e.stopPropagation()
    alert("google is clicked")
}) */

document.querySelector('#images').addEventListener('click',(e)=>{
    if(e.target.tagName === "IMG")
    {
        const component = e.target.parentNode
        component.remove()
    }
    else
    {
        console.log(e.target.tagName)
    }
})