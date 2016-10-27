//Para reemplazar el input inicial por el input con el boton guardar y el tache
function desplegarBtnGuardar() {
	var caja = document.createElement("DIV");
	var inputNuevaLista = document.createElement("input");
	inputNuevaLista.className = "inputNuevaLista";
	var btnGuardar = document.createElement("button");
	btnGuardar.className = "btnGuardar";
	var textoBoton = document.createTextNode("Guardar");
	btnGuardar.appendChild(textoBoton);
	var tache = document.createElement("SPAN");
  	tache.className = "glyphicon glyphicon-remove";
  	var nombreLista = document.getElementById("añadirLista");
  	caja.appendChild(inputNuevaLista);
  	caja.appendChild(btnGuardar);
  	caja.appendChild(tache);
  	var contenedor = document.getElementById("contenedor");
  	contenedor.replaceChild(caja, nombreLista);	  	
//Para guardar una lista nueva
	var listaHecha = document.createElement("DIV");
	var linkTarjeta = document.createElement("a");
	btnGuardar.onclick = function crearListaNueva(e) {
		var viejoDiv = e.target.parentElement;
		var tituloLista = document.createTextNode(inputNuevaLista.value);
		var h3Tarjeta = document.createElement("h3");
		h3Tarjeta.setAttribute("class", "h3Tarjeta");
		h3Tarjeta.appendChild(tituloLista); 
		listaHecha.appendChild(h3Tarjeta);
	  	listaHecha.setAttribute("class", "listaHecha");
	  	viejoDiv.parentElement.replaceChild(listaHecha, viejoDiv);
	  	linkTarjeta.appendChild(document.createTextNode("Añadir una tarjeta...")); 
	  	linkTarjeta.className = "inputLista";
		listaHecha.appendChild(linkTarjeta);
	  	document.getElementById("contenedorDos").appendChild(listaHecha);
	  	contenedor.appendChild(nombreLista);  	 	
	}
//Para crear una tajeta nueva
	linkTarjeta.onclick = function crearTarjeta(e) {
		cajaTarjeta = document.createElement("DIV");
		var inputNuevaTarjeta = document.createElement("input");
		var btnGuardarTarjeta = document.createElement("button");
		inputNuevaTarjeta.className = "inputNuevaTarjeta";
		btnGuardarTarjeta.className = "btnGuardarTarjeta";
		textoBoton2 = document.createTextNode("Guardar tarjeta");
		btnGuardarTarjeta.appendChild(textoBoton2);
		var tache = document.createElement("SPAN");
  		tache.className = "glyphicon glyphicon-remove";
  		cajaTarjeta.appendChild(inputNuevaTarjeta);
  		cajaTarjeta.appendChild(btnGuardarTarjeta);
  		cajaTarjeta.appendChild(tache);
  		e.target.parentElement.replaceChild(cajaTarjeta, linkTarjeta);
//Para guardar una tajeta nueva
		btnGuardarTarjeta.onclick = function guardarTarjeta(e) {
			var tarjetaHecha = document.createElement("DIV");
			var tituloTarjeta = document.createTextNode(inputNuevaTarjeta.value);
			var pTarjeta = document.createElement("p");
			pTarjeta.appendChild(tituloTarjeta);                                                                              
		  	tarjetaHecha.setAttribute("class", "tarjetaHecha");
		  	tarjetaHecha.appendChild(pTarjeta);
		  	e.target.parentElement.parentElement.replaceChild(tarjetaHecha, e.target.parentElement);
		  	tarjetaHecha.appendChild(linkTarjeta); 	
		}	
	}

}