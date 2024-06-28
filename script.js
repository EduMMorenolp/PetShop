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

//Traer productos del backend y crear grid en frontend
const url ='http://localhost:3000/'
let productos = [];



// Fetch para obtener las categorías y los productos
fetch(`${url}categorias`)
    .then(response => response.json())
    .then(categorias => {
        llenarCategorias(categorias);
        return fetch(`${url}productos`);
    })
    .then(response => response.json())
    .then(data => {
        productos = data;
        mostrarDatos(productos);
    })
    .catch(error => console.log(error));

// Función para llenar el select de categorías
const llenarCategorias = (categorias) => {
    const categoryFilter = document.getElementById('categoryFilter');
    categorias.forEach(categoria => {
        const option = document.createElement('option');
        option.value = categoria.id;
        option.textContent = categoria.nombre;
        categoryFilter.appendChild(option);
    });
};

// Event Listener para el filtro de categorías
document.getElementById('categoryFilter').addEventListener('change', (event) => {
    const selectedCategory = event.target.value;
    const filteredProducts = selectedCategory === 'all'
        ? productos
        : productos.filter(producto => producto.categoria_id == selectedCategory); // Compara con categoria_id
    mostrarDatos(filteredProducts);
});

// Función para mostrar los datos de los productos
const mostrarDatos = (data) => {
    let html = '';
    data.forEach(producto => {
        html += `
        <div class="producto " >
            <div class="img_producto previsual" data-id="${producto.id}" >
                <div class="oferta">
                    <p>${producto.descripcion}</p>
                </div>
                <div>
                    <img src="${producto.imagen}" alt="Producto ${producto.id}">
                </div>
            </div>
            <div class="detalles">
                <hr>
                <h3>${producto.nombre}</h3>
                <p><strong>$${producto.precio}</strong></p>
                <button class="addCarrito" data-id="${producto.id}">Agregar al carrito</button>
            </div>
        </div>
        `;
    });
    document.querySelector('.productos').innerHTML = html;
     // Agregar event listeners a los elementos .img_producto después de actualizar el HTML
     document.querySelectorAll('.img_producto').forEach(imgProducto => {
        imgProducto.addEventListener('click', abrir);
    });
};


// Abrir ventana de producto
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
                    <button class="addCarrito" data-id="${producto.id}">Agregar al carrito</button>
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
             var botones = document.querySelectorAll(".addCarrito");
            botones.forEach(function (boton) {
                boton.addEventListener("click", agregarAlCarrito);
            });
            
        })
        .catch(error => console.error(error));
}

// Cerrar la ventana producto
function cerrar(event) {
    const vistaPrevia = document.getElementById("Vista-previa");
    const fondoPrevio = document.getElementById('fondo-vista-previa');
    if (!vistaPrevia.contains(event.target)) {
        vistaPrevia.style.display = "none";
        fondoPrevio.style.display = 'none';
    }
}
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