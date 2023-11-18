function login() {
    // Validar el usuario y la contraseña.
    iniciarSesion();
    alert('¡Iniciaste sesión correctamente!');
}

function singUp() {
    alert('¡Iniciaste sesión correctamente!');
}

function mostrarErrorInicioSesionPopup() {
    document.getElementById("errorInicioSesionPopup").style.display = "block";
}

function cerrarErrorInicioSesionPopup() {
    document.getElementById("errorInicioSesionPopup").style.display = "none";
}

async function iniciarSesion() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // URL de la API con los parámetros de consulta
    const apiUrl = `https://jiggishmoney.backendless.app/api/data/Usuarios?where=Nombre='${username}' and password='${password}'`;

    // variable para guardar user data en sessionStorage
    var sharedData = {
    username: '',
    password: '',
    email:'',
    objectId: ''
    };

    try {
      let response = await fetch(apiUrl);

      if (response.ok) {
        let data = await response.json();

        // Verificar si la respuesta contiene datos (usuario encontrado)
        if (data && data.length > 0) {
          // Usuario válido, redirigir a main.html
          var user = data[0]
          sharedData.username = user.Nombre;
          sharedData.password = user.password;
          sharedData.email = user.email;
          sharedData.objectId = user.objectId;
          console.log('Imprimiendo data: ', user);
          console.log("Imprimiendo data.email: ",user.email);

          // Guardar data de usuario en sessionStorage
          sessionStorage.setItem('sharedData', JSON.stringify(sharedData));
          
          // Redirigir Main page
          window.location.href = 'main.html';

        } else {
          window.alert('Nombre de usuario o contraseña incorrectos');
          mostrarErrorInicioSesionPopup();
        }
      } else {
        window.alert('Nombre de usuario o contraseña incorrectos');
        console.error('Error en la solicitud:', response.statusText);
      }
    } catch (error) {
        window.alert('Nombre de usuario o contraseña incorrectos');
        console.error('Error en la solicitud:', error.message);
    }
  }