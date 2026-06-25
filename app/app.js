alert("APP JS CARGADO");

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
    document.getElementById("estadoJornada").innerHTML = `
    <h3>📋 Recorrido</h3>

    <button onclick="inicioRecorrido()">
        🚚 Iniciar Recorrido
    </button>

    <button onclick="entregaRealizada()">
        ✅ Entrega Realizada
    </button>

    <button onclick="finRecorrido()">
        🏁 Finalizar Recorrido
    </button>
`;
}
function inicioRecorrido() {
    alert("Recorrido iniciado");
}

function entregaRealizada() {
    alert("Entrega registrada");
}

function finRecorrido() {
    alert("Recorrido finalizado");
}

function cobros() {
    alert("COBROS FUNCIONA");
}

function vehiculo() {
    alert("VEHICULO FUNCIONA");
}

function reportes() {
    alert("REPORTES FUNCIONA");
}

mostrarJornada();
