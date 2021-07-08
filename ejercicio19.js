// menu
let op = document.getElementById("op");

const operaciones = () => {
  let op = prompt(
    "Escribe: \n 1 - Suma \n 2 - Resta \n 3 - Multiplicación \n 4 - División"
  );

  if (op !== "1" && op !== "2" && op !== "3" && op !== "4") {
    alert("Favor ingresar una opcion valida de 1 a 4");
  } else {
    let num1 = parseFloat(prompt("Ingrese numero 1"));
    let num2 = parseFloat(prompt("Ingrese numero 2"));
    let resultado = 0;
    if (op === "1") {
      resultado = num1 + num2;
    } else if (op === "2") {
      resultado = num1 - num2;
    } else if (op === "3") {
      resultado = num1 * num2;
    } else {
      if (num2 === 0) {
        return alert("No se puede dividir por 0");
      } else {
        resultado = num1 / num2;
      }
    }
    alert("El resultado es: " + resultado);
  }
};

//eventos
op.onclick = function () {
  operaciones();
};
