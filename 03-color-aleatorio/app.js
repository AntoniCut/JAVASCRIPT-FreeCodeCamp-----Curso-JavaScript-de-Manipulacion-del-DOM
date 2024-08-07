//  **************************************************
//  **********  /03-color-aleatorio/app.js  **********
//  **************************************************


//  -----  Referencias al HTML
const boton = document.querySelector('button');
const color = document.getElementById('color');


//  -----  Función que Genera un String Aleatorio  -----
const generarColorHexAleatorio = () => {

    const digitos = '0123456789ABCDEF';
    let colorHex = '#';

    for(let i=0; i<6; i++) {
        
        //  -----  Obtenemos un valor aleatorio  -----
        const indiceAleatorio = Math.floor((Math.random() * 16));

        //  ----- Actualizar Color de Fondo  -----
        colorHex += digitos[indiceAleatorio];
    }

    return colorHex;
}


//  -----  Listener 'Click'  -----
boton.addEventListener('click', () => {

    const colorAleatorio = generarColorHexAleatorio();
    
    //  -----  Actualizar el Texto  -----
    color.textContent = colorAleatorio;

    //  ----- Actualizar Color de Fondo  -----
    document.body.style.backgroundColor = colorAleatorio

});