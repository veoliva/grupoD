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
// (en pagina campañas) crear una función que nos deje
agregar un nuevo elemento a la base de datos, siguiendo la
estructura de los elementos anteriores.*/



  
  function agregarElemento(titulo, descripcion) {
    // Obtener el contenedor
    var contenedor = document.querySelector('.campanaslineasdeintervencion');
  
    // Crear un nuevo elemento li
    var nuevoLi = document.createElement('li');
    nuevoLi.textContent = titulo;
  
    // Crear un nuevo elemento p
    var nuevoP = document.createElement('p');
    nuevoP.textContent = descripcion;
  
    // Agregar li y p al contenedor
    contenedor.appendChild(nuevoLi);
    contenedor.appendChild(nuevoP);
  

  }
  
  agregarElemento("probando nuevo elemento para 4ta preentrega", "esta pagina esta decicada al reciclaje ");
  
 
  
  
