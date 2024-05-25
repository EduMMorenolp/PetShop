// Obtener valores de los campos
const nombre = document.getElementById("nombreInput");
const apellido = document.getElementById("apellidoInput");
const email = document.getElementById("emailInput");
const telefono = document.getElementById("telefonoInput");
const form = document.getElementById("form");
const mensajesErrores = document.getElementById("errores");
const consulta = document.getElementById("consultaInput")

//validacion de datos ingresados
form.addEventListener("submit", e => {
    e.preventDefault();
    let flag = false
    let errores = "";
    let validaEmail = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    let validaTelefono = /^[0-9]{10}$/;
    mensajesErrores.innerHTML = ""
    if (nombre.value.length < 2) {
        errores += `El nombre no es valido <br>`;
        flag =true;
    }
    if (apellido.value.length < 2) {
        errores += `El apellido no es valido <br>`;
        flag =true;
    }
    if(!validaEmail.test(email.value)){
        errores += `El Email no es valido <br>`;
        flag = true;
    }
    if (!validaTelefono.test(telefono.value)) {
        errores += `El telefono no es valido <br>`;
        flag =true;
    }
    if (consulta.value.length < 10) {
        errores += `Falta escribir su consulta <br>`;
        flag =true;
    }

    //Dibuja en el DOM abajo el boton de submit los mensajes de 
    //errores o de form enviado correctamente
    if(flag){
        mensajesErrores.innerHTML = errores;
        mensajesErrores.style.color = 'red'
        mensajesErrores.style.fontWeight = 'bold'
    }
    else{
        nombre.value = "";
        apellido.value = "";
        email.value = "";
        telefono.value = "";
        consulta.value = "";
        mensajesErrores.innerHTML = "ENVIADO"
        mensajesErrores.style.color = 'green'
        mensajesErrores.style.fontWeight = 'bold'
        alert("CONSULTA ENVIADA CON EXITO!")
    }
})




