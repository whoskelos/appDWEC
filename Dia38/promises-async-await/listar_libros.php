<?php
include 'conexion.php';
$db = conectaDb();
$query = $db->query('SELECT * FROM libros');
$query->setFetchMode(PDO::FETCH_ASSOC);
$query->execute();
$arr_libros = [];
while ($libro = $query->fetch()) {
    $arr_libros[] = array_map('utf8_encode',$libro);
}

echo json_encode($arr_libros);
?>