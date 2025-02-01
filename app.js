// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
//Solicitar el usuario ingresar una lista de nombres limitada de sus mejores amigos.

document.addEventListener("DOMContentLoaded", function () {
    let cantidadNombres = 5;
    let nombres = [];
    let nombresSorteados = new Set();

    const input = document.getElementById("amigo");
    const listaAmigos = document.getElementById("listaAmigos");
    const resultado = document.getElementById("resultado");

    const btnAgregar = document.getElementById("btnAgregar");
    const btnModificar = document.getElementById("btnModificar");
    const btnSortear = document.getElementById("btnSortear");
    const btnReiniciar = document.getElementById("btnReiniciar");

    // Función para actualizar la lista en pantalla
    function actualizarListaNombres() {
        listaAmigos.innerHTML = ""; // Limpiar la lista antes de actualizar

        nombres.forEach((nombre) => {
            const li = document.createElement("li");
            li.textContent = nombre;
            listaAmigos.appendChild(li);
        });

        // Habilitar botón de sorteo cuando hay 5 nombres
        btnSortear.disabled = nombres.length !== cantidadNombres;
    }

    // Función para agregar un nombre
    function agregarAmigo() {
        const nombre = input.value.trim();

        if (!nombre) {
            alert("Por favor, ingrese un nombre válido.");
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
        input.value = ""; // Limpiar el input
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
        btnReiniciar.disabled = false;
    }

    // Función para reiniciar el sorteo sin perder los nombres
    function reiniciarSorteo() {
        nombresSorteados.clear();
        resultado.textContent = "";
        btnReiniciar.disabled = true;
        alert("El sorteo ha sido reiniciado. Puedes sortear de nuevo.");
    }

    // ✅ Event Listeners (Detecta clics en los botones)
    btnAgregar.addEventListener("click", agregarAmigo);
    btnModificar.addEventListener("click", modificarNombre);
    btnSortear.addEventListener("click", sortearAmigo);
    btnReiniciar.addEventListener("click", reiniciarSorteo);

    // ✅ Permitir presionar ENTER en el input para agregar un nombre
    input.addEventListener("keypress", function (event) {
        if (event.key === "Enter") {
            agregarAmigo();
        }
    });
});
