<?php
if (isset($_REQUEST['id'])) {
    $id = $_REQUEST['id'];
    require('conexion.php');
    $query = $dbh->prepare("DELETE FROM empleados WHERE identificador = ?");
    $result = $query->execute(array($id));
    if ($result == true) {
        echo "Empleado eliminado con exito";
    } else {
        echo "Error al eliminar empleado";
    }
}
?>