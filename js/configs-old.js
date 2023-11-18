console.log("Imprimiendo sharedData:", sharedData);


const objectId = "6E01EABE-26CB-4626-98C1-B937750ABC23";
userName = 'test_nombre';
userEmail = 'test_usuario@gmail.com';



function datosSesion() {
    // Actualizar el contenido HTML con el nombre de usuario
    document.getElementById('nombreUsuario').textContent = userName;//sharedData.username;
    document.getElementById('emailUsuario').textContent = userEmail;//sharedData.email;
}

datosSesion();
//----------------------------------------------

function mostrarEditarNombrePopup() {
    document.getElementById("editarNombrePopup").style.display = "block";
}

function cerrarEditarNombrePopup() {
    document.getElementById("editarNombrePopup").style.display = "none";
}

function editarNombreUsuario() {
    // Lógica para editar el nombre del usuario
    const nuevoNombre = document.getElementById("nuevoNombreUsuario").value;
    document.getElementById("nombreUsuario").innerText = nuevoNombre;
    userName = document.getElementById('nuevoNombreUsuario').value;

    cambioNombre();
    alert('Nombre del usuario editado correctamente');
    cerrarEditarNombrePopup();
}

function mostrarEditarEmailPopup() {
    document.getElementById("editarEmailPopup").style.display = "block";
}

function cerrarEditarEmailPopup() {
    document.getElementById("editarEmailPopup").style.display = "none";
}

function editarEmailUsuario() {
    // Lógica para editar el email del usuario
    const nuevoEmail = document.getElementById("nuevoEmailUsuario").value;
    document.getElementById("emailUsuario").innerText = nuevoEmail;
    alert('Email del usuario editado correctamente');
    cerrarEditarEmailPopup();
}

function mostrarCambiarContrasenaPopup() {
    document.getElementById("cambiarContrasenaPopup").style.display = "block";
}

function cerrarCambiarContrasenaPopup() {
    document.getElementById("cambiarContrasenaPopup").style.display = "none";
}

function cambiarContrasena() {
    // Lógica para cambiar la contraseña del usuario
    const nuevaContrasena = document.getElementById("nuevaContrasena").value;
    const confirmarContrasena = document.getElementById("confirmarContrasena").value;

    if (nuevaContrasena === confirmarContrasena) {
        alert('Contraseña cambiada correctamente');
        cerrarCambiarContrasenaPopup();
    } else {
        alert('Las contraseñas no coinciden. Intenta de nuevo.');
    }
}

function cambioNombre() {
    const url = 'https://jiggishmoney.backendless.app/api/data/Usuarios';

    let requestBody = {
      Nombre: userName,
      objectId: '6E01EABE-26CB-4626-98C1-B937750ABC23'
    };
    
    console.log("Imprimiendo request body: ", requestBody);

    fetch(url, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
        // Agrega cualquier otra cabecera necesaria aquí
      },
      body: JSON.stringify(requestBody)
    })
      .then(response => {
        if (!response.ok) {
          throw new Error(`Error en la solicitud: ${response.statusText}`);
        }
        return response.json();
      })
      .then(data => {
        console.log('Respuesta de la solicitud PUT:', data);
        // Maneja la respuesta como sea necesario
      })
      .catch(error => {
        console.error('Error en la solicitud PUT:', error.message);
        // Maneja el error como sea necesario
      });
    
  }