$(document).ready(function () {
    //variable para saber si editamos o no
    edit = false;
    //pintamos tabla con los empleados que existen actualmente
    pintarEmpleados();
    //evento para registrar empleado
    $("#emp-form").submit((e) => {
        e.preventDefault();
        let empNombre = $("#txtNombre").val();
        let empApellidos = $("#txtApellidos").val();
        let empWeb = $("#txtWeb").val();
        let url = edit === false ? "emp-add.php" : "emp-edit.php";
        if (empNombre != "" && empApellidos != "" && empWeb != "") {
            $.ajax({
                url: url,
                type: "POST",
                data: {
                    nombre: empNombre,
                    apellidos: empApellidos,
                    dirWeb: empWeb,
                    id: $("#empId").val(),
                },
                success: function (response) {
                    console.log(response);
                    $("#emp-form").trigger("reset");
                    pintarEmpleados();
                },
            });
        }
    });

    //evento para eliminar empleado
    $(document).on("click", ".btn-delete", (e) => {
        console.log(e.currentTarget.id);
        let empId = e.currentTarget.id;
        if (confirm("Esta seguro que desea eliminar empleado?")) {
            $.post("emp-delete.php", { id: empId }, function (response) {
                console.log(response);
                pintarEmpleados();
            });
        }
    });

    //evento para editar empleado
    $(document).on("click", ".btn-edit", (e) => {
        $("#empId").val(e.currentTarget.id);
        let id = $("#empId").val();
        edit = true;
        editarEmp(id);
    });
});

/**FUNCIONES DE LA APP */
function pintarEmpleados() {
    $.get("listar.php", {}, (respuesta) => {
        let empleados = JSON.parse(respuesta);
        let tabla = $("#tabla");
        tabla.html(`<thead class="bg-dark text-white">
                    <tr>
                        <th scope="col">Identificador</th>
                        <th scope="col">Nombre</th>
                        <th scope="col">apellido</th>
                        <th scope="col">Web</th>
                        <th scope="col">Opciones</th>
                    </tr>
                </thead>`);
        $.each(empleados, function (index_empleado, empleado) {
            tabla.append(`<tbody>
                        <tr>
                            <td>${empleado.identificador}</td>
                            <td>${empleado.nombre}</td>
                            <td>${empleado.apellido}</td>
                            <td>${empleado.web}</td>
                            <td>
                                <button type="button" class="btn btn-danger btn-delete" id="${empleado.identificador}"><i class="fa-solid fa-trash"></i></button>
                                <a class="btn btn-warning btn-edit" id="${empleado.identificador}"><i class="fa-solid fa-pen-to-square"></i></<a>
                            </td>
                        </tr>
                    </tbody>`);
        });
    });
}

function editarEmp(idEmp) {
    $.post("get-empleado.php",{id: idEmp}, function(response) {
        let empleado = JSON.parse(response);
        $("#txtNombre").val(empleado.nombre);
        $("#txtApellidos").val(empleado.apellido);
        $("#txtWeb").val(empleado.web);
        $("#empId").val(empleado.identificador);
    });
    console.log(edit);
}
