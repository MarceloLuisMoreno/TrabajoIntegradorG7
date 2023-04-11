// Procesamiento de formulario con javascript
// Se controla flujo de los formularios y el envío de datos al backend
// o se realiza la salida de datos por consola.

//Capturando campos del formulario
console.log("Comenzamos a correr el Js");
const fullName = document.getElementById("fullName");
const lastName = document.getElementById("lastName");
const occupation = document.getElementById("occupation");
const phone = document.getElementById("phone");
const email = document.getElementById("email");
const message = document.getElementById("message");

// capturando formularios
const form1 = document.getElementById("step1");  
const form2 = document.getElementById("step2");
console.log(form1, form2);

//capturando botones de todo el formulario
const btnForm = document.getElementsByClassName("btn");
console.log(btnForm);  // control para saber si se capturaron los botones

//ciclo for para recorrer la cadena capturada de botones y agregar el evento listener para capturar eventos click y llamar a función handleMultiStep
for (let i= 0; i < btnForm.length; i++){
    btnForm[i].addEventListener("click",handleMultiStep);
}

//Función que se dispara al evento click de los botones
function handleMultiStep(event){
    event.preventDefault(); // evita el comportamiento por defecto del formulario

    // esto chequea que boton se activo y cambia la visualización entre los formularios
   switch (event.target.id) {
        case "btn-next-form1":
            form1.classList.toggle("d-none");
            form2.classList.toggle("d-none");
            break;
        case "btn-prev-form2":
            form2.classList.toggle("d-none");
            form1.classList.toggle("d-none");
            break;
        case "btn-submit":
           // console.log("Para procesar llamando a la función");
            procesarForm(); // Llamado a la función de procesar formulario
            break;
        default:
            break;
   }

}


// Función que procesa el formulario
function procesarForm(){
    console.log("********** Procesando formulario **********");
    console.log("********** enviando  información **********");
    console.log("Nombre: ",fullName.value);
    console.log("Apellido: ",lastName.value);
    console.log("Ocupación: ",occupation.value);
    console.log("Teléfono:", phone.value);
    console.log("E-mail:", email.value);
    console.log("Mensaje: ", message.value);
    console.log("********** Fin de la transmisión **********");

    form1.reset();
    form2.reset();
    form1.classList.toggle("d-none");
    form2.classList.toggle("d-none");
}

