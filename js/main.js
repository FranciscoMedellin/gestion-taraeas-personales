// Después de cargar main.html
document.addEventListener('DOMContentLoaded', function () {
    // Accede a sharedData después de que main.html se haya cargado
    console.log("Shared data antes: ", sessionStorage.getItem('sharedData'));
    var storedData = sessionStorage.getItem('sharedData');
    var sharedData = storedData ? JSON.parse(storedData) : {};
    console.log('sharedData despues: ', sharedData);
  });