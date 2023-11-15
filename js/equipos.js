function mostrarPopup() {
    document.getElementById("crearEquipoPopup").style.display = "block";
}

function cerrarPopup() {
    document.getElementById("crearEquipoPopup").style.display = "none";
}

function crearEquipo() {
    // Lógica para crear un equipo (puedes agregarla según tus necesidades)
    alert('Equipo creado correctamente');
    cerrarPopup();
}

// Supongamos que estos son algunos equipos obtenidos del servidor
const equipos = [
    { nombre: 'Equipo 1', id: 1 },
    { nombre: 'Equipo 2', id: 2 },
    // Agrega más equipos según sea necesario
];

// Función para renderizar la lista de equipos
function renderizarListaEquipos() {
    const listaEquiposElement = document.getElementById('listaEquipos');
    listaEquiposElement.innerHTML = '';

    equipos.forEach(equipo => {
        const equipoItem = document.createElement('div');
        equipoItem.className = 'equipo-item';
        equipoItem.innerHTML = `
            <span>${equipo.nombre}</span>
            <button onclick="editarEquipo(${equipo.id})">Editar</button>
            <button onclick="agregarUsuario(${equipo.id})">Agregar Usuario</button>
        `;
        listaEquiposElement.appendChild(equipoItem);
    });
}

// Llamamos a la función para que la lista se renderice al cargar la página
renderizarListaEquipos();

function editarEquipo(id) {
// Puedes agregar aquí la lógica para obtener la información del equipo
// y prellenar el formulario de edición si es necesario.
document.getElementById("editarEquipoPopup").style.display = "block";
}

function cerrarEditarEquipoPopup() {
    document.getElementById("editarEquipoPopup").style.display = "none";
}

function editarNombreEquipo() {
    // Lógica para editar el nombre del equipo
    alert('Nombre del equipo editado correctamente');
    cerrarEditarEquipoPopup();
}

function agregarUsuarioEquipo() {
    // Lógica para agregar un usuario al equipo
    alert('Usuario agregado correctamente');
    cerrarAgregarUsuarioPopup();
}

function cerrarAgregarUsuarioPopup() {
    document.getElementById("agregarUsuarioPopup").style.display = "none";
}

function agregarUsuario(id) {
    // Puedes agregar aquí la lógica para obtener la información del equipo
    // y prellenar el formulario de agregar usuario si es necesario.
    document.getElementById("agregarUsuarioPopup").style.display = "block";
}