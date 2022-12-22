<?php
function conectaDb() {
    try {
        
        $dsn = "mysql:host=mysql;dbname=2daw";
        $username= "root";
        $password = "root";
        $dbh = new PDO($dsn,$username,$password);
        return $dbh;
    } catch (Exception $e) {
        echo $e->getMessage();
    }
}
?>