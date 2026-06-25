function iniciarJornada() {

    const ahora = new Date();

    const fecha = ahora.toLocaleDateString();
    const hora = ahora.toLocaleTimeString();

    const datos = {
        fecha,
        hora
    };

    localStorage.setItem(
        "jornada",
        JSON.stringify(datos)
    );

    mostrarJornada();
}

function mostrarJornada() {

    const jornada = JSON.parse(
        localStorage.getItem("jornada")
    );

    if (!jornada) return;

    document.getElementById("estadoJornada").innerHTML = `
        <h3>✅ Jornada iniciada</h3>
        <p>Fecha: ${jornada.fecha}</p>
        <p>Hora: ${jornada.hora}</p>
    `;
}

function recorrido() {
    alert("RECORRIDO FUNCIONA");
}



function cobros() {
    alert("Módulo Cobros en construcción");
}

function vehiculo() {
    alert("Módulo Vehículo en construcción");
}

function reportes() {
    alert("Módulo Reportes en construcción");
}

mostrarJornada();
