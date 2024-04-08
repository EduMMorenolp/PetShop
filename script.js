console.log("Bienvenido a PetShop Web")

/** SCRIPT TEMPORAL DE AGREGADO */
var botones = document.querySelectorAll(".addCarrito");
botones.forEach(function (boton) {
    boton.addEventListener("click", function () {
        console.log("Boton presionado");
        var contador = document.querySelector(".contador");
        var valorActual = parseInt(contador.innerText);
        valorActual++;
        contador.innerText = valorActual;
    })
})

/** SCRIPT TEMPORAL DE BORRADO */
// Obtener todos los botones de eliminar
var botonesEliminar = document.querySelectorAll('.eliminar');
botonesEliminar.forEach(function (boton) {
    boton.addEventListener('click', function () {
        console.log('Botón eliminar presionado');
        var producto = this.closest('.producto');
        producto.remove();
    });
});

// BUSCADOR INICIO
document.getElementById('botonBuscar').addEventListener('click', function () {
    var resultados = document.getElementById('resultados');
    var encontrados = false;

    resultados.innerHTML = ''; // Limpiar resultados anteriores

    if (!encontrados) {
        resultado = document.createElement('div');
        resultado.textContent = 'No se encontraron productos con ese nombre';
        resultados.appendChild(resultado);
    }
});




























































































































// MisterEgg
var secuenciaDeseada = ['ArrowUp', 'ArrowRight', 'ArrowRight', 'ArrowUp', 'ArrowLeft'];
var teclasPresionadas = [];
console.log("Para ver los integrantes Truquito de PC : '↑', '→', '→', '↑', '←' ")
function verificarSecuencia() {
    if (teclasPresionadas.length === secuenciaDeseada.length) {
        if (teclasPresionadas.every((tecla, indice) => tecla === secuenciaDeseada[indice])) {
            window.location.href = 'integrantes.html';
        }
        teclasPresionadas = [];
    }
}
document.addEventListener('keydown', function (event) {
    teclasPresionadas.push(event.key);
    verificarSecuencia();
});