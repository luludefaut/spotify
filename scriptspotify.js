const playButtons = document.querySelectorAll(".play")

playButtons.forEach(btn=>{

btn.addEventListener("click",(e)=>{
e.stopPropagation()
console.log("Play clicado")

})

})