
function isValidEmail(mail) {
    // Utilizamos una expresión regular para validar el formato del correo electrónico
    let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(mail);
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


const validarFormulario = () => {
    document.getElementById("sesionFormulario"), addEventListener("submit", function (event) {

        event.preventDefault(); // evitar que se envio automaticamnete al backend para primero validar
        resetErrorMessages();  // resetrae klos mensajes de error

        // validar 
        let mail = this.document.getElementById("mail").value.trim(); //guardamos los valores que nos da el usuario y le sacamos todos los espacios
        let password = this.document.getElementById("password").value.trim();
        let isValid = true;

        if (!isValidEmail(mail)) {
            displayErrorMessage("errorMail", "Por favor ingrese un correo electrónico válido");
            isValid = false;
        }

        if (password.length < 8) {
            displayErrorMessage("errorPassword", "La contraseña debe contener al menos 8 caracteres");
            isValid = false;
        }


        if (isValid) {
            alert("¡Formulario enviado corectamente!");
        }
    }
    );
}


document.addEventListener("DOMContentLoaded", validarFormulario);



