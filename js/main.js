import { lista_de_componentes } from "./Data.js"

let root = document.querySelector(".root")
function cargar_items(){

lista_de_componentes.forEach((elemento)=>{

    let div = document.createElement("div")
    div.classList.add("elemento")

    div.innerHTML = `<h1 class="titulo">${elemento.nombre}</h1>
    <span class="texto">${elemento.descripcion}</span>
    <div class="contenido">
    <div class="boton">boton</div>
    </div>
    `  
    root.appendChild(div)
    let boton = document.querySelector(".boton")

    boton.addEventListener("click",remover
 )
})
  
}
cargar_items();
function remover(){
    elemento.classList.remove("elemento")
    elemento.classList.add("remove")
}



    
        let boton = document.querySelector(".boton")
        let elemento = document.querySelector(".elemento")

        boton.addEventListener("click", () => {
            elemento.classList.remove("elemento")
            elemento.classList.add("remove")
    })
   
  



