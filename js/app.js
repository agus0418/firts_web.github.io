/*

const form = document.getElementById("formBox");
const nombre = document.getElementById("validationNombre");
const apellido = document.getElementById("validationApellido");
const email = document.getElementById("validationEmail");
const tel = document.getElementById("validationTel");
const consulta = document.getElementById("validationConsulta");



form.addEventListener("submit", e => {
    e.preventDefault();
    

    validateInputs();
});

    const setError = (element, message) => {
        const inputControl = element.parentElement;
        const errorDisplay = inputControl.querySelector(".error");

        errorDisplay.innerText = message;
        inputControl.classList.add("error");
        inputControl.classList.remove("success");
    }

    const setSuccess = element => {
        const inputControl = element.parentElement;
        const errorDisplay = inputControl.querySelector(".error");

        errorDisplay.innerText = "";
        inputControl.classList.add("success");
        inputControl.classList.remove("error");
    };

    const isValidEmail = email => {
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    }

    const validateInputs = () => {
        const nombreValue = nombre.value.trim();
        const apellidoValue = apellido.value.trim();
        const emailValue = email.value.trim();
        const telValue = tel.value.trim();
        const consultaValue = consulta.value.trim();

        if (nombreValue === "") {
            setError(nombre,  "Por favor, completa tu nombre");
            return false;
        } else {
            setSuccess(nombre);
        }

        if (apellidoValue === "") {
            setError(apellido, "Por favor, completa tu apellido");
            return false;
        } else {
            setSuccess(apellido);
        }

        if (emailValue === "") {
            setError(email, "Por favor, completa tu correo");
            return false;
        } else if (!isValidEmail(emailValue)) {
            setError(email, "Por favor, ingresa un correo valido");
            return false;
        } else {
            setSuccess(email);
        }

        if (telValue === "") {
            setError(tel,"Por favor, completa tu telefono");
            return false;
        } 
        else {
            setSuccess(tel);
        }

        if (consultaValue === "") {
            setError( consulta, "Por favor, completa tu consulta");
            return false;
        } else {
            setSuccess(consulta);
        }

    };  
    */

 function validateForm() {
    var error_msg = document.getElementById("error_mensaje");
    var a = document.getElementById("validationNombre").value;
    var b = document.getElementById("validationApellido").value;
    var c = document.getElementById("validationEmail").value;
    var d = document.getElementById("validationTel").value;
    var e = document.getElementById("validationConsulta").value;
    if (a == "" || b == "" || c == "" || d == "" || e == "") {
        error_msg.innerHTML = "Todos los campos son obligatorios";
        return false;

        error_msg.style.padding = "10px;"
    }
  
} 
    

