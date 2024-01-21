submit.addEventListener("click",(e) => {
    e.preventDefault()
    let Titlec = Title.value
    let Descc = Desc.value
    localStorage.setItem("todo",JSON.stringify([Titlec, Descc]))
    console.log(e)

    todo.innerHTML =`
    <h1> ${Titlec} </h1>
    <p> ${Descc} </p>
   ` ;

   Title.value= ""
   Desc.value= ""
    
   
})

Deletebtn.addEventListener("click",(e) => {
    e.preventDefault()
   localStorage.removeItem("todo")
   todo.innerHTML =""
})


