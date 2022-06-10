//var pri = document.getElementById("primer");
//pri.innerHTML = "Nuevo <i>hola</i> texto";

/*var ele = document.createElement("li"),
    cont = document.createTextNode("new text");

    ele.appendChild(cont);
    var padre = document.getElementsByTagName("li")[0].parentNode;
    refer = document.getElementsByTagName("li")[0];
    padre.replaceChild(ele,refer);*/

    var ele = document.createElement("li"),
        contenido = document.createTextNode("texto nuevito");

        ele.appendChild(contenido);

        var padre = document.getElementsByTagName("li")[1].parentNode;
        referencia = document.getElementsByTagName("li")[1]
        padre.removeChild(referencia);