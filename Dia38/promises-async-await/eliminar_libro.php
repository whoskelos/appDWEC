<?php
$isbn = file_get_contents("php://input");

include "conexion.php";
$db = conectaDb();
$query = $db->prepare("DELETE FROM libros WHERE libro_isbn = ?");
$result = $query->execute(array($isbn));
if ($result == true) {
    echo "ok";
}
?>