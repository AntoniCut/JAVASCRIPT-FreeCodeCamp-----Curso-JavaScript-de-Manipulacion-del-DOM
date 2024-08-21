//  *********************************************************  
//  **********  /07-lista-de-tareas-jquery/app.js  **********  
//  *********************************************************  


//  -----  Referencias al HTML  -----
const $input = $('#ingresar-tarea');
const $boton = $('button');
const $listaDeTareas = $('#lista-de-tareas');


//  ----------  Cargar las tareas guardadas al iniciar  ----------
$(document).ready(function () {

    //  -----  Reseteo del Input y Obtener el Foco  -----
    $input.val('');
    $input.focus();
    cargarTareas();
});


//  -----------------------------------------------
//  ----------  Definición de Funciones  ----------
//  -----------------------------------------------

//  ----------  Agregar una Tarea  ----------
function agregarTarea() {
    if ($input.val()) {

        //  -----  Crear los elementos del DOM  -----
        crearElementosDOM($input.val(), false);

        //  -----  Guardar la Tarea en localStorage  -----
        guardarTareaEnLocalStorage($input.val(), false);

        //  -----  Reseteo del Input y Obtener el Foco  -----
        $input.val('');
        $input.focus();

    } else alert('Por Favor Ingresa una Tarea!!! - 😊');
}


//  ----------  Crear elementos DOM para una Tarea  ----------
function crearElementosDOM(valorTexto, completada) {

    //  -----  Creación de una Tarea  -----
    const $tareaNueva = $('<div>').addClass('tarea');

    //  -----  Si la Tarea está Completada???  -----
    if (completada) $tareaNueva.addClass('completada');

    //  -----  Texto ingresado por el usuario  -----
    const $texto = $('<p>').text(valorTexto);
    $tareaNueva.append($texto);

    //  -----  Crear y Agregar contenedor de iconos  -----
    const $iconos = $('<div>');

    //  -----  Iconos de Bootstrap para Completar una Tarea -----
    const $completar = $('<i>')
        .addClass('bi bi-check-circle-fill icono-completar')
        .click(completarTarea);

    //  -----  Iconos de Bootstrap para Eliminar una Tarea -----
    const $eliminar = $('<i>')
        .addClass('bi bi-trash3-fill icono-eliminar')
        .click(eliminarTarea);

    //  -----  Añadir elementos a su contenedor  -----
    $iconos.append($completar, $eliminar);
    $tareaNueva.append($iconos);
    $listaDeTareas.append($tareaNueva);
}


//  ----------  Completar una Tarea  ----------
function completarTarea() {

    //  -----  Obtenemos el elemento donde se hizo click  -----
    const $tarea = $(this).closest('.tarea');

    //  -----  Añadimos la clase completada a la tarea  -----
    $tarea.toggleClass('completada');

    //  -----  Actualizar estado en localStorage  -----
    actualizarEstadoEnLocalStorage($tarea.find('p').text().trim());
}


//  ----------  Eliminar una Tarea  ----------
function eliminarTarea() {

    //  -----  Obtenemos el elemento donde se hizo click  -----
    const $tarea = $(this).closest('.tarea');

    //  -----  Añade al Primer Hijo del Elemento Tarea el contenido del Texto  -----
    const tareaTexto = $tarea.find('p').text().trim();

    //  -----  Eliminamos Tarea del LocalStorage y del DOM  -----
    eliminarTareaDeLocalStorage(tareaTexto);
    $tarea.remove();
}


//  -------------------------------------------------
//  ----------  Funciones de localStorage  ----------
//  -------------------------------------------------


//  ----------  Guardar Tarea en localStorage  ----------
function guardarTareaEnLocalStorage(texto, completada) {

    // Obtiene las tareas del localStorage. Si no hay tareas, inicializa con un array vacío.
    let tareas = localStorage.getItem('tareasJQ') ? JSON.parse(localStorage.getItem('tareasJQ')) : [];

    // Añade la nueva tarea al array de tareas existentes. Cada tarea es un objeto con el texto y el estado de completada.
    tareas.push({ texto, completada });

    // Guarda el array actualizado de tareas en localStorage, convirtiéndolo a formato JSON.
    localStorage.setItem('tareasJQ', JSON.stringify(tareas));
}


//  ----------  Actualizar Estado en localStorage  ----------
function actualizarEstadoEnLocalStorage(tareaTexto) {

    // Obtiene el array de tareas del localStorage y lo convierte de JSON a un array de objetos.
    let tareas = JSON.parse(localStorage.getItem('tareasJQ'));

    // Recorre el array de tareas y cambia el estado de la tarea cuyo texto coincida con el proporcionado.
    tareas = tareas.map(tarea =>
        // Si el texto de la tarea coincide (después de eliminar espacios en blanco), cambia su estado de completada.
        tarea.texto.trim() === tareaTexto ? { ...tarea, completada: !tarea.completada } : tarea
    );

    // Guarda el array de tareas actualizado en localStorage.
    localStorage.setItem('tareasJQ', JSON.stringify(tareas));
}


//  ----------  Eliminar Tarea de localStorage  ----------
function eliminarTareaDeLocalStorage(tareaTexto) {

    // Obtiene el array de tareas del localStorage y lo convierte de JSON a un array de objetos.
    let tareas = JSON.parse(localStorage.getItem('tareasJQ'));

    // Filtra el array de tareas para eliminar la tarea cuyo texto coincida con el proporcionado.
    tareas = tareas.filter(tarea => tarea.texto.trim() !== tareaTexto);

    // Guarda el array de tareas actualizado (sin la tarea eliminada) en localStorage.
    localStorage.setItem('tareasJQ', JSON.stringify(tareas));
}


//  ----------  Cargar las Tareas al iniciar la aplicación  ----------
function cargarTareas() {

    // Obtiene las tareas del localStorage. Si no hay tareas, inicializa con un array vacío.
    let tareas = localStorage.getItem('tareasJQ') ? JSON.parse(localStorage.getItem('tareasJQ')) : [];

    // Recorre cada tarea y la crea en el DOM usando la función `crearElementosDOM`.
    tareas.forEach(tarea => {

        crearElementosDOM(tarea.texto, tarea.completada); // Crea y agrega al DOM cada tarea guardada, manteniendo su estado.
    });
}


//  -------------------------------
//  ----------  Eventos  ----------
//  -------------------------------

//  ----- Agrega un evento al botón para que al hacer clic se agregue una nueva tarea  -----
$boton.on('click', agregarTarea);

//  ----- Escucha el evento 'keydown' en el campo de texto (input)  -----
$input.on('keydown', (e) => {

    // -----  Si se presiona la tecla "Enter", llama a la función agregarTarea()  -----
    if (e.key === 'Enter') agregarTarea();
});



