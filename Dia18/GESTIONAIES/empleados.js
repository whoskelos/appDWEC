var listaEmpleados = [];
onload = () => {
    cargarEmpleados();
    mostrarEmpleados(listaEmpleados);
    var divAcciones = document.getElementById("acciones");
    var divNuevo = document.createElement("div");
    divAcciones.insertAdjacentElement("afterEnd", divNuevo);
    divNuevo.className = "buscador";
    divNuevo.innerHTML = `
        <label>Buscador</label>
        <input type="text" id="cajaFiltro">
        <button type="button" onclick="filtrarEmpleado()">Buscar</button>
    `;
};

function cargarEmpleados() {
    listaEmpleados.push(new Empleado("1", "1", "Kelvin", "Guerrero Mite", ""));
    listaEmpleados.push(new Empleado("2", "2", "Jesus", "Andres Recio", ""));
    listaEmpleados.push(
        new Empleado("3", "3", "Michael", "Retamozo García", "")
    );
}
function mostrarEmpleados(lista) {
    var divCentral = document.getElementById("central");
    divCentral.innerHTML = "<h1>Empleados</h1><table><tbody></tbody></table>";
    var tbody = document.getElementsByTagName("tbody")[0];
    var thead = document.createElement("thead");
    tbody.appendChild(thead);
    thead.innerHTML = `<tr>
        <th>Foto</th>
        <th>Nombre</th>
        <th>Apellidos</th>
        <th>Salario</th>
        <th>Fecha Incorporación</th>
        <th>Eliminar</th>
        <th>Editar</th>
    </tr>`;
    lista.forEach((emp) => {
        tbody.innerHTML += `<tr>
            <td><img src="img/${emp.foto}" class="logo-empleados" ></img></td>
            <td>${emp.nombre}</td>
            <td>${emp.apellidos}</td>
            <td>${emp.salario}</td>
            <td>${emp.mostrarFechaInc()}</td>
            <td><input type="checkbox" id="${
                emp.id_empleado
            }" name="empDel"></td>
            <td><img id="editarEmp" class="opcionesEmp" src="img/editar.png" onclick="editarEmpleado(${emp.id_empleado})"></img></td>
        </tr>`;
    });
}

function nuevoEmpleado() {
    var divCentral = document.getElementById("central");
    if (!document.getElementById("nuevoDivEmp")) {
        var nuevoDiv = document.createElement("div");
        divCentral.appendChild(nuevoDiv);
        nuevoDiv.id = "nuevoDivEmp";
        nuevoDiv.innerHTML = `
        <form>
            <label>ID Empleado</label>
            <input id="idNewEmp" type="number">
            <label>Nombre empleado</label>
            <input id="nombreNewEmp" type="text" required>
            <label>Apellidos empleado</label>
            <input id="apellidosNewEmp" type="text" required>
            <button id="btn-add" type="button">Añadir</button>
        </form>
        `;

        //datos nuevo empleado
        var idNuevoEmp = document.getElementById("idNewEmp");
        var nombreNuevoEmp = document.getElementById("nombreNewEmp");
        var apellidosNuevoEmp = document.getElementById("apellidosNewEmp");

        document
            .getElementById("btn-add")
            .addEventListener("click", function () {
                if (
                    listaEmpleados.findIndex(
                        (emp) => emp.id_empleado == idNuevoEmp.value
                    ) == -1
                ) {
                    listaEmpleados.push(
                        new Empleado(
                            idNuevoEmp.value,
                            "",
                            nombreNuevoEmp.value,
                            apellidosNuevoEmp.value
                        )
                    );
                    mostrarEmpleados(listaEmpleados);
                } else {
                    document.body.innerHTML += `<p class="error">ID existente y/o campos vacíos</p>`;
                }
            });
    }
}

function ordenar() {
    listaEmpleados.sort((a, b) => {
        if (a.nombre > b.nombre) {
            return 1;
        }
        if (a.nombre < b.nombre) {
            return -1;
        }
        return 0;
    });
    mostrarEmpleados(listaEmpleados);
}

function imprimir() {
    javascript: window.print();
}

function cancelar() {
    window.location.href = "aterrizaje.html";
}

function filtrarEmpleado() {
    var cajaBuscador = document.getElementById("cajaFiltro");
    var empleadoFiltrado = listaEmpleados.find(
        (ele) => ele.nombre.toLowerCase() == cajaBuscador.value.toLowerCase()
    );
    var divCentral = document.getElementById("central");
    divCentral.innerHTML = "<h1>Empleados</h1><table><tbody></tbody></table>";
    var tbody = document.getElementsByTagName("tbody")[0];
    var thead = document.createElement("thead");
    tbody.appendChild(thead);
    tbody.innerHTML += `<tr>
            <td><img src="img/${
                empleadoFiltrado.foto
            }" class="logo-empleados" ></img></td>
            <td>${empleadoFiltrado.nombre}</td>
            <td>${empleadoFiltrado.apellidos}</td>
            <td>${empleadoFiltrado.salario}</td>
            <td>${empleadoFiltrado.mostrarFechaInc()}</td>
        </tr>`;
}

function eliminar() {
    var empSeleccionados = document.getElementsByName("empDel");
    for (let i = 0; i < empSeleccionados.length; i++) {
        if (empSeleccionados[i].checked) {
            var indexEmp = listaEmpleados.findIndex(
                (emp) => emp.id_empleado == empSeleccionados[i].id
            );
            listaEmpleados.splice(indexEmp, 1);
        }
    }
    mostrarEmpleados(listaEmpleados);
}

function editarEmpleado(emp) {
    var divCentral = document.getElementById("central");
    var empleado = listaEmpleados.find((ele) => ele.id_empleado == emp);
    if (!document.getElementById("formEdicion")) {
        var nuevoDiv = document.createElement("div");
        divCentral.appendChild(nuevoDiv);
        nuevoDiv.className = "cajaEdicion";
        nuevoDiv.innerHTML = `
            <form id="formEdicion">
                <table>
                    <tr>
                        <td>Nombre</td>
                        <td><input type="text" id="nombreEditado" value="${empleado.nombre}"></td>
                    </tr>
                    <tr>
                        <td>Apellidos</td>
                        <td><input type="text" id="apellidoEditado" value="${empleado.apellidos}"></td>
                    </tr>
                    <tr>
                        <td>Salario</td>
                        <td><input type="text" id="salarioEditado" value="${empleado.salario}"></td>
                    </tr>
                </table>
                <button type="button" id="btn-editEmp">Editar</button>
                <button type="button" id="btn-cerrarEdit">Cerrar</button>
            </form>
        `;
    }
    document.getElementById("btn-cerrarEdit").addEventListener("click", function (){
        nuevoDiv.remove();
    });
    var nombreEditado = document.getElementById("nombreEditado");
    var apellidoEditado = document.getElementById("apellidoEditado");
    var salarioEditado = document.getElementById("salarioEditado");
    document.getElementById("btn-editEmp").addEventListener("click", function () {
        guardarCambios(nombreEditado.value, apellidoEditado.value, salarioEditado.value,empleado);
    });
}

function guardarCambios(nom,ape,sal,emp) {
    var nuevoDiv = document.getElementsByClassName("cajaEdicion")[0];
    if (nom == "" || ape == "" || sal == "") {
        nuevoDiv.innerHTML += `<p class="error">Rellene todos los campos</p>`;
    } else {
        emp.nombre = nom;
        emp.apellidos = ape;
        emp.salario = sal;
        mostrarEmpleados(listaEmpleados);
    }
}
