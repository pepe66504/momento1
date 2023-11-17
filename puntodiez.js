// Función para generar un tipo de comida aleatorio
function generarTipoComida() {
  const tipos = ["vegetal", "animal", "insecto"];
  const indiceAleatorio = Math.floor(Math.random() * tipos.length);
  return tipos[indiceAleatorio];
}

// Función para generar un número de energía aleatorio entre 10 y 500
function generarEnergiaAleatoria() {
  return Math.floor(Math.random() * (500 - 10 + 1)) + 10;
}

// Función para generar una comida aleatoria
function generarComida() {
  return {
    tipo: generarTipoComida(),
    energia: generarEnergiaAleatoria(),
  };
}

// Crear un objeto para almacenar las comidas generadas
const comidas = {};

// Generar 300 comidas aleatorias y guardarlas en el objeto
for (let i = 1; i <= 300; i++) {
  comidas[`Comida${i}`] = generarComida();
  console.log(comidas);
}

// Función para filtrar alimentos vegetales con más de 200 unidades de energía
function filtrarComidasVegetales() {
  const comidasVegetales = Object.values(comidas).filter(
    (comida) => comida.tipo === "vegetal" && comida.energia > 200
  );
  return comidasVegetales;
}

// Función para calcular la sumatoria de niveles de energía de alimentos vegetales
function calcularSumatoriaEnergia(comidasVegetales) {
  return comidasVegetales.reduce((total, comida) => total + comida.energia, 0);
}

// Función callback para mostrar la sumatoria en la consola
function mostrarSumatoriaEnergia(sumatoria) {
  console.log(
    `La sumatoria de niveles de energía de los alimentos vegetales es: ${sumatoria}`
  );
}

// Simular una demora de 5 segundos antes de realizar las operaciones
setTimeout(function () {
  const comidasVegetales = filtrarComidasVegetales();
  const sumatoriaEnergia = calcularSumatoriaEnergia(comidasVegetales);
  mostrarSumatoriaEnergia(sumatoriaEnergia);
}, 5000);
