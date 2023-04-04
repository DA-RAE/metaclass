<?php
header('Content-Type: application/json');
include 'db.php';

$table = json_decode($_POST['table'], true);
$idColumn = json_decode($_POST['idColumn'], true);
$idValue = json_decode($_POST['idValue'], true);

$sql = `DELETE FROM ` + $table + ` WHERE ` + $idColumn + ` = ` + $idValue;
$connect->query($sql);
$result = $connect->query($sql);
echo json_encode($result);
