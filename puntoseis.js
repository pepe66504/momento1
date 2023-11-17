// Función para generar un código numérico aleatorio de 6 dígitos
function generarCodigo() {
  return Math.floor(Math.random() * 900000) + 100000;
}

// Función para generar una edad aleatoria entre 18 y 60 años
function generarEdad() {
  return Math.floor(Math.random() * (60 - 18 + 1)) + 18;
}

// Crear un objeto para almacenar los códigos y edades
const datos = {};

// Generar 20 códigos y edades aleatorias y guardarlos en el objeto
for (let i = 0; i < 20; i++) {
  const codigo = generarCodigo();
  const edad = generarEdad();
  datos[codigo] = edad;
}

// Encontrar la edad mayor
let edadMayor = -1;
let codigoEdadMayor;

for (const codigo in datos) {
  if (datos[codigo] > edadMayor) {
    edadMayor = datos[codigo];
    codigoEdadMayor = codigo;
  }
}

// Mostrar todo en la consola
console.log("Códigos y edades generadas:");
for (const codigo in datos) {
  console.log(`Código: ${codigo}, Edad: ${datos[codigo]}`);
}

console.log(`La edad mayor es ${edadMayor} y corresponde al código ${codigoEdadMayor}`);

