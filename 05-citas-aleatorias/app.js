//  ***************************************************  
//  **********  /05-citas-aleatorias/app.js  **********  
//  ***************************************************  


//  -----  Referencias al HTML  -----
const botonElem = document.getElementById('boton-cambiar-cita');
const citaElem = document.getElementById('cita');
const autorElem = document.getElementById('autor');


//  -----  Definicion de Funciones  -----
function generarEnteroAleatorio(min, max) {

    //  -----  Sin incluir 'max' en los valores posibles.
    return Math.floor(Math.random() * (max - min) + min);
}


function cambiarCita() {

    const indiceAleatorio = generarEnteroAleatorio(0, citas.length);
    citaElem.innerText = ` " ${citas[indiceAleatorio].texto}" `;
    autorElem.innerText = citas[indiceAleatorio].autor;
}


//  -----  Llamada a la Función al cargar la página x primera vez  -----
cambiarCita();

//  -----  al Pulsar el botón  -----
botonElem.addEventListener('click', cambiarCita);
