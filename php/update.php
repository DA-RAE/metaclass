<?php
include 'db.php';

$table = $_POST['table'];
$column = $_POST['column'];
$value = $_POST['value'];
$idColumn = $_POST['idColumn'];
$idValue = $_POST['idValue'];

$sql = `UPDATE ` + $table + ` SET ` + $column + ` = ` + $value + ` WHERE ` + $idColumn + ` = ` + $idValue;
