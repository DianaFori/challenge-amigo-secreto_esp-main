// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
//Solicitar el usuario ingresar una lista de nombres limitada de sus mejores amigos.

let cantidadNombres = 5; 
const nombres =[];
const nombresSorteados = new set(); //esta linea evitara que se repita los nombres en el sorteo

document.getElementById("cantidad-nombres-text").textContent = cantidadNombres;

function agregarNombre() {
    if (nombres.length >= cantidadNombres) {
        alert("Ha ingresado el maximo de nombres permitidos");
        return;
    }
    let nombre = prompt(`Ingrese un nombre ${nombres.length + 1}/${cantidadNombres}:`);
    if (!nombre || nombre.trim()==="") {
        alert("Por favor, Ingrese un nombre valido.");
        return;
    }
    if (nombres.includes(nombre)) {
        alert("Este nombre ya ha sido incresado. Intente con otro");
        return;
    }

    nombres.push(nombre);
    actualizaListaNombres();

}
function modificarNombre(){
    if (nombres.length ===0) {
        alert("No hay nombres ingresados para modificar.");
        return;
    }

    let nombreActual = prompt("Ingrese el nombre que sea modificar:");
    if (!nombres.includes(nombreActual)) {
        alert("El nombre no esta en la lista.");
        return;
    }
    let nuevoNombre = prompt("Ingrese el nombre:");
    if (!nuevoNombre || nuevoNombre.trim() === "" || nombres.includes(nuevoNombre)) {
        alert("El nuevo nombre no es validos o ya existe.");
        return;

    }
    let index = nombre.indexOf(nombreActual);
    nombre[index] = nuevoNombre;
    actualizarListaNombres();
}
function sortearNombres() {
    if (nombresSorteados.size === nombres.length) {
        alert("Todos los nombres ya fueron sorteados. Reinicie el juego.");
        return;
    }
    let nombreAleatorio;
    do{
        nombreAleatorio = nombres[Math.floor(Math.random() * nombres.length)];
    } while (nombresSorteados.has(nombresAleatorios));

    nombresSorteados.add(nombrealeatorio);
    document.getElementById("nombre-sorteados").textContent = nombreAleatorio;
}
function reinicarSorteo() {
    nombresSorteados.clear();
    document.getElementById("nombres-sorteado").textContent = "";
    alert("El sorteo ha sido reinicado.");
}
function actualizarListaNombres() {
    document.getElementById("lista-nombres").textContent = nombres.join(", ");
}


