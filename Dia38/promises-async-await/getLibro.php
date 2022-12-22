<?php
$isbn = file_get_contents("php://input");
include "conexion.php";
$db = conectaDb();
$query = $db->prepare("SELECT * FROM libros WHERE libro_isbn = ?");
$result = $query->execute(array($isbn));
$libro = $query->fetch(PDO::FETCH_OBJ);
echo json_encode($libro);
?>