/*Para la cuarta pre-entrega deberán incluir en su proyecto los
siguientes puntos:
(en pagina de contacto)
-Almacenar en Storage la información ingresada por el usuario
en la entrega anterior. Puede ser un texto, números, o
combinación.
-Mostrar al usuario dicha información (ya guardada en nuestra
base de datos).
//
(en pagina de campanas)
-Crear estructura de datos en formato JSON, puede ser de
productos, servicios o usuarios.
-Leerla desde un archivo JS y crear una función que nos deje
agregar un nuevo elemento a la base de datos, siguiendo la
estructura de los elementos anteriores.*/

/*

  {
    "campanaslineasdeintervencion": [
      {
        "tipo": "Recicladores de Base",
        "descripcion": "promoción de derechos garantizando condiciones mínimas de seguridad en el trabajo, infraestructura y equipamiento. Facilitamos ropa de trabajo, bolsones, carros, elementos de protección personal y herramientas."
      },
      {
        "tipo": "Sistemas Locales de Reciclado",
        "descripcion": "infraestructura, equipamiento, articulación y asistencia técnica a todos los actores de un sistema local de reciclado en todas las etapas GIIRSU: Promoción Ambiental, Recolección Diferenciada, Transporte, Tratamiento y Comercialización. También se contempla la creación de espacios de comedor, salud integral, niñez y promoción ambiental."
      },
      {
        "tipo": "Redes de Comercialización",
        "descripcion": "brindamos asistencia técnica e infraestructura para mejorar la logística y comercialización colectiva de los materiales reciclables."
      },
      {
        "tipo": "Valorización de otras corrientes de residuos",
        "descripcion": "Asistencia técnica y equipamiento para desarrollo del valor agregado de los reciclables y el tratamiento de nuevas corrientes de residuos como Orgánicos, Residuos de aparatos eléctricos y electrónicos (RAEE), y Neumáticos fuera de uso (NFU), entre otros."
      }
    ]
  }
  
*/

// Obtenemos el contenedor principal
let contenedor = document.querySelector('.campanaslineasdeintervencion');

// Obtenemos todos los elementos li y p del contenedor
let elementosLi = contenedor.querySelectorAll('li');
let elementosP = contenedor.querySelectorAll('p');

// Creamos un array para almacenar la información
let informacionArray = [];

elementosLi.forEach((li, index) => {
  let tipo = li.textContent.replace(':', ''); // Eliminar el ":" del tipo
  let descripcion = elementosP[index].textContent;

  informacionArray.push({
    tipo: tipo.trim(),
    descripcion: descripcion.trim()
  });
});

// Convertimos el array a formato JSON
let informacionJSON = JSON.stringify(informacionArray);

// Almacenamos en localStorage
localStorage.setItem('informacion', informacionJSON);

//console.log('Información almacenada en localStorage:', localStorage.getItem('informacion'));


function agregarElementoAlStorage(tipo, descripcion) {
    
    // Obtenemos la información actual del localStorage
    let informacionActual = localStorage.getItem('informacion');
  
    // Convertimos la información actual de JSON a un array 
    let informacionArray = informacionActual ? JSON.parse(informacionActual) : [];
  
    // Agregamos el nuevo elemento al array
    informacionArray.push({
      tipo: tipo.trim(),
      descripcion: descripcion.trim()
    });

    agregarElementoAlStorage('probando nuevo elemento', 'esta es una pagina de campañas de reciclaje');
  
    // Convertimos el array a formato JSON
    let informacionJSON = JSON.stringify(informacionArray);
  
    // Almacenamos en localStorage
    localStorage.setItem('informacion', informacionJSON);

    
    console.log('Nuevo elemento agregado al localStorage:', { tipo, descripcion });
  }
  

  
  
