/*Para la cuarta pre-entrega deberán incluir en su proyecto los
siguientes puntos:
(en pagina de contacto)
-Almacenar en Storage la información ingresada por el usuario
en la entrega anterior. Puede ser un texto, números, o
combinación.
-Mostrar al usuario dicha información (ya guardada en nuestra
base de datos).
-Crear estructura de datos en formato JSON, puede ser de
productos, servicios o usuarios.
-Leerla desde un archivo JS y 
// (en pagina de campañas) crear una función que nos deje
agregar un nuevo elemento a la base de datos, siguiendo la
estructura de los elementos anteriores.*/



window.onload = () =>{

// Obtenemos los valores de los campos del formulario
let nombre = document.querySelector("#nombre").value;
let apellido = document.querySelector("#apellido").value;
let ciudad = document.querySelector("#ciudad").value;
let email = document.querySelector("#email").value;
let comentarios = document.querySelector("#comentarios").value;

// Creamos un objeto JSON con los datos del formulario
let formData = {
  nombre: nombre,
  apellido: apellido,
  ciudad: ciudad,
  email: email,
  comentarios: comentarios
};

// Convertimos el objeto a JSON
let formDataJSON = JSON.stringify(formData);

// Almacenamos la información en Storage
localStorage.setItem("formData", formDataJSON);

// Mostramos la información almacenada en Storage al usuario
console.log("Formulario almacenado en localStorage:", localStorage.getItem("formData"));

// Evento del botón submit
document.querySelector("#submit").addEventListener("click", function() {
  // Mostramos la leyenda
  document.querySelector("#leyenda").textContent = "Su formulario ha sido entregado correctamente";

  // Mostramos el objeto JSON por consola
  console.log("Datos del formulario en formato JSON:", formDataJSON);
});

}