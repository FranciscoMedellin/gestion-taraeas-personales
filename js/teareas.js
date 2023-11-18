 // Mostrar Crear Tarea PopUp
 function mostrarCrearTareaPopup() {
    document.getElementById("crearTareaPopup").style.display = "block";
}

function crearTarea() {
    // Lógica para crear una tarea (puedes agregarla según tus necesidades)
    alert('Tarea creada correctamente');
    cerrarCrearTareaPopup();
}

function cerrarCrearTareaPopup() {
    document.getElementById("crearTareaPopup").style.display = "none";
}

function mostrarEditarTareaPopup() {
    document.getElementById("editarTareaPopup").style.display = "block";
}

function editarTarea(id) {
    // Puedes agregar aquí la lógica para obtener la información de la tarea
    // y prellenar el formulario de edición si es necesario.
    document.getElementById("editarTareaPopup").style.display = "block";
}

function cerrarEditarTareaPopup() {
    document.getElementById("editarTareaPopup").style.display = "none";
}

function guardarCambiosTarea() {
    // Lógica para guardar cambios en la tarea editada
    alert('Cambios en la tarea guardados correctamente');
    cerrarEditarTareaPopup();
}

function eliminarTarea(id) {
    // Lógica para eliminar una tarea (puedes agregarla según tus necesidades)
    alert('Tarea eliminada correctamente');
    // Puedes recargar la lista de tareas después de eliminar una tarea si es necesario
}

function aplicarFiltros() {
    // Lógica para aplicar los filtros seleccionados y actualizar la lista de tareas
    // Puedes ajustar esto según tus necesidades
    alert('Filtros aplicados correctamente');
}

// Supongamos que estos son algunos equipos obtenidos del servidor
const equiposTareas = [
    { nombre: 'Equipo 1', id: 1 },
    { nombre: 'Equipo 2', id: 2 },
    // Agrega más equipos según sea necesario
];

// Función para renderizar la lista de equipos en los filtros
function renderizarListaEquiposTareas() {
    const equipoFiltroElement = document.getElementById('equipoFiltro');
    equiposTareas.forEach(equipo => {
        const option = document.createElement('option');
        option.value = equipo.id;
        option.text = equipo.nombre;
        equipoFiltroElement.add(option);
    });
}

// Llamamos a la función para que la lista de equipos se renderice al cargar la página
renderizarListaEquiposTareas();

// Supongamos que estas son algunas tareas obtenidas del servidor
const tareas = [
    { id: 1, nombre: 'Tarea 1', usuario: 'Usuario1', fechaLimite: '2023-11-15', tag: 'Tag1', prioridad: 'alta', equipo: 'Equipo 1' },
    { id: 2, nombre: 'Tarea 2', usuario: 'Usuario2', fechaLimite: '2023-11-20', tag: 'Tag2', prioridad: 'media', equipo: 'Equipo 2' },
    // Agrega más tareas según sea necesario
];

// Función para renderizar la lista de tareas
function renderizarListaTareas() {
    const listaTareasElement = document.getElementById('listaTareas');
    listaTareasElement.innerHTML = '';

    tareas.forEach(tarea => {
        const tareaItem = document.createElement('div');
        tareaItem.className = 'tarea-item';
        tareaItem.innerHTML = `
            <div>
                <p>${tarea.nombre}</p>
                <p>${tarea.usuario}</p>
                <p>${tarea.fechaLimite}</p>
                <p>${tarea.tag}</p>
                <p>${tarea.prioridad}</p>
                <p>${tarea.equipo}</p>
            </div>
            <div>
                <button onclick="editarTarea(${tarea.id})">Editar</button>
                <button onclick="eliminarTarea(${tarea.id})">Eliminar</button>
            </div>
        `;
        listaTareasElement.appendChild(tareaItem);
    });
}

// Llamamos a la función para que la lista de tareas se renderice al cargar la página
renderizarListaTareas();