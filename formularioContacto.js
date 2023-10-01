/*Para la cuarta pre-entrega deberán incluir en su proyecto los
siguientes puntos:
(en pagina de contacto)
-Almacenar en Storage la información ingresada por el usuario
en la entrega anterior. Puede ser un texto, números, o
combinación.
-Mostrar al usuario dicha información (ya guardada en nuestra
base de datos).
//
(en pagina de punto de reciclaje)
-Crear estructura de datos en formato JSON, puede ser de
productos, servicios o usuarios.
-Leerla desde un archivo JS y crear una función que nos deje
agregar un nuevo elemento a la base de datos, siguiendo la
estructura de los elementos anteriores.*/



window.onload = () => {

// Obtenemos los valores de los campos del formulario
let nombre = document.querySelector("#nombre").value;
let apellido = document.querySelector("#apellido").value;
let ciudad = document.querySelector("#ciudad").value;
let email = document.querySelector("#email").value;
let comentarios = document.querySelector("#comentarios").value;
let submit= document.querySelector("#submit").value;

// Almacenamos la información en Storage
localStorage.setItem("nombre", nombre);
localStorage.setItem("apellido", apellido);
localStorage.setItem("ciudad", ciudad);
localStorage.setItem("email", email);
localStorage.setItem("comentarios", comentarios);

// Mostramos la información almacenada en Storage al usuario
document.querySelector("#nombre").textContent = localStorage.getItem("nombre");
document.querySelector("#apellido").textContent = localStorage.getItem("apellido");
document.querySelector("#ciudad").textContent = localStorage.getItem("ciudad");
document.querySelector("#email").textContent = localStorage.getItem("email");
document.querySelector("#comentarios").textContent = localStorage.getItem("comentarios");

// Evento del botón submit
document.querySelector("#submit").addEventListener("click", function() {
  // Mostramos la leyenda
  document.querySelector("#leyenda").textContent = "Su formulario ha sido entregado correctamente";

});

}