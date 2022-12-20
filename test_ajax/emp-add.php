<?php
if (isset($_REQUEST['nombre']) && isset($_REQUEST['apellidos']) && isset($_REQUEST['dirWeb'])) {
    $nombre = $_REQUEST['nombre'];
    $apellidos = $_REQUEST['apellidos'];
    $web = $_REQUEST['dirWeb'];

    require("conexion.php");
    $query = $dbh->prepare("INSERT INTO empleados (nombre,apellido,web) VALUES (?, ?, ?)");
    $result = $query->execute(array($nombre,$apellidos,$web));
    if ($result == true) {
        echo "Empleado registrado correctamente";
    } else {
        echo "Error al registrar el empleado";
    }
}
?>