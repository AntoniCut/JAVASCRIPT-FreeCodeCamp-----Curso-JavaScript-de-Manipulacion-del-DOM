//  *********************************************  
//  **********  /06-cronometro/app.js  **********  
//  *********************************************  


//  -----  Referencias al HTML  -----
const cronometro = document.getElementById('cronometro');
const botonInicioPausa = document.getElementById('boton-inicio-pausa');
const botonReiniciar = document.getElementById('boton-reiniciar');

//  -----  Variables  -----
let [horas, minutos, segundos] = [0, 0, 0];
let intervaloDeTiempo;
let estadoCronometro = 'pausado';


//  -----  Definición de Funciones  -----
function actualizarCronometro() {

    segundos++;

    if (segundos / 60 === 1) {
        segundos = 0;
        minutos++;
        if (minutos / 60 === 1) {
            minutos = 0;
            horas++;
        }
    }

    const segundosConFormato = asignarFormato(segundos);
    const minutosConFormato = asignarFormato(minutos);
    const horasConFormato = asignarFormato(horas);

    cronometro.innerText = `${horasConFormato}:${minutosConFormato}:${segundosConFormato}  `;
}


function asignarFormato(unidadDeTiempo) {

    return unidadDeTiempo < 10 ? '0' + unidadDeTiempo : unidadDeTiempo;
}


function iniciarCronometro() {
    intervaloDeTiempo = window.setInterval(actualizarCronometro, 1000);
    botonInicioPausa.innerHTML = '<i class="bi bi-pause-fill"></i>';
    botonInicioPausa.classList.remove('iniciar');
    botonInicioPausa.classList.add('pausar');
    estadoCronometro = 'running';
}

function pausarCronometro() {
    window.clearInterval(intervaloDeTiempo);
    botonInicioPausa.innerHTML = '<i class="bi bi-play-fill">';
    botonInicioPausa.classList.remove('pausar');
    botonInicioPausa.classList.add('iniciar');
    estadoCronometro = 'pausado';
}

function resetearVariables() {
    window.clearInterval(intervaloDeTiempo);
    horas = 0;
    minutos = 0;
    segundos = 0;
    cronometro.innerText = '00:0:00';
}


//  -----  EVENTOS  -----
botonInicioPausa.addEventListener('click', () => {

    if (estadoCronometro === 'pausado') iniciarCronometro()
    else pausarCronometro();

});


botonReiniciar.addEventListener('click', () => {

    resetearVariables();
    pausarCronometro();

});
