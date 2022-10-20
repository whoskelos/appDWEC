var listaProyectos = [];
window.onload = function(){
    listaProyectos.push(["Fruteria"]);
    listaProyectos.push(["Pizzeria"]);
    listaProyectos.push(["Tienda"]);
    listaProyectos.push(["Montaditos"]);
    listaProyectos.push(["Kebab"]);
    listaProyectos.push(["Carrefour"]);
    listaProyectos.push(["Mercadona"]);
    var cajaAcciones = document.getElementsByClassName("acciones")[0];
    cajaAcciones.innerHTML = `
        <button onclick="cancelar()">Cancelar</button>
        <button onclick="ordenarProyectos()">Ordenar</button>
        <button onclick="addProyecto()">Nuevo</button>
        <button onclick="javascript:window.print()">Imprimir</button>
    `;
    pintarProyectos(listaProyectos);

}

function pintarProyectos(lista) {
    let cajaCentral = document.getElementById("central");
    cajaCentral.innerHTML = "";
    let tabla = document.createElement("table");
    cajaCentral.appendChild(tabla);
    let cabecera = document.createElement("thead");
    let titulo = document.createElement("th");
    tabla.appendChild(cabecera);
    cabecera.appendChild(titulo);
    titulo.innerHTML = "Nombre proyecto";
    lista.forEach(proyecto => {
        let tr = document.createElement("tr");
        tabla.appendChild(tr);
        let celda = document.createElement("td");
        tr.appendChild(celda);
        celda.innerHTML = proyecto;
    });
}

function cancelar() {
    location.href = "aterrizaje.html";
}
function ordenarProyectos() {
    var listaOrdenada = listaProyectos.sort();
    pintarProyectos(listaOrdenada);
}
function addProyecto() {
    let nuevoProyecto = prompt("Escriba el nombre del nuevo proyecto");
    listaProyectos.push(nuevoProyecto);
    pintarProyectos(listaProyectos);
}
