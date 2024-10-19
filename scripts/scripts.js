function playRadio() {
    const audio = new Audio('ruta/a/la/emision.mp3');
    audio.play();

    // Informar al usuario que la radio está en reproducción
    const liveRegion = document.createElement('div');
    liveRegion.setAttribute('aria-live', 'assertive');
    liveRegion.setAttribute('role', 'alert');
    liveRegion.style.position = 'absolute';
    liveRegion.style.left = '-9999px';
    liveRegion.innerText = 'Reproduciendo radio';
    document.body.appendChild(liveRegion);

    // Remover el live region después de que se informe
    setTimeout(() => {
        document.body.removeChild(liveRegion);
    }, 3000);
}
