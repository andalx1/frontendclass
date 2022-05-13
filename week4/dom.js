let titulo = document.getElementById('encabezado');
//console.log(titulo.innerHTML);

let contenido = document.getElementById('concepto');
concepto.style.color = 'blue';
//console.log(concepto.innerHTML);

let caracteristicas = document.getElementsByTagName("p");
caracteristicas[0].style.textAlign = "right";
console.log(caracteristicas[0].innerHTML);

let nuevoParrafo = document.createElement('p');
let textoparrafo = document.createTextNode('el aparrafo es este.');
let datoNuevo = document.getElementById('datos');
datoNuevo.appendChild(nuevoParrafo);
nuevoParrafo.appendChild(textoparrafo);

