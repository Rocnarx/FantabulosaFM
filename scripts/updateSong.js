function updateCurrentSong() {
    const apiUrl = 'https://panel1.mcvhost.com/api/get_currently_playing?id=85';

    fetch(apiUrl, {
        method: 'GET',
        headers: {
            'Authorization': 'Bearer fe0tqemx0wor95o4'
        }
    })
        .then(response => {
            if (!response.ok) {
                throw new Error('Error al obtener la canción actual');
            }
            return response.json();
        })
        .then(data => {
            console.log('Datos recibidos:', data); 
           
            if (data && data.playing) {
                const currentSong = data.playing;

                document.getElementById('currentSong').innerText = 'Canción actual: ' + currentSong;
            } else {
                document.getElementById('currentSong').innerText = 'Canción actual: Información no disponible';
            }
        })
        .catch(error => {
            console.error('Error obteniendo la canción actual:', error);
            document.getElementById('currentSong').innerText = 'Canción actual: No disponible';
        });
}

setInterval(updateCurrentSong, 60000);
updateCurrentSong();
