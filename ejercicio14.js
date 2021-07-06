// validar tipo de variable y valor

let nombre = prompt("Ingresa tu nombre");
let edad = prompt("Ingresa tu edad");

if (edad >= "18") {
  alert("Tienes acceso al catalogo de peliculas violentas");
} else {
  alert(
    "Debes ser mayor a 18 años para acceder al catalogo de peliculas violentas"
  );
}
