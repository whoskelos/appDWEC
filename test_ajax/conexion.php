<?php
    $dbh = new PDO("mysql:host=mysql;dbname=2daw","root","root");
    $dbh->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    return $dbh;
?>