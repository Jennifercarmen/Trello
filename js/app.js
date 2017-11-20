window.addEventListener("load", function () {
	// Declaramos variables a usar
	var contenedor = document.getElementById("contenedor");
	var btn = document.getElementById("button_tarjeta");
	var form_card = document.getElementById("tarjeta");
	var tarjeta = document.getElementById("tinput");
	var form_card = document.getElementById("añade_tarjeta");
	var guardarTarjeta = document.getElementById("btnGuardar");
	//ocultamoe el contenedor de añadir tarjeta
	form_card.style.display = "none";
	btn.addEventListener("click", function (event) {
		// ocultamos boton que contiende evento agregar tarjeta
		btn.style.display = "none";
		// posicionamos el nuevo contenedor de la nueva tarjeta
		form_card.style.display = "inline-block";
		tarjeta.value = "";
		tarjeta.focus;
	});
	// Manejador de evento del boton guardar tarjeta
	guardarTarjeta.addEventListener("click", function (event) {
		// volvemos a ocultar el contenedor de añadir tarjeta
		form_card.style.display = "none";
		var tarjetas = document.createElement("div");
		var tarjeta = document.getElementById("tinput");
		var title = document.createElement("div");
		title.innerHTML = tarjeta.value;
		// añadimos contenedores tarjetas uno delante del otro en este caso los div 
		// estaran posicionados en linea y se posicionara a la izquierda del elemento
		contenedor.insertBefore(tarjetas, contenedor.lastElementChild);
		tarjetas.appendChild(title);
		var addhomework = document.createElement("div");
		addhomework.innerHTML = "Agrega una nueva tarjeta";
		// añadimos clase a los elementos
		tarjetas.classList.add("card");
		addhomework.classList.add("add_card");
		title.classList.add("title");
		tarjetas.appendChild(addhomework);
		var btn_addcard = document.querySelectorAll(".add_card");
		btn.style.display = "inline-block";

	});

});
