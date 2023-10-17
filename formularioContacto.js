//.js del formulario
//Sugerencias

////correccion segun devolucion 4ta preentrega (agregamos validaciones y un popup que nos indica que el formulario ha sido entregado correctamente. )

window.onload = () => {
  // Agrega un evento de escucha al formulario cuando se envía
  document.querySelector("form").addEventListener("submit", function (e) {
      e.preventDefault(); // Evita que el formulario se envíe normalmente

      // Obtenemos los valores de los campos del formulario
      let nombre = document.querySelector("#nombre").value;

        // Validaciones de nombre y apellido
        if (!esNombreValido(nombre)) {
          alert("El campo Nombre no puede contener números.");
          return;
      }

      let apellido = document.querySelector("#apellido").value;

     
      if (!esNombreValido(apellido)) {
          alert("El campo Apellido no puede contener números.");
          return;
      }


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


      // Mostramos por consola los datos recuperados fuera del evento click
      console.log(JSON.parse(sessionStorage.getItem('formData')));

      // Función para validar si el campo contiene números
      function esNombreValido(nombre) {
      // Utilizamos una expresión regular para buscar números
      // Si se encuentra algún número, retorna false; de lo contrario, retorna true
      return !/\d/.test(nombre);
}

      // Mostrar el popup
      const popup = document.createElement("div");
      popup.className = "popup";
      popup.innerHTML = `
          <div class="popup-content">
              <h3>¡Formulario Enviado!</h3>
              <p>Su formulario ha sido entregado correctamente.</p>
              <button id="btnAceptar">Aceptar</button>
          </div>
      `;

      // Agregamos el popup a la página
      document.body.appendChild(popup);

      // Agregar un evento de clic al botón "Aceptar" en el popup
      document.querySelector("#btnAceptar").addEventListener("click", function () {
          popup.style.display = "none"; // Ocultar el popup
          location.reload(); // Recargar la página
      });
  });
}
