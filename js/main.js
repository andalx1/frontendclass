const fecha = document.querySelector("#fecha")


const FECHA = new Date()
fecha.innerHTML= FECHA.toLocaleDateString('en-us',{weekday:'long',month:'short',day:'numeric'})
