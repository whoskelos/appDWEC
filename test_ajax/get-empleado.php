<?php
if (isset($_REQUEST['id'])) {
    $id = $_REQUEST['id'];
    require("conexion.php");
    $query = $dbh->prepare("SELECT * FROM empleados WHERE identificador = ?");
    $result = $query->execute(array($id));
    if ($result == true) {
        $empleado = $query->fetch(PDO::FETCH_OBJ);
        $empString = json_encode($empleado);
        echo $empString;
    }else {
        echo "error";
    }
}
?>