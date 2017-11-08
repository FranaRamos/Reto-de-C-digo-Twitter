function add() {
	/*estoy tomando el valor de los comentarios, para ello creo una variable*/
	var comments = document.getElementById("comment").value;

	if (comments == "") {
		alert ("Campo vacío, por favor ingrese un texto.");
	} else {
	/*indicamos que los comentarios una vez escritos se limpien*/
	document.getElementById("comment").value = "";
	/*creamos un contenedor donde guardemos los coments en el div "cont" vacío y todo lo demás*/
	var newComments = document.createElement("div");
	var cont = document.getElementById("cont");
	/*creando la variable que nos defina al texto de la caja comentarios*/
	var paragraph = document.createElement("p");
		paragraph.classList.add("color");
		/*tomamos el nodo de texto y lo sacamos para insertarlo en el contenedor*/
		var nodoText = document.createTextNode(comments);
		paragraph.appendChild(nodoText);

		/*newcomments es el papá de todos los siguientes elementos*/
		newComments.appendChild(paragraph);
		cont.appendChild(newComments);
	}
}

function contar() {
	var max = "140"; 
    var text = document.getElementById("comment").value; 
    var large = text.length; 
     if(large <= max) { 
          document.getElementById("contador").value = max-large; 
     } else { 
          document.getElementById("comment").value = text.substr(0, max);
     } 
} 