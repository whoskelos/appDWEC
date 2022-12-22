listarLibros();
function listarLibros() {
    let template = "";
    fetch("listar_libros.php", {
        method: "POST",
    })
        .then((response) => response.json())
        .then((response) => {
            response.forEach((libro) => {
                template += `<tr>
                        <td>${libro.libro_isbn}</td>
                        <td>${libro.libro_titulo}</td>
                        <td>${libro.libro_autor}</td>
                        <td>${libro.libro_fecha}</td>
                        <td>
                            <button class="btn btn-outline-danger btn-sm btn-eliminar" id="${libro.libro_isbn}"><i class="fa fa-solid fa-trash"></i></button>
                            <button class="btn btn-outline-warning btn-sm"><i class="fa-solid fa-pen-to-square"></i></button>
                        </td>
                    <tr>`;
            });
            $("#tbody").html(template);
        });
}

$(document).on("click", ".btn-eliminar", (e) => {
    let isbn = e.currentTarget.id;
    eliminar(isbn);
});

function eliminar(libro) {
    Swal.fire({
        title: "Estas seguro?",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Si!",
        cancelButtonText: "NO",
    }).then((result) => {
        if (result.isConfirmed) {
            fetch("eliminar_libro.php", {
                method: "POST",
                body: libro,
            })
                .then((response) => response.text())
                .then((response) => {
                    if (response == "ok") {
                        listarLibros();
                        Swal.fire({
                            icon: "success",
                            title: "Eliminado!",
                            showConfirmButton: false,
                            timer: 1500,
                        });
                    }
                });
        }
    });
}

document.getElementById("btn-alta").addEventListener("click", () => {
    fetch("registrar_libro.php", {
        method: "POST",
        body: new FormData(formulario),
    })
        .then((response) => response.text())
        .then((response) => {
            if (response == "ok") {
                Swal.fire({
                    icon: "success",
                    title: "Libro registrado",
                    showConfirmButton: false,
                    timer: 1500,
                });
                formulario.reset();
                listarLibros();
            }
        });
});
