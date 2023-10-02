//pagina de prueba (no es parte de la 4ta preentrega)

/*//1. Crear los objetos en JavaScript con sus arrays. Estos tienen propiedades nombre, imagen y enlace

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

  console.log(estructuraJSON);


//3. Leerla desde un archivo JS y crear una función que nos deje agregar un nuevo elemento al storage, siguiendo la estructura de los elementos anteriores.


// Leer la estructura de datos desde un archivo JS
// Función para agregar un nuevo elemento al storage
function agregarElemento(nombre, imagen, enlace) {
  let nuevoPuntoReciclaje = {
    nombre,
    imagen,
    enlace
  };

  estructuraJSON.puntosReciclaje.push(nuevoPuntoReciclaje);

//Ejemplo de uso:

JavaScript
// Agregar un nuevo punto de reciclaje

agregarElemento("Aluminio", "alumino.png", "https://maps.app.goo.gl/d26JuyzbP6RSyxvV9");

// Obtener la estructura actualizada
let estructuraActualizada = JSON.parse(localStorage.getItem("estructuraJSON"));

// Hacer algo con la estructura actualizada*

  // Almacenamos la información en Storage
localStorage.setItem("linkpuntoreciclado", textContent);
localStorage.setItem("imgpuntoreciclado", src);
localStorage.setItem("linkpuntoreciclado", href);



 //Guardar la estructura actualizada en el storage
  localStorage.setItem("estructuraJSON", JSON.stringify(estructuraJSON));
}
  */