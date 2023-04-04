<?php
include 'db.php';

$table = $_POST['table'];
$idColumn = $_POST['idColumn'];
$idValue = $_POST['idValue'];

$sql = `DELETE FROM ` + $table + ` WHERE ` + $idColumn + ` = ` + $idValue;
$connect->query($sql);
