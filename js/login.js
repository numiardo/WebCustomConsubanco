// Validación del formulario de login
document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('loginForm');
    
    if (loginForm) {
        loginForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const email = document.getElementById('email').value;
            const password = document.getElementById('password').value;
            
            // Aquí irían las validaciones
            if (!email || !password) {
                alert('Por favor, complete todos los campos');
                return;
            }
            
            if (!isValidEmail(email)) {
                alert('Por favor, ingrese un correo electrónico válido');
                return;
            }
            
            // Aquí iría la lógica de autenticación
            console.log('Iniciando sesión...');
        });
    }
});

function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}
