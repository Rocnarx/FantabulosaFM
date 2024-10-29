document.addEventListener("DOMContentLoaded", () => {
    const visitCounterElement = document.getElementById("visitCounter");
    const uniqueVisitsKey = "uniqueVisits";
    const isUniqueVisitorKey = "isUniqueVisitor";

    // Recuperar el conteo de visitas únicas
    let visitCount = localStorage.getItem(uniqueVisitsKey) ? parseInt(localStorage.getItem(uniqueVisitsKey)) : 0;

    // Verificar si es la primera visita
    if (!localStorage.getItem(isUniqueVisitorKey)) {
        // Usuario único, incrementar el conteo
        visitCount += 1;
        localStorage.setItem(uniqueVisitsKey, visitCount);
        // Marcar que el usuario ya ha visitado la página
        localStorage.setItem(isUniqueVisitorKey, true);
    }

    // Mostrar el mensaje
    const mensaje = visitCount === 1
        ? `¡Bienvenid@ por primera vez! 🎉 Eres el visitante número ${visitCount}.`
        : `¡Hola! 👋 Eres el visitante número ${visitCount}.`;

    // Mensaje especial para ciertos visitantes
    const specialMessage = visitCount % 5 === 0 ? "🎈 ¡Gracias por formar parte de nuestra comunidad!" : "";

    // Animar el mensaje
    visitCounterElement.innerHTML = `<p>${mensaje}</p><p>${specialMessage}</p>`;
});
