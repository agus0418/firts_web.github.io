

 function validateForm() {
    var error_msg = document.getElementById("error_mensaje");
    var a = document.getElementById("validationNombre").value;
    var b = document.getElementById("validationApellido").value;
    var c = document.getElementById("validationEmail").value;
    var d = document.getElementById("validationTel").value;
    var e = document.getElementById("validationConsulta").value;
    var text; 

    error_msg.style.padding = "10px";


    if (a.length < 3) {
        text = "*Por Favor ingrese un nombre valido";
        error_msg.innerHTML = text;
        return false;
    }

    if (b.length < 3) {
        text = "*Por Favor ingrese un Apellido valido";
        error_msg.innerHTML = text;
        return false;
    }

    if (c.indexOf("@") == -1  || c.length < 6) {
        text = "*Por Favor ingrese un Email valido";
        error_msg.innerHTML = text;
        return false;
    }

    if (isNaN(d) || d.length != 10) {
        text = "*Por Favor ingrese un Telefono valido";
        error_msg.innerHTML = text;
        return false;
    }

    if (e.length == 0 & e.length < 25 ) {
        text = "*Minimo 25 caracteres";
        error_msg.innerHTML = text;
        return false;
    }
    alert("Consulta enviada con exito!")
    return true;
  
  
} 
    

