<?php
$nombre = $_REQUEST['nombre'];
$letra = $_REQUEST['letra'];
switch ($nombre) {
    case 'kelvin':
        switch($letra) {
            case "vocal":
                echo "ok";
            break;
            case "consonante":
                echo "error";
        }
        break;
    case 'jesus':
        switch ($letra) {
            case 'vocal':
                echo "ok";
                break;
            case 'consonante':
                echo "error";
                break;
        }
    break;
    default:
        echo "seleccione opciones";
        break;
}
?>