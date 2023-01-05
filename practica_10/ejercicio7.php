<?php
require('acceso_mysql.php');
$id=$_POST["identificador"];
$query = "SELECT * FROM  RANKING WHERE jugador_id=$id";

$Resultado=mysqli_query($con,$query);
if ($jugador=mysqli_fetch_assoc($Resultado)) {
    $jugador = array_map('utf8_encode', $jugador);
}

//enviamos el array como objeto JSON
echo json_encode($jugador);
?>
