// ingresar un pueblo o una ciudad y debe responder la app con el departamento

alert(
  "Ingresa el nombre de la ciudad. Ciudades disponibles en Boyaca: Duitama, sogamoso, tunja, paipa"
);
alert(
  "Ingresa el nombre de la ciudad. Ciudades disponibles en Cundinamarca: ubate, tausa, simijaca, sibate"
);
alert(
  "Ingresa el nombre de la ciudad. Ciudades disponibles en Valle del Cauca: alcala, cali, florida, palmira"
);
alert(
  "Ingresa el nombre de la ciudad. Ciudades disponibles en Atlantico: barranquilla, polo nuevo, soledad, manati"
);
let municipio = prompt("Ingresa el nombre de la ciudad");
municipio = municipio.toLowerCase();

if (
  municipio == "duitama" ||
  municipio == "sogamoso" ||
  municipio == "tunja" ||
  municipio == "paipa"
) {
  alert(municipio + " pertenece al departamento Boyaca");
} else if (
  municipio == "ubate" ||
  municipio == "tausa" ||
  municipio == "simijaca" ||
  municipio == "sibate"
) {
  alert(municipio + " pertenece al departamento Cundinamarca");
} else if (
  municipio == "alcala" ||
  municipio == "cali" ||
  municipio == "florida" ||
  municipio == "palmira"
) {
  alert(municipio + " pertenece al departamento Valle del Cauca");
} else if (
  municipio == "barranquilla" ||
  municipio == "polo nuevo" ||
  municipio == "soledad" ||
  municipio == "manati"
) {
  alert(municipio + " pertenece al departamento Valle del Cauca");
} else {
  alert("Ingresa una ciudad valida");
}
