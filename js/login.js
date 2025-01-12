// Datos de usuario de ejemplo (esto normalmente se haría en el servidor, con base de datos)
const validUsername = 'usuario123';
const validPassword = 'contraseña123';

// Obtén el formulario y el mensaje de error
const form = document.getElementById('loginForm');
const errorMessage = document.getElementById('errorMessage');

// Evento para el formulario de login
form.addEventListener('submit', function(event) {
    event.preventDefault(); // Evitar que el formulario se envíe automáticamente
    
    // Obtén los valores de los campos
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Verifica si el usuario y la contraseña son correctos
    if (username === validUsername && password === validPassword) {
        // Si son correctos, muestra un mensaje de éxito
        alert('¡Bienvenido!');
        // Redirige a otra página (por ejemplo, dashboard.html)
        window.location.href = 'dashboard.html';  // Cambia esto a la URL de tu página de destino
    } else {
        // Si son incorrectos, muestra un mensaje de error
        errorMessage.textContent = 'Nombre de usuario o contraseña incorrectos. Intenta nuevamente.';
    }
});
