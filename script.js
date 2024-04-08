console.log("Bienvenido a PetShop Web")


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






























































































































    // MisterEgg
    var secuenciaDeseada = ['ArrowUp', 'ArrowRight', 'ArrowRight', 'ArrowUp', 'ArrowLeft'];
    var teclasPresionadas = [];
    console.log("Para ver los integrantes Truquito de PC : '↑', '→', '→', '↑', '←' ")
    function verificarSecuencia() {
        console.log(teclasPresionadas);
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