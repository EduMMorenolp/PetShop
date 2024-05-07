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

/* VISUALISACION PREVIA DEL PRODUCTOS */
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


var carritoProductos = [];

if (carritoProductos.length > 0) {
    localStorage.setItem("carritoProductos", JSON.stringify(carritoProductos));
} else {
    // Obtener los elementos del almacenamiento local
    var localStorageItems = JSON.parse(localStorage.getItem("carritoProductos"));
    // Verificar si hay elementos en el almacenamiento local
    if (localStorageItems && localStorageItems.length > 0) {
        // Establecer el contador del carrito en la longitud de los elementos del almacenamiento local
        var contadorSpan = document.querySelector(".contador");
        contadorSpan.textContent = localStorageItems.length.toString();
    } else {
        // Si no hay elementos en el almacenamiento local, establecer el contador del carrito en 0
        var contadorSpan = document.querySelector(".contador");
        contadorSpan.textContent = "0";
    }
}

// Almacenar una referencia a la función de manejo de clic
function agregarAlCarrito(idProducto) {
    console.log("Boton presionado");
    var contador = document.querySelector(".contador");
    var valorActual = parseInt(contador.innerText);
    valorActual++;
    contador.innerText = valorActual;
    // Recuperar el array de productos del localStorage
    var carritoProductos = JSON.parse(localStorage.getItem("carritoProductos")) || [];
    carritoProductos.push(idProducto);
    localStorage.setItem("carritoProductos", JSON.stringify(carritoProductos));
    console.log("Producto agregado al carrito. ID:", idProducto);
}

// Función para eliminar los event listeners anteriores
function limpiarEventListeners() {
    var botones = document.querySelectorAll(".addCarrito");
    botones.forEach(function (boton) {
        boton.removeEventListener("click", agregarAlCarrito);
    });
}

// Agregar event listeners inicialmente
limpiarEventListeners();
var botones = document.querySelectorAll(".addCarrito");
botones.forEach(function (boton) {
    boton.addEventListener("click", function () {
        // Obtener el ID del producto del atributo data-id
        var idProducto = boton.getAttribute("data-id");
        agregarAlCarrito(idProducto);
    });
});

// Modificar la función abrir para limpiar los event listeners antes de agregar nuevos
function abrir(event) {
    const productoId = event.currentTarget.getAttribute("data-id");
    cargarProductos()
        .then(productos => {
            const producto = productos.find(item => item.id === parseInt(productoId));
            const htmlContent = `
                <div class="ventana">
                <div class="imagen">
                    <img src="./img/productos/${producto.imagen}.webp" alt="Imagen del producto">
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
            fondoPrevia.previousElementSibling.style.display = "block"

            // Limpiar event listeners anteriores antes de agregar nuevos
            limpiarEventListeners();
            // var botones = document.querySelectorAll(".addCarrito");
            // botones.forEach(function (boton) {
            //     boton.addEventListener("click", agregarAlCarrito);
            // });
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
    const fondoPrevio = document.getElementById('fondo-vista-previa');
    if (!vistaPrevia.contains(event.target)) {
        vistaPrevia.style.display = "none";
        fondoPrevio.style.display = 'none';
    }
}

// Agregar evento de clic al documento para cerrar la ventana emergente
document.addEventListener("click", cerrar);

// Movimiento de tarjetasOfertas
document.addEventListener('DOMContentLoaded', function () {
    const btnIzquierda = document.getElementById('btn-izq');
    const btnDerecha = document.getElementById('btn-der');
    const tarjetas = document.querySelectorAll('.tarjetaOfertas');

    btnDerecha.addEventListener('click', () => {
        const contenedor = document.querySelector('#productosOferta > div');
        const primerElemento = contenedor.firstElementChild;
        contenedor.appendChild(primerElemento);
    })

    btnIzquierda.addEventListener("click", () => {
        const contenedor = document.querySelector('#productosOferta > div');
        const ultimoElemento = contenedor.lastElementChild;
        contenedor.insertBefore(ultimoElemento, contenedor.firstElementChild);
    })
})



































































































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