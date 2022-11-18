

//DOM 
// Con querySelector hacés una búsqueda, dentro de las comillas de pone el selector CSS
//Solo selecciona el primero que encuentra por ejemplo si quiero que me retorne las etiquetas A
let container = document.querySelector(".container");

// Va a recorrer todo el arbol para retornar todos elementos que quiero buscar
//El resultado de la operación deja de ser un elemento HTML y pasa a ser UNA LISTA porque puede tener más de un elemento en la búsqueda
let link = document.querySelectorAll("a");

//Para recorrer un Array se usa: nombreDeLaVariable.forEach
//Es su ejecución tengo que DECLARAR una función, para declararla se usa la palabra reservada: function(nombreDeEstaFuncion){}
//La función recibe como argumento cada uno de los elementos que estan dentro de la lista

/*

link.forEach(function(links){
    console.log(links);

});

*/

//EVENTOS sirven para que podamos adjuntar/atar/unir una acción del usuario con una acción del programa, por ejemplo un click
// lo hago con nombreDeLaFuncion.addEventListener('acaVaElEvento',funcionConlasAccionesAEjecutar(){}) -> recibo dos argumentos

//'click' se dispara cada vez que doy un click
// en el console.log (this) retorna el elemento que disparo la ejecucion de la funcion, es el evento que hizo el usuario

/*
let celdasTabla = document.querySelectorAll("td");

celdasTabla.forEach(function(eventoTd){
    eventoTd.addEventListener('click',function(){
        console.log(this);
    })
})
*/


/*
let links = document.querySelectorAll(".close");

links.forEach(function(link){
    link.addEventListener("click",function(){
        console.log("FUNCIONÓ");
    })
})
*/



//Hay eventos que tienen comportamientos por defecto. Ej: Los links por defecto te llevan a otra página.
// Se puede prevenir que esos comportamientos se ejecuten 
//Existe un OBJETO que contiene toda la infomación de un evento cuando sucede -> lo obtenemos como ARGUMENTO de la función que estamos adjuntando al evento:

// nombreDeVariable.addEventListener("nombreDelEvento", funtion(nombreDeArgumentoParaIdentificarlo){})    al argumento se le suele llamar: event, evento, ev 

//          ev.preventDefault();    -> previene que un evento se ejecute
//          return false            -> OTRA MANERA para que el resultado de toda la funcion no se ejecute


//CON ESTO LE QUITAS UNA CLASE A LO QUE LE PEDÍS -> nombreDeVariable.classList.remove()
// la propiedad -> .classList CONTIENE TODO lo que contiene nombreDeVariable (nodo de HTML) tenes .remove | .add (esto se llama métodos)

/*
let iconos = document.querySelectorAll("i");

iconos.forEach(function(icono){
    icono.classList.remove("fa-star");
    icono.classList.add("fa-star");
})
*/




let links = document.querySelectorAll(".close");

links.forEach(function(link){
    link.addEventListener("click",function(ev){
        ev.preventDefault();

            //PASOS PARA OBTENER ELEMENTOS DE CLASE -> .close 1ro DECLARARLOS
            let content = document.querySelector(".content");

            /* 2do RECORRERLOS con .forEach
            content.forEach(function(icono){}) */

            //3ro (dentro de mi function ForEach) QUITO LA CLASE con .classList.remove
            content.classList.remove("animate__fadeInDown");
            content.classList.remove("animate__animated");

            //AGREGAMOS PARA ANIMAR SU SALIDA -> animate__fadeOutUp
            content.classList.add("animate__fadeOutUp");
            content.classList.add("animate__animated");

            //LLEVARME A MI INDEX CON location.href = "/";
            //Lo pongo dentro de función setTimeOut para que se pueda ver el efecto

            setTimeout(function(){
                location.href = "/";
            },600);

        return false;
    })
})




//MOVERNOS ENTRE DOCUMENTOS CON JS: location.href = "/" 
// Las computadoras(sus cpu) siempre ejecutan las instrucciones de un programa de manera rápida
//RETRASAR FUNCIÓN: setTimeOut  -> ejecuta UNA VEZ en tiempo indicado   |   setInterval -> ejecuta CONSTANTEMENTE en el intervalo indicado