// Procesamiento de formulario con javascript
// Se controla flujo de los formularios y el envío de datos al backend
// o se realiza la salida de datos por consola.

//Capturando campos del formulario
const fullName = document.getElementById("fullName")
const lastName = document.getElementById("lastName")
const occupation = document.getElementById("occupation")
const phone = document.getElementById("phone")
const email = document.getElementById("email")
const message = document.getElementById("message")

// capturando formularios
const form1 = document.getElementById("step1")
const form2 = document.getElementById("step2")

//capturando botones de todo el formulario
const btnForm = document.getElementsByClassName("btn")

//ciclo for para recorrer la cadena capturada de botones y agregar el evento listener para capturar eventos click y llamar a función handleMultiStep
for (let i = 0; i < btnForm.length; i++) {
	btnForm[i].addEventListener("click", handleMultiStep)
}

//Función que se dispara al evento click de los botones
function handleMultiStep(event) {
	event.preventDefault() // evita el comportamiento por defecto del formulario

	// esto chequea que boton se activo y cambia la visualización entre los formularios
	switch (event.target.id) {
		case "btn-next-form1":
			const validForm1 = validarFormStep1()
			if (validForm1) {
				form1.classList.toggle("d-none")
				form2.classList.toggle("d-none")
				document.getElementById("errorStep1").classList.add("d-none")
			}
			break
		case "btn-prev-form2":
			form2.classList.toggle("d-none")
			form1.classList.toggle("d-none")
			break
		case "btn-submit":
			const validForm2 = validarFormStep2()
			if (validForm2) {
				document.getElementById("errorStep2").classList.add("d-none")
				document.getElementById("nameClient").innerHTML = fullName.value + " " + lastName.value
				procesarForm() // Llamado a la función de procesar formulario
			}
			break
		default:
			break
	}
}

// Función que procesa el formulario
function procesarForm() {
	console.log("********** Procesando formulario **********")
	console.log("********** enviando  información **********")
	console.log("Nombre: ", fullName.value)
	console.log("Apellido: ", lastName.value)
	console.log("Ocupación: ", occupation.value)
	console.log("Teléfono:", phone.value)
	console.log("E-mail:", email.value)
	console.log("Mensaje: ", message.value)
	console.log("********** Fin de la transmisión **********")

	form1.reset()
	form2.reset()
	form1.classList.toggle("d-none")
	form2.classList.toggle("d-none")
}

// Función validar formulario step1
function validarFormStep1() {
	let valid = true
	const regName = /^[A-ZÑa-zñáéíóúÁÉÍÓÚüÜ ]{2,30}$/
	if (!regName.test(fullName.value)) {
		fullName.className += " invalid"
		valid = false
	} else {
		fullName.className = "form-control"
	}
	if (!regName.test(lastName.value)) {
		lastName.className += " invalid"
		valid = false
	} else {
		lastName.className = "form-control"
	}
	if (!regName.test(occupation.value)) {
		occupation.className += " invalid"
		valid = false
	} else {
		occupation.className = "form-control"
	}
	const regPhono = /^[0-9+]{5,15}$/
	if (!regPhono.test(phone.value)) {
		phone.className += " invalid"
		valid = false
	} else {
		phone.className = "form-control"
	}
	const regEmail = /^[a-z0-9]+@[a-z]+.[a-z]{2,3}$/
	if (!regEmail.test(email.value)) {
		email.className += " invalid"
		valid = false
	} else {
		email.className = "form-control"
	}
	if (!valid) {
		document.getElementById("errorStep1").classList.remove("d-none")
	}
	return valid
}

// Función validar formulario step2
function validarFormStep2() {
	let valid = true
	if (message.value === "") {
		message.className += " invalid"
		valid = false
	} else {
		message.className = "form-control"
	}
	if (!valid) {
		document.getElementById("errorStep2").classList.remove("d-none")
	}
	return valid
}
