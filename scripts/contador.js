document.addEventListener("DOMContentLoaded", () => {
    const visitCounterElement = document.getElementById("visitCounter");
    const uniqueVisitsKey = "uniqueVisits";
    const isUniqueVisitorKey = "isUniqueVisitor";


    let visitCount = localStorage.getItem(uniqueVisitsKey) ? parseInt(localStorage.getItem(uniqueVisitsKey)) : 0;


    if (!localStorage.getItem(isUniqueVisitorKey)) {

        visitCount += 1;
        localStorage.setItem(uniqueVisitsKey, visitCount);

        localStorage.setItem(isUniqueVisitorKey, true);
    }


    const mensaje = visitCount === 1
        ? `¡Bienvenid@ por primera vez! 🎉 Eres el visitante número ${visitCount}.`
        : `¡Hola! 👋 Eres el visitante número ${visitCount}.`;

    const specialMessage = visitCount % 5 === 0 ? "🎈 ¡Gracias por formar parte de nuestra comunidad!" : "";


    visitCounterElement.innerHTML = `<p>${mensaje}</p><p>${specialMessage}</p>`;
});
