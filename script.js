console.log("Bienvenido a PetShop Web")

// AGREGANDO PRODUCTOS 
// Peticion de productos representando una BD
var productos = fetch('./productos.json')
    .then(response => {
        if (!response.ok) {
            throw new Error('Error al cargar el archivo JSON');
        }
        return response.json();
    })
    .then(data => {
        var productos = data;
        console.log(productos);
    })
    .catch(error => {
        console.error('Error:', error);
    });

console.log(productos)

// Navbar
document.addEventListener("DOMContentLoaded", function () {
    var links = document.querySelectorAll("nav a");
    var navbar = document.querySelector("nav");

    links.forEach(function (link) {
        link.addEventListener("click", function (event) {
            var targetId = link.getAttribute("href");
            var targetElement;
            if (targetId.startsWith("#")) {
                event.preventDefault(); // Evitar que se ejecute la acción predeterminada del enlace
                targetElement = document.getElementById(targetId.substring(1));
            } else {
                // Si el href no comienza con '#', abre el enlace normalmente
                return;
            }
            if (targetElement) {
                var navbarHeight = navbar.offsetHeight; // Obtener la altura del navbar
                var offset = targetElement.offsetTop - navbarHeight;
                window.scrollTo({
                    top: offset,
                    behavior: "smooth"
                });
            }
        });
    });
});


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

    resultados.innerHTML = '';

    if (!encontrados) {
        resultado = document.createElement('div');
        resultado.textContent = 'No se encontraron productos con ese nombre';
        resultado.style.color = 'red';
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