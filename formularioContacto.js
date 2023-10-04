//.js del formulario


window.onload = () => {
  // Evento del botón submit
  document.querySelector("#submit").addEventListener("click", function() {
    // Obtenemos los valores de los campos del formulario cuando se hace clic en el botón
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
      comentarios: comentarios,
    };

    // Convertimos el objeto a JSON
    let formDataJSON = JSON.stringify(formData);

    // Almacenamos la cadena JSON en el sessionStorage
    sessionStorage.setItem('formData', formDataJSON);
    
    // Mostramos la leyenda
    document.querySelector("#leyenda").textContent = "Su formulario ha sido entregado correctamente";
  });

  // Mostramos por consola los datos recuperados fuera del evento click
  console.log(JSON.parse(sessionStorage.getItem('formData')));
}



