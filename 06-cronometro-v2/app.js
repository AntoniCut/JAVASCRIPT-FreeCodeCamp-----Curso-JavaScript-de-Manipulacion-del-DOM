//  ************************************************  
//  **********  /06-cronometro-v2/app.js  **********  
//  ************************************************  


//  -----  Referencias al HTML  -----
const horasMarcador = document.getElementById('horasMarcador');
const minutosMarcador = document.getElementById('minutosMarcador');
const segundosMarcador = document.getElementById('segundosMarcador');
const centesimasMarcador = document.getElementById('centesimasMarcador');

const botonInicioPausa = document.getElementById('boton-inicio-pausa');
const botonReiniciar = document.getElementById('boton-reiniciar');

//  -----  Variables  -----
let [horas, minutos, segundos, centesimas] = [0, 0, 0, 0];
let intervaloDeTiempo;
let estadoCronometro = 'pausado';


//  -----  Definición de Funciones  -----
function actualizarCronometro() {

    centesimas++;

    if (centesimas / 100 === 1) {
        centesimas = 0;
        segundos++;
        if (segundos / 60 === 1) {
            segundos = 0;
            minutos++;
            if (minutos / 60 === 1) {
                minutos = 0;
                horas++;
            }
        }
    }

    // Actualizar solo las centésimas cada vez
    centesimasMarcador.innerText = `${asignarFormato(centesimas)}`;;

    // Actualizar los segundos solo si han cambiado
    if (centesimas === 0) {
        segundosMarcador.innerText = `${asignarFormato(segundos)}:`;
    }

    // Actualizar los minutos solo si han cambiado
    if (centesimas === 0 && segundos === 0) {
        minutosMarcador.innerText = `${asignarFormato(minutos)}:`;
    }

    // Actualizar las horas solo si han cambiado
    if (centesimas === 0 && segundos === 0 && minutos === 0) {
        horasMarcador.innerText = `${asignarFormato(horas)}:`;
    }

    // const centesimasConFormato = asignarFormato(centesimas);
    // const segundosConFormato = asignarFormato(segundos);
    // const minutosConFormato = asignarFormato(minutos);
    // const horasConFormato = asignarFormato(horas);

    // horasMarcador.innerText = `${horasConFormato}:`;
    // minutosMarcador.innerText = `${minutosConFormato}:`;
    // segundosMarcador.innerText = `${segundosConFormato}:`;
    // centesimasMarcador.innerText = `${centesimasConFormato}`;
    
}


function asignarFormato(unidadDeTiempo) {
    return unidadDeTiempo < 10 ? '0' + unidadDeTiempo : unidadDeTiempo;
}


function iniciarCronometro() {
    intervaloDeTiempo = window.setInterval(actualizarCronometro, 10);  // Cambiado a 10ms para actualizar cada centésima
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
    centesimas = 0;
    horasMarcador.innerText = '00:';
    minutosMarcador.innerText = '00:';
    segundosMarcador.innerText = '00:';
    centesimasMarcador.innerText = '00';
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

// //  -----  Referencias al HTML  -----
// const horasMarcador = document.getElementById('horasMarcador');
// const minutosMarcador = document.getElementById('minutosMarcador');
// const segundosMarcador = document.getElementById('segundosMarcador');
// const centesimasMarcador = document.getElementById('centesimasMarcador');

// const botonInicioPausa = document.getElementById('boton-inicio-pausa');
// const botonReiniciar = document.getElementById('boton-reiniciar');

// //  -----  Variables  -----
// let [horas, minutos, segundos, centesimas] = [0, 0, 0, 0];
// let intervaloDeTiempo;
// let estadoCronometro = 'pausado';


// //  -----  Definición de Funciones  -----
// function actualizarCronometro() {

//     centesimas++;

//     if (centesimas / 100 === 1) {
//         centesimas = 0;
//         segundos++;
//         if (segundos / 60 === 1) {
//             segundos = 0;
//             minutos++;
//             if (minutos / 60 === 1) {
//                 minutos = 0;
//                 horas++;
//             }
//         }
//     }

//     const centesimasConFormato = asignarFormato(centesimas);
//     const segundosConFormato = asignarFormato(segundos);
//     const minutosConFormato = asignarFormato(minutos);
//     const horasConFormato = asignarFormato(horas);

//     horasMarcador.innertText = `${horasConFormato}:`;
//     minutosMarcador.innertText = `${minutosConFormato}:`;
//     segundosMarcador.innertText = `${segundosConFormato}:`;
//     centesimasMarcador.innertText = `${centesimasConFormato}`;
    
// }


// function asignarFormato(unidadDeTiempo) {
//     return unidadDeTiempo < 10 ? '0' + unidadDeTiempo : unidadDeTiempo;
// }


// function iniciarCronometro() {
//     intervaloDeTiempo = window.setInterval(actualizarCronometro, 10);  // Cambiado a 10ms para actualizar cada centésima
//     botonInicioPausa.innerHTML = '<i class="bi bi-pause-fill"></i>';
//     botonInicioPausa.classList.remove('iniciar');
//     botonInicioPausa.classList.add('pausar');
//     estadoCronometro = 'running';
// }

// function pausarCronometro() {
//     window.clearInterval(intervaloDeTiempo);
//     botonInicioPausa.innerHTML = '<i class="bi bi-play-fill">';
//     botonInicioPausa.classList.remove('pausar');
//     botonInicioPausa.classList.add('iniciar');
//     estadoCronometro = 'pausado';
// }

// function resetearVariables() {
//     window.clearInterval(intervaloDeTiempo);
//     horas = 0;
//     minutos = 0;
//     segundos = 0;
//     centesimas = 0;
//     horasMarcador.innerText = '00:';
//     minutosMarcador.innerText = '00:';
//     segundosMarcador.innerText = '00:';
//     centesimasMarcador.innerText = '00';
    
// }


// //  -----  EVENTOS  -----
// botonInicioPausa.addEventListener('click', () => {
//     if (estadoCronometro === 'pausado') iniciarCronometro()
//     else pausarCronometro();
// });


// botonReiniciar.addEventListener('click', () => {
//     resetearVariables();
//     pausarCronometro();
// });
