
function isValidEmail(mail) {
    // Utilizamos una expresión regular para validar el formato del correo electrónico
    let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(mail);
}

function isValidName(name){
    let namePattern = /^[a-zA-ZÑñÁáÉéÍíÓóÚúÜü\s]+$/;
    return namePattern.test(name);
}

function isValidSurname(surname){
    let surnamePattern =/^[a-zA-ZÑñÁáÉéÍíÓóÚúÜü\s]+$/;
    return surnamePattern.test(surname);
}


function displayErrorMessage(elementId, message) {
    let errorElement = document.getElementById(elementId);
    errorElement.innerText = message;
}

function resetErrorMessages() {
    let errorElements = document.querySelectorAll(".error-message");
    errorElements.forEach(function (element) {
        element.innerText = "";
    });
}



const validarRegistro = () => {
    document.getElementById("sesionFormulario"), addEventListener("submit", function (event) {

        event.preventDefault(); // evitar que se envio automaticamnete al backend para primero validar
        resetErrorMessages();  // resetrae klos mensajes de error

        // validar 
        let mail = this.document.getElementById("mail").value.trim(); //guardamos los valores que nos da el usuario y le sacamos todos los espacios
        let password = this.document.getElementById("password").value.trim();
        let name= this.document.getElementById("name").value;
        let surname = this.document.getElementById("surname").value;
        let isValid = true;

        if (!isValidEmail(mail)) {
            displayErrorMessage("errorMail", "Por favor ingrese un correo electrónico válido");
            isValid = false;
        }

        if (password.length < 8) {
            displayErrorMessage("errorPassword", "La contraseña debe contener al menos 8 caracteres");
            isValid = false;
        }

        if (!isValidName(name)) {
            displayErrorMessage("errorName", "Ingrese un nombre válido");
            isValid= false;
        }

        if (!isValidSurname(surname)) {
            displayErrorMessage("errorSurname", "Ingrese un apellido válido");
            isValid= false;
        }

        if (isValid) {
            alert("¡Formulario enviado corectamente!");
        }

    }
    );
}

document.addEventListener("DOMContentLoaded", validarRegistro);