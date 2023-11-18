
// Funcion que se ejecuta al cargar el html
document.addEventListener('DOMContentLoaded', function () {
  // Accede a sharedData después de que configs.html se haya cargado
  console.log("CONFIGS - Shared data antes de JSON Parse: ", sessionStorage.getItem('sharedData'));
  var storedData = sessionStorage.getItem('sharedData');
  var sharedData = storedData ? JSON.parse(storedData) : {};
  console.log('CONFIGS - sharedData JSON: ', sharedData);
  document.getElementById('nombreUsuario').textContent = sharedData.username;//sharedData.username;
  document.getElementById('emailUsuario').textContent = sharedData.email;
});

function get_sharedData(){
  var storedData = sessionStorage.getItem('sharedData');
  var sharedData = storedData ? JSON.parse(storedData) : {};
  return sharedData;
}

function set_sharedData(sharedData){
  console.log("Shared Data Actualizado: ", sharedData)
  sessionStorage.setItem('sharedData', JSON.stringify(sharedData));
}


//--------------------------------------------------------------------------------------------//
// ----------------------------- FUNCIONES COMPONENTES HTMLL  --------------------------------//
//--------------------------------------------------------------------------------------------//

function mostrarEditarNombrePopup() {
    document.getElementById("editarNombrePopup").style.display = "block";
}

function cerrarEditarNombrePopup() {
    document.getElementById("editarNombrePopup").style.display = "none";
}

function editarNombreUsuario() {
    // Lógica para editar el nombre del usuario
    var nuevoNombre = document.getElementById("nuevoNombreUsuario").value;
    request_PUT_Nombre(nuevoNombre);
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
    var nuevoEmail = document.getElementById("nuevoEmailUsuario").value;
    request_PUT_email(nuevoEmail);
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
    var nuevaContrasena = document.getElementById("nuevaContrasena").value;
    var confirmarContrasena = document.getElementById("confirmarContrasena").value;

    if (nuevaContrasena === confirmarContrasena) {
        // Logica para editar password
        request_PUT_password(nuevaContrasena);
        cerrarCambiarContrasenaPopup();
    } else {
        alert('Las contraseñas no coinciden. Intenta de nuevo.');
    }
}

//--------------------------------------------------------------------------------------------//
// ----------------------------- FUNCIONES PARA LA API ---------------------------------------//
//--------------------------------------------------------------------------------------------//

function request_PUT_Nombre(nuevoNombre) {
    const url = 'https://jiggishmoney.backendless.app/api/data/Usuarios';
    var sharedData = get_sharedData()
    var requestBody = {
      Nombre: nuevoNombre,
      objectId: sharedData.objectId
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
        if (response.ok){
            // Actualizar nombre de usuario en el HTML
            document.getElementById("nombreUsuario").innerText = nuevoNombre;
            // Actualizar sharedData
            sharedData.username = nuevoNombre;
            set_sharedData(sharedData);
            alert('Nombre del usuario editado correctamente');
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
        alert('Error al editar Nombre del usuario');
      });
    
  }

  function request_PUT_email(nuevoEmail) {
    const url = 'https://jiggishmoney.backendless.app/api/data/Usuarios';
    var sharedData = get_sharedData()
    var requestBody = {
      email: nuevoEmail,
      objectId: sharedData.objectId
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
        if (response.ok){
            // Actualizar email en el HTML
            document.getElementById("emailUsuario").innerText = nuevoEmail;
            // Actualizar sharedData
            sharedData.email = nuevoEmail;
            set_sharedData(sharedData);
            alert('Email del usuario editado correctamente');
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
        alert('Error al editar email del usuario');
      });
    
  }

  function request_PUT_password(nuevapass) {
    const url = 'https://jiggishmoney.backendless.app/api/data/Usuarios';
    var sharedData = get_sharedData()
    var requestBody = {
      password: nuevapass,
      objectId: sharedData.objectId
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
        if (response.ok){
            // Actualizar sharedData
            sharedData.password = nuevapass;
            set_sharedData(sharedData);
            alert('Contraseña cambiada correctamente');
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
        alert('Error al editar password del usuario');
      });
    
  }
