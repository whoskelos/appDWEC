var listaProyectos = [];
onload = () => {
    cargarProyectos();
    mostrarProyectos(listaProyectos);
};

function cargarProyectos() {
    listaProyectos.push(
        new Proyecto(
            "1",
            "1234",
            "Iberdrola",
            "iberdrola.png",
            "Cambio de la web institucional"
        )
    );
    listaProyectos.push(
        new Proyecto(
            "2",
            "5678",
            "Endesa",
            "endesa.png",
            "Cambio de la web institucional"
        )
    );
}

function mostrarProyectos(lista) {
    var divCentral = document.getElementById("central"); 
    divCentral.innerHTML =
        "<h1 class='tituloProyectos'>PROYECTOS</h1><table><tbody></tbody></table>";
    var tbody = divCentral.getElementsByTagName("tbody")[0];
    lista.forEach((proyecto) => {
        tbody.innerHTML += `<tr>
        <td><img src="img/${proyecto.imagen}" class="logo-proyectos"></img></td>
        <td>${proyecto.nombre}</td>
        <td>${proyecto.descripcion}</td>
        <td>${proyecto.mostrarFechaInicio()}</td>
        <td>${proyecto.mostrarFechaFin()}</td>
        <td>${proyecto.estado}</td>
        </tr>`;
    });
}

function nuevoProyecto() {
    var divCentral = document.getElementById("central");
    if (!document.getElementById("cajaNuevoProyecto")) {
        var divNuevo = document.createElement("div");
        divCentral.appendChild(divNuevo);
        divNuevo.id = "cajaNuevoProyecto";
        divNuevo.innerHTML = `
            <form>
                <label>ID proyecto</label>
                <input id="idNewProyecto" type="number">
                <label>ID cliente proyecto</label>
                <input id="idClienteNewProyecto" type="number">
                <label>Nombre proyecto</label>
                <input id="nombreNewProyecto" type="text" required>
                <button id="btn-add" type="button">Añadir</button>
            </form>
        `;
    }
    var idNuevoProyecto = document.getElementById("idNewProyecto");
    var idClNuevoProyecto = document.getElementById("idClienteNewProyecto");
    var nombreNuevoProyecto = document.getElementById("nombreNewProyecto");
    var btnAdd = document.getElementById("btn-add");
    btnAdd.addEventListener("click", function () {
        if (
            listaProyectos.findIndex((ele) => ele.id_proyecto == idNuevoProyecto.value)     == -1 &&
            idClNuevoProyecto.value != "" &&
            nombreNuevoProyecto.value != ""
        ) {
            listaProyectos.push(new Proyecto(idNuevoProyecto.value, idClNuevoProyecto.value, nombreNuevoProyecto.value));
            mostrarProyectos(listaProyectos);
        } else {
            console.log("ya existe ese ID y/o rellene todos los campos, no se puede añadir el proyecto");
        }
    });
}

function filtrarProyecto() {
    var cajaBuscador = document.getElementById("cajaFiltro");
    var proyectoFiltrado = listaProyectos.find((ele) => ele.nombre.toLowerCase() == cajaBuscador.value.toLowerCase());
    var divCentral = document.getElementById("central");
    divCentral.innerHTML =
        "<h1 class='tituloProyectos'>PROYECTOS</h1><table><tbody></tbody></table>";
    var tbody = divCentral.getElementsByTagName("tbody")[0];
    tbody.innerHTML += `<tr>
        <td><img src="img/${proyectoFiltrado.imagen}" class="logo-proyectos"></img></td>
        <td>${proyectoFiltrado.nombre}</td>
        <td>${proyectoFiltrado.descripcion}</td>
        <td>${proyectoFiltrado.mostrarFechaInicio()}</td>
        <td>${proyectoFiltrado.mostrarFechaFin()}</td>
        <td>${proyectoFiltrado.estado}</td>
        </tr>`;
}

function ordenar() {
    listaProyectos.sort((a, b) => {
        if (a.nombre < b.nombre) {
            return -1;
        }
        if (a.nombre > b.nombre) {
            return 1;
        }
        return 0;
    });
    mostrarProyectos(listaProyectos);
}

function imprimir() {
    window.print();
}

function cancelar() {
    location.href = "aterrizaje.html";
}
