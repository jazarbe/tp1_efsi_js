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
    if(password.length < 8){
        return false;
    }
    if(!/\d/.test(password)){
        return false;
    }
    return true;
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

// #region Ejercicio 5
const formEj5 = document.getElementById("EJ5");
const cadena = document.getElementById("cadena");
const resultado5 = document.getElementById("resultado5");

function sumarNumeros(cadena){
    const numeros = cadena.value.split(" ").map(num => parseFloat(num.trim()));
    const total = numeros.map(num => suma += num, suma = 0).pop();
    return total;
}

formEj5.addEventListener('submit', e => {
    e.preventDefault();

    if (/\d/.test(cadena.value)) {
        resultado5.textContent = `La suma es: ${sumarNumeros(cadena)}`;
    } else {
        resultado5.textContent = "Por favor, ingresa números válidos.";
    }
});
// #endregion

// #region Ejercicio 6
const formEj6 = document.getElementById("EJ6");
const cadena2 = document.getElementById("cadena2");
const resultado6 = document.getElementById("resultado6");

function encontrarMayorEnCadena(cadena){
    const numeros = cadena.value.split(" ").map(num => parseFloat(num.trim()));
    let mayor = numeros[0];
    for(let i = 1; i < numeros.length; i++){
        if(numeros[i] > mayor){
            mayor = numeros[i];
        }
    }
    return mayor;
}

formEj6.addEventListener('submit', e => {
    e.preventDefault();
    if (/\d/.test(cadena2.value) && !/[A-Za-z]/.test(cadena2.value)) {
        resultado6.textContent = `El número mayor es: ${encontrarMayorEnCadena(cadena2)}`;
    } else {
        resultado6.textContent = "Por favor, ingresa solamente números válidos.";
    }
});
// #endregion

// #region Ejercicio 7
const formEj7 = document.getElementById("EJ7");
const cadena3 = document.getElementById("cadena3");
const resultado7 = document.getElementById("resultado7");

function obtenerPares(cadena){
    const numeros = cadena.value.split(" ").map(num => parseFloat(num.trim()));
    return numeros.filter(num => num % 2 === 0);
}

formEj7.addEventListener('submit', e => {
    e.preventDefault();
    if (/\d/.test(cadena3.value) && !/[A-Za-z]/.test(cadena3.value)) {
     const pares = obtenerPares(cadena3);
     if (pares.length === 0) {
        resultado7.textContent = "No se encontraron números pares.";
    }
        else {
            resultado7.textContent = `Los números pares son: ${pares.join(", ")}`;
        }
    } else {
        resultado7.textContent = "Por favor, ingresa solamente números válidos.";
    }
});
// #endregion

// #region Ejercicio 8
const formEj8 = document.getElementById("EJ8");
const resultado8 = document.getElementById("resultado8");

const usuario = {
    nombre: "Ana",
    edad: 20,
    activo: false
};

function descripcionUsuario(user){
    return `${user.nombre} tiene ${user.edad} años`;
}

formEj8.addEventListener('submit', e => {
    e.preventDefault();
    resultado8.textContent = descripcionUsuario(usuario);
});
// #endregion

// #region Ejercicio 9
const formEj9 = document.getElementById("EJ9");
const resultado9 = document.getElementById("resultado9");

function activarUsuario(user){
    user.activo = true;
    return user;
}

formEj9.addEventListener('submit', e => {
    e.preventDefault();
    activarUsuario(usuario);
    const estado = usuario.activo ? "activo" : "inactivo";
    resultado9.textContent = `El usuario ${usuario.nombre} ahora está ${estado}.`;
});
// #endregion

// #region Ejercicio 10
const formEj10 = document.getElementById("EJ10");
const resultado10 = document.getElementById("resultado10");

const productos = [
    { nombre: "Mouse", precio: 10 },
    { nombre: "Teclado", precio: 25 },
    { nombre: "Monitor", precio: 200 }
];

function calcularPrecioTotal(productos){
    return productos.reduce((total, producto) => total + producto.precio, 0);
}

formEj10.addEventListener('submit', e => {
    e.preventDefault();
    const total = calcularPrecioTotal(productos);
    resultado10.textContent = `El precio total de los productos es: $${total}`;
});
// #endregion

// #region Ejercicio 11
const formEj11 = document.getElementById("EJ11");
const resultado11 = document.getElementById("resultado11");

const usuarios = [
    { nombre: "Ana", edad: 17 },
    { nombre: "Juan", edad: 25 },
    { nombre: "Pedro", edad: 30 }
]

formEj11.addEventListener('submit', e => {
    e.preventDefault();
    const nombres = usuarios.map(user => user.nombre).join(", ");
    resultado11.textContent = `Los nombres de los usuarios son: ${nombres}`;
});
// #endregion

// #region Ejercicio 12
const formEj12 = document.getElementById("EJ12");
const resultado12 = document.getElementById("resultado12");

formEj12.addEventListener('submit', e => {
    e.preventDefault();
    const mayores = usuarios.filter(user => user.edad >= 18).map(user => user.nombre).join(", ");
    resultado12.textContent = `Los usuarios mayores de edad son: ${mayores}`;
});
// #endregion

// #region Ejercicio 13
const formEj13 = document.getElementById("EJ13");
const resultado13 = document.getElementById("resultado13");

formEj13.addEventListener('submit', e => {
    e.preventDefault();
    const sumaEdades = usuarios.reduce((total, user) => total + user.edad, 0);
    resultado13.textContent = `La suma de las edades de los usuarios es: ${sumaEdades}`;
});
// #endregion

// #region Ejercicio 14
const formEj14 = document.getElementById("EJ14");
const resultado14 = document.getElementById("resultado14");

const producto = {
    nombre: "Notebook",
    precio: 1000
};

formEj14.addEventListener('submit', e => {
    e.preventDefault();
    const { nombre, precio } = producto;
    resultado14.textContent = `El producto es: ${nombre} y su precio es: $${precio}`;
});
// #endregion

// #region Ejercicio 15
const formEj15 = document.getElementById("EJ15");
const resultado15 = document.getElementById("resultado15");

formEj15.addEventListener('submit', e => {
    e.preventDefault();
    const productoCopiado = {
        ...producto,
        stock: 5
    };
    resultado15.textContent = `Producto copiado: Nombre: ${productoCopiado.nombre}, Precio: $${productoCopiado.precio}, Stock: ${productoCopiado.stock}`;
});
// #endregion

// #region Ejercicio 16
// #endregion

// #region Ejercicio 17
// #endregion

// #region Ejercicio 18
// #endregion