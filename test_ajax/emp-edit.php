<?php
if (isset($_REQUEST['nombre']) && isset($_REQUEST['apellidos']) && isset($_REQUEST['dirWeb'])) {
    $nombre = $_REQUEST['nombre'];
    $apellidos = $_REQUEST['apellidos'];
    $web = $_REQUEST['dirWeb'];
    $id = $_REQUEST['id'];

    require("conexion.php");
    $query = $dbh->prepare("UPDATE empleados SET nombre = ?, apellido = ?, web = ? WHERE identificador = ?");
    $result = $query->execute(array($nombre,$apellidos,$web,$id));
    if ($result == true) {
        echo "Modificacion realizada correctamente";
    } else {
        echo "ERROR";
    }
}
?>