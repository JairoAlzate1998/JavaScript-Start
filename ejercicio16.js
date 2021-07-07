// variables globales
let datos = document.getElementById("datos");

const nombreUsuario = () => {
  let nombre = prompt("Ingresa tu nombre");
  alert(nombre);
  console.log(nombre);
};

// eventos
datos.onclick = function () {
  nombreUsuario();
};
