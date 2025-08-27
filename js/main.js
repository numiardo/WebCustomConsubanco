// Función para mostrar las diferentes pestañas de tasas
function showRatesTab(tab) {
    const tabDivisas = document.getElementById('tabDivisas');
    const tabTasas = document.getElementById('tabTasas');
    const tablaDivisas = document.getElementById('tablaDivisas');
    const tablaTasas = document.getElementById('tablaTasas');
    
    if (tab === 'divisas') {
        tabDivisas.classList.add('active');
        tabTasas.classList.remove('active');
        tablaDivisas.style.display = '';
        tablaTasas.style.display = 'none';
    } else {
        tabDivisas.classList.remove('active');
        tabTasas.classList.add('active');
        tablaDivisas.style.display = 'none';
        tablaTasas.style.display = '';
    }
}

// Inicialización cuando el DOM está listo
document.addEventListener('DOMContentLoaded', function() {
    // Inicializar el carrusel si es necesario
    // (Bootstrap lo hace automáticamente, pero podemos agregar más configuración aquí)
    
    // Inicializar los botones de tasas
    const tabDivisas = document.getElementById('tabDivisas');
    const tabTasas = document.getElementById('tabTasas');
    
    if (tabDivisas) {
        tabDivisas.addEventListener('click', () => showRatesTab('divisas'));
    }
    
    if (tabTasas) {
        tabTasas.addEventListener('click', () => showRatesTab('tasas'));
    }
});
