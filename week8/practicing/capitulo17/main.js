var elemento = document.createElement("div");
var padre = document.getElementById("contenedor");
var referencia = document.getElementsByTagName("div")[1];
elemento.setAttribute("class","amarillo");
padre.insertBefore(elemento,referencia);