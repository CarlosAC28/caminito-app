function iniciarJornada() {

    const ahora = new Date();

    const fecha = ahora.toLocaleDateString();

    const hora = ahora.toLocaleTimeString();

    document.getElementById("estadoJornada").innerHTML = `
        <h3>✅ Jornada iniciada</h3>
        <p>Fecha: ${fecha}</p>
        <p>Hora: ${hora}</p>
    `;
}