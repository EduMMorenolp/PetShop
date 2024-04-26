console.log("Bienvenido a PetShop Web")

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

    resultados.innerHTML = ''; // Limpiar resultados anteriores

    if (!encontrados) {
        resultado = document.createElement('div');
        resultado.textContent = 'No se encontraron productos con ese nombre';
        resultado.style.color = 'red';
        resultados.appendChild(resultado);
    }
});

/* VISUALISACION PREVIA DEL PRODUCTO */
// Función para cargar los productos desde el JSON utilizando fetch
function cargarProductos() {
    return fetch('productos.json')
        .then(response => {
            if (!response.ok) {
                throw new Error('Error al cargar los productos');
            }
            return response.json();
        });
}

// abrir la ventana emergente con los detalles del producto
function abrir(event) {
    const productoId = event.currentTarget.getAttribute("data-id");
    cargarProductos()
        .then(productos => {
            const producto = productos.find(item => item.id === parseInt(productoId));
            const htmlContent = `
                <div class="ventana">
                <div class="imagen">
                    <img src="/img/productos/${producto.imagen}.webp" alt="Imagen del producto">
                </div>
                <div class="detalles">
                    <h2>${producto.nombre}</h2>
                    <p>Categoria: ${producto.detalles.categoria}</p>
                    <p>Peso: ${producto.detalles.peso} Kg</p>
                    <p>Precio:$${producto.detalles.precio}</p>
                    
                    <p>${producto.detalles.descripcion}</p>
                </div>
                </div>
            `;
            const fondoPrevia = document.getElementById("Vista-previa");
            const vistaPrevia = document.getElementById("Vista-previa");
            vistaPrevia.innerHTML = htmlContent;
            vistaPrevia.style.display = "block";
            fondoPrevia.previousElementSibling.style.display="block"
        })
        .catch(error => console.error(error));
}

// Ventana por cada producto
const productosElements = document.getElementsByClassName("img_producto");
for (let i = 0; i < productosElements.length; i++) {
    productosElements[i].addEventListener("click", abrir);
}

// Cerrar la ventana emergente
function cerrar(event) {
    const vistaPrevia = document.getElementById("Vista-previa");
    const fondoPrevio =document.getElementById('fondo-vista-previa');
    if (!vistaPrevia.contains(event.target)) {
        vistaPrevia.style.display = "none";
        fondoPrevio.style.display = 'none';
    }
}

// Agregar evento de clic al documento para cerrar la ventana emergente
document.addEventListener("click", cerrar);




































































































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