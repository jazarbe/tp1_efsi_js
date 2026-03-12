// #region Ejercicio 1
const nombre = document.getElementById("nombre");
const resultado = document.getElementById("resultado");
const formEj1 = document.getElementById("EJ1");

function formatearNombre(nombre){
    nombre.value = nombre.value[0].toUpperCase() + nombre.value.slice(1).toLowerCase();
    return nombre.value;
}

formEj1.addEventListener('submit', e => {
    e.preventDefault()
    resultado.textContent = formatearNombre(nombre)
})
// #endregion

// #region Ejercicio 2
const formEj2 = document.getElementById("EJ2");
const texto = document.getElementById("texto");
const resultado2 = document.getElementById("resultado2");

function contarLetras(texto){
    let contador = 0;
    for(let i = 0; i < texto.value.length; i++){
        if(texto.value[i] !== " "){
            contador++;
        }
    }
    return contador;
}

formEj2.addEventListener('submit', e => {
    e.preventDefault()
    resultado2.textContent = `La cantidad de letras en el texto es: ${contarLetras(texto)}`
})
// #endregion

// #region Ejercicio 3
const formEj3 = document.getElementById("EJ3");
const num1 = document.getElementById("numeros1");
const num2 = document.getElementById("numeros2");
const num3 = document.getElementById("numeros3");
const resultado3 = document.getElementById("resultado3");

function encontrarMayor(num1, num2, num3){
    let mayor = num1;
    if(num2 > mayor){
        mayor = num2;
    }
    if(num3 > mayor){
        mayor = num3;
    }
    return mayor;
}

formEj3.addEventListener('submit', e => {
    e.preventDefault()
    resultado3.textContent = `El número mayor es: ${encontrarMayor(parseInt(num1.value), parseInt(num2.value), parseInt(num3.value))}`
})
// #endregion

// #region Ejercicio 4
const formEj4 = document.getElementById("EJ4");
const password = document.getElementById("password");
const resultado4 = document.getElementById("resultado4");

function validarPassword(password){
    let valid = false;
    if(password.length < 8){
        return valid;
    }
    else if(!/^\d+$/.test(password)){
        return valid;
    }
    else return valid = true;
}

formEj4.addEventListener('submit', e => {
    e.preventDefault()
    if(validarPassword(password.value)){
        resultado4.textContent = "La contraseña es válida.";
    } else {
        resultado4.textContent = "La contraseña no es válida.";
    }
})
// #endregion

// #region PASSWORD
document.addEventListener("DOMContentLoaded", function () {
    const togglePassword = document.getElementById('togglePassword');
    const password1 = document.getElementById('password');
    if(togglePassword){
        togglePassword.addEventListener('click', function () {
        const type = password1.getAttribute('type') === 'password' ? 'text' : 'password';
        password1.setAttribute('type', type);

        // Cambiar el ícono (ojito abierto/cerrado)
        this.classList.toggle('fa-eye');
        this.classList.toggle('fa-eye-slash');
        });

        const password2 = document.getElementById('pass-confirm');
        togglePassword.addEventListener('click', function () {
        const type = password2.getAttribute('type') === 'password' ? 'text' : 'password';
        password2.setAttribute('type', type);

        // Cambiar el ícono (ojito abierto/cerrado)
        this.classList.toggle('fa-eye');
        this.classList.toggle('fa-eye-slash');
        });
    }
});
// #endregion