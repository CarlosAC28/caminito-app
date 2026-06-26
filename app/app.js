const clientes = [

    "Prisma",
    "Richard",
    "Abasto",
    "DC",
    "Tomasco"

];
function iniciarJornada() {

    const ahora = new Date();

    const fecha = ahora.toLocaleDateString();
    const hora = ahora.toLocaleTimeString(
    "es-AR",
    {
        hour12: false
    }
)
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

    const ahora = new Date();

    localStorage.setItem(
        "inicioRecorrido",
        ahora.toLocaleTimeString()
    );

    alert("Recorrido iniciado");
}

function entregaRealizada() {

    document.getElementById("estadoJornada").innerHTML = `
        <h3>✅ Registrar Entrega</h3>

        <label>Cliente:</label><br>
        <select id="cliente">
${clientes.map(cliente =>
`<option>${cliente}</option>`
).join("")}
</select><br><br>
<label>Recibió:</label><br>
<input id="recibio" type="text"><br><br>

        <label>Observaciones:</label><br>
        <textarea id="observaciones"></textarea><br><br>

        <button onclick="guardarEntrega()">
            💾 Guardar Entrega
        </button>
    `;
}
function guardarEntrega() {

    const cliente =
        document.getElementById("cliente").value;
const recibio =
    document.getElementById("recibio").value;

    const observaciones =
        document.getElementById("observaciones").value;

    const hora =
        new Date().toLocaleTimeString(
    "es-AR",
    {
        hour12: false
    }
)

    let entregasDetalle =
        JSON.parse(
            localStorage.getItem("entregasDetalle")
        ) || [];

    entregasDetalle.push({
    cliente,
    recibio,
    observaciones,
    hora
});

    localStorage.setItem(
        "entregasDetalle",
        JSON.stringify(entregasDetalle)
    );

    let entregas =
        Number(
            localStorage.getItem("entregas")
        ) || 0;

    entregas++;

    localStorage.setItem(
        "entregas",
        entregas
    );

    alert(
        "Entrega guardada\n\n" +
        "Cliente: " + cliente +
        "\nTotal entregas: " + entregas
    );
}

function finRecorrido() {

    const entregas =
        localStorage.getItem("entregas") || 0;

    alert(
        "Recorrido finalizado.\nEntregas realizadas: " +
        entregas
    );

    localStorage.removeItem("entregas");
}

function cobros() {
    alert("COBROS FUNCIONA");
}

function vehiculo() {
    alert("VEHICULO FUNCIONA");
}

function reportes() {

    const entregas =
        JSON.parse(
            localStorage.getItem("entregasDetalle")
        ) || [];

    let html = `
        <h3>📊 Reporte Diario</h3>
    `;

    entregas.forEach(entrega => {

        html += `
            <p>
            ✅ ${entrega.cliente}<br>
            🕒 ${entrega.hora}<br>
👤 ${entrega.recibio}<br>
📝 ${entrega.observaciones}
            </p>
            <hr>
        `;
    });

    document.getElementById(
        "estadoJornada"
    ).innerHTML = html;
}
    
function reiniciarDatos() {

    localStorage.clear();

    alert("Datos reiniciados");

    location.reload();
}
mostrarJornada();
