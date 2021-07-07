// variables globales
let datos = document.getElementById("datos");
let nombre = document.getElementById("nombre");

const nombreUsuario = () => {
  let nombreUsuario = prompt("Ingresa tu nombre");
  nombre.innerHTML = "Bienvenido/a " +  nombreUsuario;
  console.log(nombre);
};

// eventos
datos.onclick = function () {
  nombreUsuario();
};
