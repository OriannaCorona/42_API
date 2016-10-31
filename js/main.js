//Para reemplazar el input inicial por el input con el boton guardar y el tache
function desplegarBtnGuardar() {
	var caja = document.createElement("DIV");
	var inputNuevaLista = document.createElement("input");
	inputNuevaLista.className = "inputNuevaLista";
	var btnGuardar = document.createElement("button");
	btnGuardar.className = "btnGuardar";
	var textoBoton = document.createTextNode("Guardar");
	btnGuardar.appendChild(textoBoton);
  	var nombreLista = document.getElementById("añadirLista");
  	caja.appendChild(inputNuevaLista);
  	caja.appendChild(btnGuardar);
  	var contenedor = document.getElementById("contenedor");
  	contenedor.replaceChild(caja, nombreLista);	  	
//Para guardar una lista nueva
	var listaHecha = document.createElement("DIV");
	listaHecha.setAttribute("id", "listaGuardada");
	var linkTarjeta = document.createElement("a");
	btnGuardar.onclick = function crearListaNueva(e) {
		var viejoDiv = e.target.parentElement;
		var tituloLista = document.createTextNode(inputNuevaLista.value);
		var h3Lista = document.createElement("h3");
		h3Lista.setAttribute("class", "h3Tarjeta");
		h3Lista.appendChild(tituloLista); 
		listaHecha.appendChild(h3Lista);
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
  		cajaTarjeta.appendChild(inputNuevaTarjeta);
  		cajaTarjeta.appendChild(btnGuardarTarjeta);
  		e.target.parentElement.replaceChild(cajaTarjeta, linkTarjeta);
//Para guardar una tajeta nueva
		btnGuardarTarjeta.onclick = function guardarTarjeta(e) {
			var tarjetaHecha = document.createElement("DIV");
			tarjetaHecha.setAttribute("draggable", "true");//para poder desplazar la tarjeta hecha
			var tituloTarjeta = document.createTextNode(inputNuevaTarjeta.value);
			var pTarjeta = document.createElement("p");
			pTarjeta.appendChild(tituloTarjeta);                                                                              
		  	tarjetaHecha.setAttribute("class", "tarjetaHecha");
		  	tarjetaHecha.setAttribute("id", "tarjetaGuardada");//le dí un id para poder llamarlo por su id al momento de quererlo mover
		  	tarjetaHecha.appendChild(pTarjeta);
		  	e.target.parentElement.parentElement.replaceChild(tarjetaHecha, e.target.parentElement);
		  	listaHecha.appendChild(linkTarjeta); 
		  	//pruebas de drag and drop
			tarjetaHecha.addEventListener("dragstart", iniciarArrastre);//para iniciar el arrastre
			function iniciarArrastre(e) {
				listaHecha.style.background = "#fcedc4";//cambiar el color de la lista a amarillo cuando se toma una tarjeta
				e.dataTransfer.setData("text",e.target.id);
				listaHecha.addEventListener("dragend", terminarArrastre);
				function terminarArrastre(e){
					listaHecha.style.background = "#d9baa6";//cambiar el color de la lista a rosa cuando se suelta la tarjeta en otra lista	
				}	
			}
			listaHecha.addEventListener("drop", soltarElemento);//cuando se suelta un elemento dentro de un receptor
			function soltarElemento(e) {
				e.stopPropagation();
    			e.preventDefault();
    			data = e.dataTransfer.getData("text");
    			listaHecha.appendChild(document.getElementById(data));
			}
			listaHecha.addEventListener("dragover", aterrizarElemento);//cuando se arrastra un elemento dentro del receptor
			function aterrizarElemento(e) {
				e.preventDefault();
				listaHecha.style.background = "#99b5b9";//cambia el color de fondo a azul cuando la tarjeta pasa por encima
			}
			    	  		
		}
			
	}
	

	/**/
}

