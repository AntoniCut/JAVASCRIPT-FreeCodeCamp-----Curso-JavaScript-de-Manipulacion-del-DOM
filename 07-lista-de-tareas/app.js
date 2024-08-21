//  **************************************************  
//  **********  /07-lista-de-tareas/app.js  **********  
//  **************************************************  


//  -----  Referencias al HTML  -----
const input = document.getElementById('ingresar-tarea');
const boton = document.querySelector('button');
const listaDeTareas = document.getElementById('lista-de-tareas');


//  ----------  Cargar las tareas guardadas al iniciar  ----------
document.addEventListener('DOMContentLoaded', cargarTareas);


//  -----------------------------------------------
//  ----------  Definición de Funciones  ----------
//  -----------------------------------------------

//  ----------  Agregar una Tarea  ----------
function agregarTarea() {
    if (input.value) {
        
        //  -----  Crear los elementos del DOM  -----
        crearElementosDOM(input.value, false);
        
        //  -----  Guardar la Tarea en localStorage  -----
        guardarTareaEnLocalStorage(input.value, false);
        
        //  -----  Reseteo del Input y Obtener el Foco  -----
        input.value = '';
        input.focus();

    } else alert('Por Favor Ingresa una Tarea!!! - 😊');
}


//  ----------  Crear elementos DOM para una Tarea  ----------
function crearElementosDOM(valorTexto, completada) {
    
    //  -----  Creación de una Tarea  -----
    const tareaNueva = document.createElement('div');
    tareaNueva.classList.add('tarea');
    
    //  -----  Si la Tarea esta Completada???  -----
    if (completada) tareaNueva.classList.add('completada'); 

    //  -----  Texto ingresado por el usuario  -----
    const texto = document.createElement('p');
    texto.innerText = valorTexto;
    tareaNueva.appendChild(texto);

    //  -----  Crear y Agregar contenedor de iconos  -----
    const iconos = document.createElement('div');
    
    //  -----  Iconos de Bootstrap para Completar una Tarea -----
    const completar = document.createElement('i');
    completar.classList.add('bi', 'bi-check-circle-fill', 'icono-completar');
    completar.addEventListener('click', completarTarea);

    //  -----  Iconos de Bootstrap para Eliminar una Tarea -----
    const eliminar = document.createElement('i');
    eliminar.classList.add('bi', 'bi-trash3-fill', 'icono-eliminar');
    eliminar.addEventListener('click', eliminarTarea);

    //  -----  Añadir elementos a su contenedor  -----
    iconos.append(completar, eliminar);
    tareaNueva.appendChild(iconos);
    listaDeTareas.appendChild(tareaNueva);
}


//  ----------  Completar una Tarea  ----------
function completarTarea(e) {
    
    //  -----  Obtenemos el elemento donde se hizo click  -----
    const tarea = e.target.parentNode.parentNode;
    
    //  -----  Añadimos la clase completada a la tarea  -----
    tarea.classList.toggle('completada');

    //  -----  Actualizar estado en localStorage  -----
    actualizarEstadoEnLocalStorage(tarea.firstChild.textContent.trim());
}


//  ----------  Eliminar una Tarea  ----------
function eliminarTarea(e) {
    
    //  -----  Obtenemos el elemento donde se hizo click  -----
    const tarea = e.target.parentNode.parentNode;

    //  -----  Añade al Primer Hijo del Elemento Tarea el contenido del Texto  -----
    const tareaTexto = tarea.firstChild.textContent.trim();
    
    //  -----  Eliminamos Tarea del LocalStorage y del DOM  -----
    eliminarTareaDeLocalStorage(tareaTexto);
    tarea.remove();
}



//  -------------------------------------------------
//  ----------  Funciones de localStorage  ----------
//  -------------------------------------------------

//  ----------  Guardar Tarea en localStorage  ----------
function guardarTareaEnLocalStorage(texto, completada) {
    
    // Obtiene las tareas del localStorage. Si no hay tareas, inicializa con un array vacío.
    let tareas = localStorage.getItem('tareas') ? JSON.parse(localStorage.getItem('tareas')) : [];
    
    // Añade la nueva tarea al array de tareas existentes. Cada tarea es un objeto con el texto y el estado de completada.
    tareas.push({ texto, completada });
    
    // Guarda el array actualizado de tareas en localStorage, convirtiéndolo a formato JSON.
    localStorage.setItem('tareas', JSON.stringify(tareas));
}


//  ----------  Actualizar Estado en localStorage  ----------
function actualizarEstadoEnLocalStorage(tareaTexto) {
    
    // Obtiene el array de tareas del localStorage y lo convierte de JSON a un array de objetos.
    let tareas = JSON.parse(localStorage.getItem('tareas'));
    
    // Recorre el array de tareas y cambia el estado de la tarea cuyo texto coincida con el proporcionado.
    tareas = tareas.map(tarea => 
        // Si el texto de la tarea coincide (después de eliminar espacios en blanco), cambia su estado de completada.
        tarea.texto.trim() === tareaTexto ? { ...tarea, completada: !tarea.completada } : tarea
    );
    
    // Guarda el array de tareas actualizado en localStorage.
    localStorage.setItem('tareas', JSON.stringify(tareas));
}


//  ----------  Eliminar Tarea de localStorage  ----------
function eliminarTareaDeLocalStorage(tareaTexto) {
    
    // Obtiene el array de tareas del localStorage y lo convierte de JSON a un array de objetos.
    let tareas = JSON.parse(localStorage.getItem('tareas'));
    
    // Filtra el array de tareas para eliminar la tarea cuyo texto coincida con el proporcionado.
    tareas = tareas.filter(tarea => tarea.texto.trim() !== tareaTexto);
    
    // Guarda el array de tareas actualizado (sin la tarea eliminada) en localStorage.
    localStorage.setItem('tareas', JSON.stringify(tareas));
}


//  ----------  Cargar las Tareas al iniciar la aplicación  ----------
function cargarTareas() {
    
    // Obtiene las tareas del localStorage. Si no hay tareas, inicializa con un array vacío.
    let tareas = localStorage.getItem('tareas') ? JSON.parse(localStorage.getItem('tareas')) : [];
    
    // Recorre cada tarea y la crea en el DOM usando la función `crearElementosDOM`.
    tareas.forEach(tarea => {

        crearElementosDOM(tarea.texto, tarea.completada); // Crea y agrega al DOM cada tarea guardada, manteniendo su estado.
    });
}



//  -------------------------------
//  ----------  Eventos  ----------
//  -------------------------------


//  ----- Agrega un evento al botón para que al hacer clic se agregue una nueva tarea  -----
boton.addEventListener('click', agregarTarea);  


//  ----- Escucha el evento 'keydown' en el campo de texto (input)  -----
input.addEventListener('keydown', (e) => {      
    
    // -----  Si se presiona la tecla "Enter", llama a la función agregarTarea()  -----
    if (e.key === 'Enter') agregarTarea();      
});


