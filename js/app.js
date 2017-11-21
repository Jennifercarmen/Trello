window.addEventListener("load", function () {
	// Declaramos variables a usar
	var contenedor = document.getElementById("contenedor");
	var btn_lista = document.getElementById("button_lista");
	var tarjeta = document.getElementById("tinput");
	var contentcard = document.getElementById("añade_tarjeta");
	var guardarTarjeta = document.getElementById("btnGuardar");
	//ocultamoe el contenedor de añadir tarjeta
	contentcard.style.display = "none";

	btn_lista.addEventListener("click", function (event) {
		// ocultamos boton que contiene evento agregar tarjeta
		btn_lista.style.display = "none";
		//Mostramos contentcard como un contenedor de bloque de nivel en línea.
		contentcard.style.display = "inline-block";
		tarjeta.value = "";
		tarjeta.focus;
	});

	// Manejador de evento del boton guardar tarjeta
	guardarTarjeta.addEventListener("click", function (event) {
		// volvemos a ocultar el contenedor de añadir tarjeta
		contentcard.style.display = "none";
		var tarjetas = document.createElement("div");
		var title = document.createElement("div");
		title.innerHTML = tarjeta.value;
		// añadimos contenedores tarjetas uno delante del otro en este caso los div 
		// estaran posicionados en linea y se posicionara a la izquierda del elemento
		contenedor.insertBefore(tarjetas, contenedor.lastElementChild);
		tarjetas.appendChild(title);
		var addcard = document.createElement("div");
		addcard.innerHTML = "Agrega una nueva tarjeta";
		// añadimos clase a los elementos
		tarjetas.classList.add("card");
		addcard.classList.add("add_card");
		title.classList.add("title");
		tarjetas.appendChild(addcard);
		var btn_addcard = document.querySelectorAll(".add_card");
		btn_lista.style.display = "inline-block";
		//Manejador de evento click para el div añadir tarjeta
		addcard.addEventListener("click", function (event) {
			addcard.style.display = "none";
			var form = document.createElement("form");
			tarjetas.appendChild(form);
			var textarea = document.createElement("textarea");
			textarea.classList.add("textarea");
			form.appendChild(textarea);
			var btnaddcard = document.createElement("button");
			btnaddcard.classList.add("btnAnadir");
			btnaddcard.innerHTML = "Añadir";
			form.appendChild(btnaddcard);
		
			btnaddcard.addEventListener("click", function (event) {
				event.preventDefault();
				addcard.style.display = null;
				var textCard = document.createElement("div");
				textCard.classList.add("divcard");
				textCard.innerHTML = textarea.value;
				tarjetas.insertBefore(textCard, addcard);
				textarea.value = "";
				form.style.display = "none";
			});
		});
	});
});
