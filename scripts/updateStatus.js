
let serverStatusButton = document.getElementById('serverStatus');

if (serverStatusButton) {

    async function checkServerStatus() {
        try {
       
            const response = await fetch('https://panel1.mcvhost.com/api/get_currently_playing?id=85', {
                headers: {
                    'Authorization': 'Bearer fe0tqemx0wor95o4' // Clave de la API en el encabezado
                }
            });

         
            if (!response.ok) {
                throw new Error('Error en la respuesta de la API');
            }

            const data = await response.json();
            console.log("El servidor se encuentra: " + data.live)
        
            if (data.live) {
                serverStatusButton.textContent = 'En Vivo';
                serverStatusButton.classList.add('live');
                serverStatusButton.setAttribute('aria-label', 'Estado del servidor: En Vivo');
            } else {
                serverStatusButton.textContent = 'Desconectado';
                serverStatusButton.classList.remove('live');
                serverStatusButton.setAttribute('aria-label', 'Estado del servidor: Desconectado');
            }
        } catch (error) {
            console.error('Error al obtener el estado del servidor:', error);
            serverStatusButton.textContent = 'Error';
            serverStatusButton.setAttribute('aria-label', 'Estado del servidor: Error');
        }
    }
  

    document.addEventListener('DOMContentLoaded', checkServerStatus);

    setInterval(checkServerStatus, 30000);
}
