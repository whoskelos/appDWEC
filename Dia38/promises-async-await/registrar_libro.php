<?php
if (isset($_POST['titulo']) && isset($_POST['autor']) && $_POST['fecha'] && $_POST['isbn']) {
    $isbn = $_POST['isbn'];
    $titulo = $_POST['titulo'];
    $autor = $_POST['autor'];
    $fecha = $_POST['fecha'];
    if ($isbn == "" || $titulo == "" || $autor == "" || $fecha == "") {
        echo "Llena todos los campos";
    } else {
        include 'conexion.php';
        $db = conectaDb();
        $query = $db->prepare("INSERT INTO libros (libro_isbn,libro_titulo,libro_autor,libro_fecha) VALUES (?,?,?,?)");
        $result = $query->execute(array($isbn,$titulo,$autor,$fecha));
        if ($result == true) {
            echo "ok";
        }
    }
}

?>