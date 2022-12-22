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
        $query = $db->prepare("UPDATE libros SET libro_titulo = ?,libro_autor = ?,libro_fecha = ? WHERE libro_isbn = ?");
        $result = $query->execute(array($titulo,$autor,$fecha,$isbn));
        if ($result == true) {
            echo "ok";
        }
    }
}

?>