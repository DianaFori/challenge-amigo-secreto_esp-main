// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
//Solicitar el usuario ingresar una lista de nombres limitada de sus mejores amigos.

document.addEventListener("DOMContentLoaded", function () {
    let cantidadNombres = 5;
    let nombres = [];
    let nombresSorteados = new Set();

    const input = document.getElementById("amigo");
    const listaAmigos = document.getElementById("listaAmigos");
    const resultado = document.getElementById("resultado");

    const botonAgregar = document.getElementById("botonAgregar");
    const botonModificar = document.getElementById("botonModificar");
    const botonSortear = document.getElementById("botonSortear");
    const botonReiniciar = document.getElementById("botonReiniciar");

// Para validar que el usuario solo ingrese nombres alfabeticos

   
    // Función para actualizar la lista en pantalla
    function actualizarListaNombres() {
        listaAmigos.innerHTML = ""; // limpiar y actualizar lista

        nombres.forEach((nombre) => {
            const li = document.createElement("li");
            li.textContent = nombre;
            listaAmigos.appendChild(li);
        });

        // Habilitar botón de sorteo cuando haya ingresado el maximo de nombres
        botonSortear.disabled = nombres.length !== cantidadNombres;
    }
    const regexNombre = /^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/;

    function agregarAmigo() {
        const nombre = input.value.trim();

        if (!nombre) {
            alert("Por favor, ingrese un nombre válido.");
            return;
        }

        if (!regexNombre.test(nombre)) {
            alert("Solo se permiten letras y espacios. No se aceptan números ni caracteres especiales.");
            input.value = ""; 
            return;
        }

        if (nombres.includes(nombre)) {
            alert("Este nombre ya ha sido ingresado. Intente con otro.");
            return;
        }

        if (nombres.length >= cantidadNombres) {
            alert("Has alcanzado el máximo de nombres permitidos.");
            return;
        }

        nombres.push(nombre);
        input.value = ""; 
        actualizarListaNombres();
    }

    // Función para modificar un nombre antes del sorteo
    function modificarNombre() {
        if (nombres.length === 0) {
            alert("No hay nombres ingresados para modificar.");
            return;
        }

        let nombreActual = prompt("Ingrese el nombre que desea modificar:");
        if (!nombres.includes(nombreActual)) {
            alert("El nombre no está en la lista.");
            return;
        }

        let nuevoNombre = prompt("Ingrese el nuevo nombre:");
        if (!nuevoNombre || nombres.includes(nuevoNombre)) {
            alert("El nuevo nombre no es válido o ya existe.");
            return;
        }

        let index = nombres.indexOf(nombreActual);
        nombres[index] = nuevoNombre;
        actualizarListaNombres();
    }

    // Función para sortear un amigo al azar
    function sortearAmigo() {
        if (nombresSorteados.size === nombres.length) {
            alert("Todos los nombres ya fueron sorteados.");
            return;
        }

        let nombreAleatorio;
        do {
            nombreAleatorio = nombres[Math.floor(Math.random() * nombres.length)];
        } while (nombresSorteados.has(nombreAleatorio));

        nombresSorteados.add(nombreAleatorio);
        resultado.textContent = `🎉 Tu amigo secreto es: ${nombreAleatorio} 🎉`;

        // Habilitar botón de reiniciar
        botonReiniciar.disabled = false;
    }
// funcion para limpiar y borrar los datos ingresados una vez se reinicie el juego
    function reiniciarSorteo() {
    nombres = [];  
    nombresSorteados.clear();

    listaAmigos.innerHTML = "";  
    resultado.textContent = "";  
//Deshabilitar el botón sortear amigo y reiniciar juego hasta el que usuario haya ingresado todos los nombres
    botonSortear.disabled = true;  
    botonReiniciar.disabled = true;  

    alert("El juego ha sido reiniciado. Puedes ingresar nuevos nombres.");
}

    //detecta la utilizada o acción de los botones
    botonAgregar.addEventListener("click", agregarAmigo);
    botonModificar.addEventListener("click", modificarNombre);
    botonSortear.addEventListener("click", sortearAmigo);
    botonReiniciar.addEventListener("click", reiniciarSorteo);

    // Agregar y guardar dato ingredado al presionar Enter.
    input.addEventListener("keypress", function (event) {
        if (event.key === "Enter") {
            agregarAmigo();
        }
    });
});
