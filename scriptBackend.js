const apiUrl = window.location.hostname === 'localhost'
    ? 'http://localhost:3000/'
    : 'https://edudev.alwaysdata.net/petshopAPI';


document.addEventListener('DOMContentLoaded', function () {
    const bottonIniciarSesion = document.getElementById('inicioSesionid');
    const bottonRegistrarse = document.getElementById('registrarseid'); // Asegúrate de que este sea el ID correcto del botón de registrarse
    const modalIniciarSesion = document.getElementById('modalIniciarSesion');
    const modalRegistrarse = document.getElementById('modalRegistrarse');
    const closeSesion = document.getElementById('closeSesion');
    const closeRegistro = document.getElementById('closeRegistro');
    const formRegistro = document.querySelector('#modalRegistrarse form'); 
    const formIniciarSesion = document.querySelector('#modalIniciarSesion form');

    bottonIniciarSesion.addEventListener('click', function () {
        modalIniciarSesion.style.display = 'block';
    });

    bottonRegistrarse.addEventListener('click', function () {
        modalRegistrarse.style.display = 'block';
    });

    closeSesion.addEventListener('click', function () {
        modalIniciarSesion.style.display = 'none';
    });

    closeRegistro.addEventListener('click', function () {
        modalRegistrarse.style.display = 'none';
    });

    window.addEventListener('click', function (event) {
        if (event.target == modalIniciarSesion) {
            modalIniciarSesion.style.display = 'none';
        } else if (event.target == modalRegistrarse) {
            modalRegistrarse.style.display = 'none';
        }
    });

    // Capturar el evento de envío del formulario de registro
    formRegistro.addEventListener('submit', async function (event) {
        event.preventDefault(); // Prevenir la recarga de la página por defecto

        const nombre = document.getElementById('reg-nombre').value;
        const email = document.getElementById('reg-email').value;
        const contraseña = document.getElementById('reg-password').value;

        try {
            const response = await fetch('http://localhost:3000/user/registro', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ nombre, email, contraseña }),
            });

            if (response.ok) {
                const data = await response.json();
                console.log('Usuario registrado:', data);
                modalRegistrarse.style.display = 'none';
                bottonRegistrarse.style.display = 'none';
                // Mostrar mensaje de éxito o realizar otra acción necesaria
                alert('Registro exitoso!');
            } else {
                const errorData = await response.json();
                console.error('Error al registrar usuario:', errorData);
                // Mostrar mensaje de error al usuario
                alert('Error al registrar usuario. Por favor, intenta nuevamente.');
            }
        } catch (error) {
            console.error('Error al registrar usuario:', error);
            // Mostrar mensaje de error al usuario
            alert('Error al registrar usuario. Por favor, verifica tu conexión a internet.');
        }
    });

    // Manejar submit del formulario de inicio de sesión
    formIniciarSesion.addEventListener('submit', async function (e) {
        e.preventDefault();
        const email = document.getElementById('login-email').value;
        const contraseña = document.getElementById('login-password').value;

        try {
            const response = await fetch('http://localhost:3000/user/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ email, contraseña })
            });

            if (response.ok) {
                const data = await response.json();
                console.log('Inicio de sesión exitoso:', data);
                modalIniciarSesion.style.display = 'none';
                alert('Inicio de sesión exitoso!');
            } else {
                const errorData = await response.json();
                console.error('Error al iniciar sesión:', errorData);
                alert('Error al iniciar sesión. Por favor, verifica tus credenciales.');
            }
        } catch (error) {
            console.error('Error al iniciar sesión:', error);
            alert('Error al iniciar sesión. Por favor, verifica tu conexión a internet.');
        }
    });
});



