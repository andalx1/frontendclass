const fecha = document.querySelector("#fecha")
const lista = document.querySelector("#lista")
const input = document.querySelector("#input")
const botonenter = document.querySelector("#enter")
const check ='fa-check-circle'
const uncheck = 'fa-circle'
const lineThrough = 'line-through'
let id = 0
const LIST=[]


//funcion agregar tarea

function agregartarea (tarea,id,realizado,eliminado) {

    if(eliminado){return}

    const REALIZADO = realizado ?check :uncheck
    const LINE = realizado ?lineThrough :''

    const elemento =  `
    <li id=elemento>
    <i class="far ${REALIZADO}" data="realizado" id="${id}"></i>
    <p class="text ${LINE}">${tarea}</p>
    <i class="fa-solid fa-trash-can" data="eliminado" id="${id}"></i>
    </li>`

    lista.insertAdjacentHTML("beforeend",elemento)                    
}

//funcion de tarea realizada

function tereaRealizada(element){
    element.classList.toggle(check)
    element.classList,toggle(uncheck)
    element.parentNode.querySelector('.text').classList.toggle(lineThrough)
    LIST[element.id].realizado = LIST[element.id].realizado ?false :true
}

//funcion de tarea eliminada
function tareaEliminada(element) {
    element.parentNode.parentNode.removeChild(element.parentNode)
}



botonenter.addEventListener("click", ()=>{
    const tarea = input.value
    if(tarea) {
        agregartarea(tarea,id,false,false)
        LIST.push({
            nombre:tarea,
            id:id,
            realizado:false,
            eliminado:false
        })
    }
    input.value=""
    id++
    console.log(LIST)
})

document.addEventListener('keyup',function(event){
    if(event.key=='Enter'){
      const  tarea = input.value
      if(tarea){
          agregartarea(tarea,id,false,false)
          LIST.push({
            nombre:tarea,
            id:id,
            realizado:false,
            eliminado:false
        })
      }
      input.value=''
      id++
    }
})

lista.addEventListener('click',function(event){
    const element = event.target
    const elementData = element.attributes.data.value
    if(elementData==='realizado'){
        tereaRealizada(element)
    }
    else if (elementData==='eliminado'){
        tareaEliminada(element)
    }
})