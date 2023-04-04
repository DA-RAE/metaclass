<?php
header('Content-Type: application/json');
include 'db.php';

$table = json_decode($_POST['table'], true);
$column = json_decode($_POST['column'], true);
$value = json_decode($_POST['value'], true);
$idColumn = json_decode($_POST['idColumn'], true);
$idValue = json_decode($_POST['idValue'], true);

$sql = `UPDATE ` + $table + ` SET ` + $column + ` = ` + $value + ` WHERE ` + $idColumn + ` = ` + $idValue;
$result = $connect->query($sql);
echo json_encode($result);
