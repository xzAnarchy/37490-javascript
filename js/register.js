// Variables
let boton = document.querySelector("#boton-register");
let usuario = document.getElementById("usuario");
let clave = document.getElementById("clave");
let afterRegister = document.querySelector("#login-register");


//Mensaje de error
let mjsError = document.createElement("div");
mjsError.classList.add("error-form-register");

//Mensajes de success
let mjssucess = document.createElement("div");
mjssucess.classList.add("success-form-register");

boton.onclick =  (e) =>{
    e.preventDefault();
    if(usuario.value.length == 0 || clave.value.length == 0) {
        mjsError.innerHTML = `<p>No puedes dejar campos vacios</p>`;
        document.querySelector("#formulario").append(mjsError);
    }else{
        e.preventDefault();
        document.getElementById("formulario").submit();
        localStorage.setItem("usuario", usuario.value);
        localStorage.setItem("clave", clave.value);
        mjssucess.innerHTML = `<p>Usuario registrado correctamente</p>`;
        document.querySelector("#formulario").append(mjssucess);
    }
}

localStorage.getItem("usuario") != null ? afterRegister.innerHTML = `<p class="usuario-nav">Bienvenido ${localStorage.getItem("usuario")}</p>` : afterRegister.innerHTML = `<div id="login-register">
<ul>
    <li><a href="#">Login</a></li>
    <li><a href="pages/register.html">Register</a></li>
</ul>
</div>`;