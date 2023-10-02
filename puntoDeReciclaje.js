//1. Crear los objetos en JavaScript con sus arrays. Estos tienen propiedades nombre, imagen y enlace

let puntosReciclaje = document.querySelectorAll(".puntosdereciclados article");

let objetosPuntosReciclaje = [];

for (let puntoReciclaje of puntosReciclaje) {
  let objetoPuntoReciclaje = {};
  objetoPuntoReciclaje.nombre = puntoReciclaje.querySelector(".linkpuntoreciclado").textContent;
  objetoPuntoReciclaje.imagen = puntoReciclaje.querySelector(".imgpuntoreciclado").src;
  objetoPuntoReciclaje.enlace = puntoReciclaje.querySelector(".linkpuntoreciclado").href;

  objetosPuntosReciclaje.push(objetoPuntoReciclaje);
}

//2. Crear estructura de datos en formato JSON
let estructuraJSON = JSON.stringify({
    puntosReciclaje: objetosPuntosReciclaje
  });

//3. Leerla desde un archivo JS y crear una función que nos deje agregar un nuevo elemento al storage, siguiendo la estructura de los elementos anteriores.

// Leer la estructura de datos desde un archivo JS
const estructuraJSON = require("./estructura.json");

// Función para agregar un nuevo elemento al storage
function agregarElemento(nombre, imagen, enlace) {
  const nuevoPuntoReciclaje = {
    nombre,
    imagen,
    enlace
  };

  estructuraJSON.puntosReciclaje.push(nuevoPuntoReciclaje);

  // Guardar la estructura actualizada en el storage
  localStorage.setItem("estructuraJSON", JSON.stringify(estructuraJSON));
}

/*Esta función recibe tres parámetros: nombre, imagen y enlace. La función crea un nuevo objeto con las propiedades especificadas y lo agrega al array puntosReciclaje. Finalmente, guarda la estructura actualizada en el storage local.

Ejemplo de uso:

JavaScript
// Agregar un nuevo punto de reciclaje
agregarElemento("Nuevo punto de reciclaje", "imagen.jpg", "enlace.com");

// Obtener la estructura actualizada
const estructuraActualizada = JSON.parse(localStorage.getItem("estructuraJSON"));

// Hacer algo con la estructura actualizada*/