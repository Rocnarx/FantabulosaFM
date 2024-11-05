document.addEventListener("DOMContentLoaded", function() {
    fetch(`scripts/contador.php`)
        .then(response => response.json())
        .then(data => {
            const contadorElement = document.getElementById('contador');
            if (contadorElement) {
                contadorElement.textContent = `Total de visitas unicas en nuestra web: ${data.total_visitas}`;
            }
        })
        .catch(error => console.error('Error al cargar el contador:', error));
});
