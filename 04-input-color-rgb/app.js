//  ***************************************************  
//  **********  /04-input-color-rgba/app.js  **********  
//  ***************************************************  


//  -----  Referencias al HTML  --  input  -----
const inputRojo = document.getElementById('rojo');
const inputVerde = document.getElementById('verde');
const inputAzul = document.getElementById('azul');

//  -----  Referencias al HTML Botones  -----
const btnDecrementoRojo = document.getElementById('btnDecrementoRojo');
const btnIncrementoRojo = document.getElementById('btnIncrementoRojo');

const btnDecrementoVerde = document.getElementById('btnDecrementoVerde');
const btnIncrementoVerde = document.getElementById('btnIncrementoVerde');

const btnDecrementoAzul = document.getElementById('btnDecrementoAzul');
const btnIncrementoAzul = document.getElementById('btnIncrementoAzul');


//  -----  Referencias al HTML  --  parrafos  -----
const textoRojo =document.getElementById('texto-rojo');
const textoVerde =document.getElementById('texto-verde');
const textoAzul =document.getElementById('texto-azul');

//  -----  obtenemos los valores de los input  -----
let rojo = parseInt(inputRojo.value);
let verde = parseInt(inputVerde.value);
let azul = parseInt(inputAzul.value);



//  -----  Actualizar el texto de los parrafos.
textoRojo.innerText = rojo;
textoVerde.innerText = verde;
textoAzul.innerText = azul;


//  -----  Evento al interactuar con los Indicadores  -----
function actualizarColor(rojo, verde, azul) {

    const colorRGB = `rgb(${rojo}, ${verde}, ${azul})`;
    document.body.style.backgroundColor = colorRGB;

    console.log(rojo, verde, azul);

}


//  -----  Evento Indicador para Actualizar RED (Rojo)  -----
inputRojo.addEventListener('change', (e) => {

    rojo = parseInt(e.target.value);
    textoRojo.innerText = rojo;
    actualizarColor(rojo, verde, azul);

});


//  -----  Evento Botones para Actualizar RED (Rojo)  -----
btnDecrementoRojo.addEventListener('click', () => {
    if (rojo > 0) {
        rojo -= 1;
        inputRojo.value = rojo;
        textoRojo.innerText = rojo;
        actualizarColor(rojo, verde, azul);
    }
});

btnIncrementoRojo.addEventListener('click', () => {
    if (rojo < 255) {
        rojo += 1;
        inputRojo.value = rojo;
        textoRojo.innerText = rojo;
        actualizarColor(rojo, verde, azul);
    }
});


//  -----  Evento Indicador para Actualizar GREEN (Verde)  -----
inputVerde.addEventListener('change', (e) => {

    verde = parseInt(e.target.value);
    textoVerde.innerText = verde;
    actualizarColor(rojo, verde, azul);

});

//  -----  Evento Botones para Actualizar GREEN (Verde)  -----
btnDecrementoVerde.addEventListener('click', () => {
    if (verde > 0) {
        verde -= 1;
        inputVerde.value = verde;
        textoVerde.innerText = verde;
        actualizarColor(rojo, verde, azul);
    }
});

btnIncrementoVerde.addEventListener('click', () => {
    if (verde < 255) {
        verde += 1;
        inputVerde.value = verde;
        textoVerde.innerText = verde;
        actualizarColor(rojo, verde, azul);
    }
});


//  -----  Evento Indicador para Actualizar BLUE (Azul)  -----
inputAzul.addEventListener('change', (e) => {

    azul = parseInt(e.target.value);
    textoAzul.innerText = azul;
    actualizarColor(rojo, verde, azul);

});

//  -----  Evento Botones para Actualizar GREEN (Verde)  -----
btnDecrementoAzul.addEventListener('click', () => {
    if (azul > 0) {
        azul -= 1;
        inputAzul.value = azul;
        textoAzul.innerText = azul;
        actualizarColor(rojo, verde, azul);
    }
});

btnIncrementoAzul.addEventListener('click', () => {
    if (azul < 255) {
        azul += 1;
        inputAzul.value = azul;
        textoAzul.innerText = azul;
        actualizarColor(rojo, verde, azul);
    }
});