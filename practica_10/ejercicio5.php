<?php
require('acceso_mysql.php');

$query = "SELECT * FROM  ranking";

$resultado=mysqli_query($con,$query);
while ($mostrarFila=mysqli_fetch_array($resultado)) {
    echo $mostrarFila['jugador_id']."-".$mostrarFila['jugador_puesto']."-". $mostrarFila['jugador_nombre']."-". $mostrarFila['jugador_nacionalidad']."-". $mostrarFila['jugador_puntos'].";";
  }
?>
