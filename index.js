const nombre = document.getElementById("nombre")
const resultado = document.getElementById("resultado")
const formEj1 = document.getElementById("EJ1")

function formatearNombre(nombre){
    return resultado = nombre.map(letra => {if(letra.index == 0) letra.toUpperCase()
        else letra.toLowerCase()
    })
}

formEj1.addEventListener('submit', e => {
    e.preventDefault()
    resultado.textContent = formatearNombre(nombre)
})