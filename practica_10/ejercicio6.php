<?php
  require('acceso_mysql.php');

 $query = "SELECT jugador_id, jugador_puesto, jugador_nombre, jugador_puntos, jugador_nacionalidad  FROM  RANKING";

$Resultado=mysqli_query($con,$query);
$arrayJugadores = array();
while ($jugador=mysqli_fetch_assoc($Resultado)) {
        $arrayJugadores[] = array_map('utf8_encode', $jugador);
}

//enviamos el array como objeto JSON
echo json_encode($arrayJugadores);
?>
