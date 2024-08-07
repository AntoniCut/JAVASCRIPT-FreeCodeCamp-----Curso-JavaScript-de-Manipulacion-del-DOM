//  *******************************
//  **********  /app.js  **********
//  *******************************


//  **********  getElementById  **********
console.warn('*****  getElementById  *****');

const contenedor = document.getElementById('contenedor');
console.log("contenedor: ", contenedor);
console.log("contenedor innerHTML: ", contenedor.innerHTML);
console.log("contenedor innerHTML - tipo de dato: ", typeof contenedor.innerHTML);


const titulo = document.getElementById('titulo');
console.log("\ntitulo: ", titulo);
console.log("titulo - tipo de dato: ", typeof titulo);
console.log("Texto del Título:", titulo.innerText);                 //  Texto del titulo
console.log("Tipo de etiqueta del Título:", titulo.tagName);        //  Tipo de etiqueta


//  **********  getElementByClassName  **********
console.warn('\n*****  getElementByClassName  *****');

const toppings = document.getElementsByClassName('topping');
console.log("getElementByClassName de toppins: ", toppings);
console.log("1º Elemento de toppins: ", toppings[0]);
console.log("ID 1º Elemento de toppins: ", toppings[0].id);
console.log("2º Elemento de toppins: ", toppings[1]);
console.log("3º Elemento de toppins: ", toppings[2]);
console.log("ID 3º Elemento de toppins: ", toppings[2].id);
console.log("4º Elemento de toppins: ", toppings[3]);

const fondoMarron = document.getElementsByClassName('fondo-marron');
console.log("getElementByClassName de fondoMarron: ", fondoMarron);

const fondoNaranja = document.getElementsByClassName('fondo-naranja');
console.log("getElementByClassName de fondoNaranja: ", fondoNaranja);



//  **********  getElementByTagName  **********
console.warn('\n*****  getElementByTagName  *****');

const lisToppins = document.getElementsByTagName("li");
console.log("getElementByTagName de lisToppings: ", lisToppins);



//  **********  querySelector  **********
console.warn('\n*****  querySelector  *****');

const aceituna = document.querySelector("#aceitunas");
console.log("ID de aceitunas: ", aceituna);

const cebolla1 = document.querySelector(".topping.fondo-naranja");
console.log("cebolla1: ", cebolla1);

const cebolla2 = document.querySelector("ul li.fondo-naranja");
console.log("cebolla2: ", cebolla2);

const cebolla3 = document.querySelector("ul li:not(.fondo-marron)");
console.log("cebolla3: ", cebolla3);



//  **********  querySelectorAll  **********
console.warn('\n*****  querySelectorAll  *****');

const lis = document.querySelectorAll("li");
console.log("Todos los lis: ", lis);

const toppingNaranjas = document.querySelectorAll("li.fondo-naranja");
console.log("Todos los toppings Naranjas: ", toppingNaranjas);

const toppingMarrones = document.querySelectorAll("li.fondo-marron");
console.log("Todos los toppings Naranjas: ", toppingMarrones);



//  **********  Asignar Estilos CSS  **********
console.warn('\n*****  Asignar Estilos CSS  *****');

const primerTopping = document.querySelector('li');
primerTopping.style.backgroundColor = 'blue';
primerTopping.style.color = '#6dff00';
primerTopping.style.textTransform = 'uppercase';

console.log(primerTopping.style);


//  *****  Añadir Texto  *****
console.warn('\n*****  Añadir Texto  *****');

const listaDeToppins = document.getElementById('lista-toppings');
console.log("Lista de Toppings: ", listaDeToppins);
//console.log('> innerText');
console.log("innerText: ", listaDeToppins.innerText);
console.log("textContent: ", listaDeToppins.textContent);
console.log("innerHTML: ", listaDeToppins.innerHTML);


//  *****  Modificar Texto  *****
console.warn('\n*****  Modificar Texto  *****');

//const titulo = document.getElementById('titulo');  creada al principio.
console.log(titulo);
console.log(titulo.innerText);
console.log(titulo.innerText = 'Mis Toppings Favoritos');
console.log(titulo.innerText = '🍕 Mis Toppings Favoritos');


//  *****  Atributos  *****
console.warn('\n*****  Atributos  *****');

const enlace = document.getElementsByTagName('a');
console.log(enlace);
console.log(enlace[0].getAttribute('href'));
console.log(enlace[0].removeAttribute('href'));

enlace[0].innerText = 'google';
console.log(enlace[0].setAttribute('href', 'https://www.google.es'));


//  *****  Clases  *****
console.warn('\n*****  Clases  *****');

let tercerTopping = document.querySelectorAll('li:nth-child(3)');
console.log("tercerTopping: ", tercerTopping);
console.log("tercerTopping - Lista de Clase: ", tercerTopping[0].classList);

tercerTopping = tercerTopping[0];
console.log("tercerTopping: ", tercerTopping);
console.log("tercerTopping - value: ", tercerTopping.classList.value);

tercerTopping.classList.add('texto-verde');
console.log("primerTopping - añadir clase: ", tercerTopping.classList);

console.log("Contiene la clase fondo-marron: ", tercerTopping.classList.contains('fondo-marron'));
console.log("Contiene la clase fondo-naranja: ", tercerTopping.classList.contains('fondo-naranja'));
tercerTopping.classList.remove('texto-verde');


//  *****  Crear, Agregar y Eliminar Elementos  *****
console.warn('\n*****  Crear, Agregar y Eliminar Elementos  *****');

//const listaDeToppins = document.getElementById('lista-toppings');  //  creado antes.
const toppingNuevo = document.createElement('li');
toppingNuevo.classList.add('topping', 'fondo-marron');

listaDeToppins.append(toppingNuevo);
toppingNuevo.innerText = 'Nuevo Elemento';
toppingNuevo.remove();

listaDeToppins.remove();



//  **********************************************************************
//  *****  Crear una Lista Dinamicamente al Eliminarla con remove()  *****
//  **********************************************************************
console.warn('\n*****  Volvamos a Crear una Lista Nueva  *****');

// Selecciona el contenedor principal
const contenedorNuevo = document.querySelector('#contenedor');

// Crea una nueva lista
const listaToppingNueva = document.createElement('ul');
listaToppingNueva.id = 'nueva-lista-toppings';

// Crea Primer Elemento de la Lista
const primerToppingNuevo = document.createElement('li');
primerToppingNuevo.classList.add('topping', 'fondo-marron');
primerToppingNuevo.id = 'aceitunas';
primerToppingNuevo.innerText = 'Aceitunas';
listaToppingNueva.appendChild(primerToppingNuevo);

// Crea Segundo Elemento de la Lista
const segundoToppingNuevo = document.createElement('li');
segundoToppingNuevo.classList.add('topping', 'fondo-naranja');
segundoToppingNuevo.innerText = 'Cebolla';
listaToppingNueva.appendChild(segundoToppingNuevo);

// Crea Tercer Elemento de la Lista
const tercerToppingNuevo = document.createElement('li');
tercerToppingNuevo.classList.add('topping', 'fondo-marron');
tercerToppingNuevo.id = 'albahaca';
tercerToppingNuevo.innerText = 'Albahaca';
listaToppingNueva.appendChild(tercerToppingNuevo);

// Crea Cuarto Elemento de la Lista
const cuartoToppingNuevo = document.createElement('li');
cuartoToppingNuevo.classList.add('topping', 'fondo-naranja');
cuartoToppingNuevo.innerText = 'Champiñones';
listaToppingNueva.appendChild(cuartoToppingNuevo);

// Añade la nueva lista al contenedor, justo después del h1
const tituloNuevo = document.querySelector('#titulo');
tituloNuevo.insertAdjacentElement('afterend', listaToppingNueva);



//  ***************************************************
//  *****  Volvamos a crear una lista con jQuery  *****
//  ***************************************************

console.warn('\n*****  Volvamos a Crear una Lista Nueva con jQuery  *****');

// Seleccionamos el contenedor
const $contenedorNuevo = $('#contenedor');

// Crear una nueva lista dentro del nuevo contenedor
const $listaToppingNueva = $('<ul>', { id: 'nueva-lista-toppings-2' });

// Creamos el Primer elemento de la lista
const $primerToppingNuevo = $('<li>', {
    class: 'topping fondo-marron',
    id: 'aceitunas',
    text: 'Aceitunas'
});

// Creamos el Segundo elemento de la lista
const $segundoToppingNuevo = $('<li>', {
    class: 'topping fondo-naranja',
    text: 'Cebolla'
});

// Creamos el Tercer elemento de la lista
const $tercerToppingNuevo = $('<li>', {
    class: 'topping fondo-marron',
    id: 'albahaca',
    text: 'Albahaca'
});

// Creamos el Cuarto elemento de la lista
const $cuartoToppingNuevo = $('<li>', {
    class: 'topping fondo-naranja',
    text: 'Champiñones'
});

// Añadir los elementos a la lista
$listaToppingNueva.append($primerToppingNuevo, $segundoToppingNuevo, $tercerToppingNuevo, $cuartoToppingNuevo);

// Insertar la lista nueva creada con jQuery después del enlace
$('a').after($listaToppingNueva);

//  eliminamos la lista creada con jQuery.
$listaToppingNueva.remove();



//  ***************************************
//  **********  Recorrer el DOM  **********
//  ***************************************

console.warn('\n*****  Recorrer el DOM  *****');

const listaDeTopping = document.getElementById('nueva-lista-toppings');

//  -----  Parent Element y Parent Node  -----
console.log('Padre element de lista de topping: ', listaDeTopping.parentElement);
console.log('Padre Nodo de lista de topping: ', listaDeTopping.parentNode);


//  -----  Parent Parent Element y Parent Parent Node  -----
console.log('Padre del padre de lista de topping: ', listaDeTopping.parentElement.parentElement);
console.log('Padre del Padre Nodo de lista de topping: ', listaDeTopping.parentNode.parentNode);


//  -----  Children  -----
console.log('Hijos de lista de topping: ', listaDeTopping.children);

console.log('Primer Hijo de lista de topping: ', listaDeTopping.firstChild);
console.log('Primer Element Hijo de lista de topping: ', listaDeTopping.firstElementChild);

console.log('Ultimo Hijo de lista de topping: ', listaDeTopping.lastChild);
console.log('Ultimo Element Hijo de lista de topping: ', listaDeTopping.lastElementChild);

console.log('Tercer Hijo de lista de topping: ', listaDeTopping.children[2]);


//  ----- slbling --  hermanos  -----
console.log('Hermanos Anreriores de lista de topping: ', listaDeTopping.previousElementSibling);
console.log('Hermanos Anreriores de lista de topping: ', listaDeTopping.previousSibling);

{
    const titulo = document.getElementById('titulo');
    console.log("Proximo hermano de titulo: ", titulo.nextSibling);
    console.log("Proximo hermano de titulo: ", titulo.nextElementSibling);
}

console.log("1ª Hijo del 2ª Hijo del Contenedor ", contenedorNuevo.children[1].firstChild);



//  ***************************************
//  **********  Eventos del DOM  **********
//  ***************************************

console.warn('\n*****  Eventos del DOM ----- addEventListener  *****');

{
    // Seleccionar todos los elementos <li>
    const lis = document.querySelectorAll("li");

    // Iterar sobre cada elemento <li> y agregar el evento click
    lis.forEach(li => {
        li.addEventListener("click", function (e) {
            // Mostrar un alert con el texto del <li> clicado
            alert(this.textContent);
            console.log(e.target.innerText);
        });
    });

    
    const toppings = document.getElementsByClassName('topping');
    console.log("Colección HTML de la clase toppings...");
    
    for (const topping of toppings) {
        console.log(topping);
        topping.addEventListener('mouseenter', (e) => {
            console.log("Entramos en: ", e.target.innerText);
        })

    }
}


console.log("\n\n\n\n\n");