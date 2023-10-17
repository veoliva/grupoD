/*Para la cuarta pre-entrega deberán incluir en su proyecto los
siguientes puntos:
(en pagina campanas)
-Almacenar en Storage la información ingresada por el usuario
en la entrega anterior. Puede ser un texto, números, o
combinación.
-Mostrar al usuario dicha información (ya guardada en nuestra
base de datos).
-Crear estructura de datos en formato JSON, puede ser de
productos, servicios o usuarios.
-Leerla desde un archivo JS y 
crear una función que nos deje
agregar un nuevo elemento a la base de datos, siguiendo la
estructura de los elementos anteriores.*/



//sugerencia: (En el archivo "campanas.js", en la línea 59, ¿por qué usan li? Son para listas. Si es para un título un h2, h3.)
//Explicacion: originalmente en el html el contenido que estamos agregando correspone a una lista, 
//la cual tiene un class asignado que le aporta diseño. si la reemplazamos por un h2 u h3 perdemos esas caracteristicas.

//correccion segun devolucion 4ta preentrega
let jsonItemCampana = [
  {
    "titulo": "Recicladores de Base",
    "descripcion": "Promoción de derechos garantizando condiciones mínimas de seguridad en el trabajo, infraestructura y equipamiento. Facilitamos ropa de trabajo, bolsones, carros, elementos de protección personal y herramientas."
  },
  {
    "titulo": "Sistemas Locales de Reciclado",
    "descripcion": "Infraestructura, equipamiento, articulación y asistencia técnica a todos los actores de un sistema local de reciclado en todas las etapas GIIRSU: Promoción Ambiental, Recolección Diferenciada, Transporte, Tratamiento y Comercialización. También se contempla la creación de espacios de comedor, salud integral, niñez y promoción ambiental."
  },
  {
    "titulo": "Redes de Comercialización",
    "descripcion": "Brindamos asistencia técnica e infraestructura para mejorar la logística y comercialización colectiva de los materiales reciclables."
  },
  {
    "titulo": "Valorización de otras corrientes de residuos",
    "descripcion": "Asistencia técnica y equipamiento para desarrollo del valor agregado de los reciclables y el tratamiento de nuevas corrientes de residuos como Orgánicos, Residuos de aparatos eléctricos y electrónicos (RAEE), y Neumáticos fuera de uso (NFU), entre otros."
  },
  {
    "titulo": "prueba1 preentrega 4ta",
    "descripcion": "Esta es una prueba de la función para agregar elemento."
  }
];

console.log(jsonItemCampana);

window.onload = () => {
  // Guardamos el primer elemento del arreglo en localStorage
  localStorage.setItem("titulo", jsonItemCampana[0].titulo);
  localStorage.setItem("descripcion", jsonItemCampana[0].descripcion);

  // Recuperamos los datos de localStorage y mostramos
  let storedTitulo = localStorage.getItem("titulo");
  let storedDescripcion = localStorage.getItem("descripcion");

  // Creamos elementos para mostrar los datos de localStorage en el HTML
  let storedArticle = document.createElement("article");
  let storedLi = document.createElement("li");
  storedLi.innerText = storedTitulo;
  storedArticle.appendChild(storedLi);

  let storedP = document.createElement("p");
  storedP.innerText = storedDescripcion;
  storedArticle.appendChild(storedP);

  // Agregamos los elementos creados al elemento con el ID "itemCampana" en el HTML
  document.getElementById("itemCampana").appendChild(storedArticle);

  // Recorremos el arreglo jsonItemCampana y agregamos elementos a la lista
  for (let i = 1; i < jsonItemCampana.length; i++) {
    
      let lista = document.getElementById ("itemCampana")
      
      // Creamos un li
      let li = document.createElement("li");
      li.innerText = jsonItemCampana[i].titulo;

      // Creamos un p
      let p = document.createElement("p");
      p.innerText = jsonItemCampana[i].descripcion;

      // Agregamos li y p al article
      lista.appendChild(li);
      lista.appendChild(p);

    
  }
}