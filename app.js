// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
//Solicitar el usuario ingresar una lista de nombres limitada de sus mejores amigos.

let cantidadNombres = 5; 
const nombres =[];
const nombresSorteados = new Set();

 cantidadNombres;document.getElementById("cantidad-nombres-text")?.textContent =

function agregarAmigo(){

    const input = document.getElementById("amigo");
       const nombre = input.Value.trim();
     if (!nombre) {
        alert ("Por  favor, ingrese un nombre válido.");
        return;
     }  
       

    if (nombres.includes(nombre)) {
        alert("Este nombre ya ha sido incresado. Intente con otro");
        return;
    }
    if (nombres.length >= cantidadNombres) {
        alert("Has alcanzado el máximo de nombres permitidos.");
        return;
    }

    nombres.push(nombre);
    input.value = ""; //limpiar el input
    actualizarListaNombres();
    
}
document.getElementById("amigo").addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        agregarAmigo();
    }
});    

function actualizarListaNombres(){
    const lista = document.getElementById("listaAmigos");
    lista.innerHTML = ""

    nombre.forEach((nombre) => {
        const li = document.createElement("li");
        li.textContent = nombre;
        lista.appendChild(li) 
    });
    
}
    let nuevoNombre = prompt("Ingrese el nombre:");
    if (!nuevoNombre || nuevoNombre.trim() === "" || nombres.includes(nuevoNombre)) {
        alert("El nuevo nombre no es validos o ya existe.");
        return;

    }
    let index = nombres.indexOf(nombreActual);
    nombres[index] = nuevoNombre;
    actualizarListaNombres();

document.getElementById("modificarBoton").onclick = modificarNombre;

function sortearAmigos() {
    if (nombresSorteados.size === nombres.length) {
        alert("Todos los nombres ya fueron sorteados. Reinicie el juego.");
        return;
    }

    let nombreAleatorio;
    do{
        nombreAleatorio = nombres[Math.floor(Math.random() * nombres.length)];
    } while (nombresSorteados.has(nombreAleatorio));

    nombresSorteados.add(nombreAleatorio);
    
    document.getElementById("nombre-sorteados").textContent = nombreAleatorio;
}
function reiniciarSorteo() { 
    nombresSorteados.clear();
    document.getElementById("nombre-sorteado").textContent = ""; 
    alert("El sorteo ha sido reiniciado.");
}

document.getElementById("reiniciarBoton").onclick = reiniciarSorteo;

function actualizarListaNombres() {
    document.getElementById("lista-nombres").textContent = nombres.join(", ");
}


