<?php
header('Content-Type: application/json');
include 'db.php';

$table = json_decode($_POST['table'], true);

$sql = `SELECT * FROM ` + $table;
$result = $connect->query($sql);
$value = $result->fetch_all(MYSQLI_ASSOC);
echo json_encode($value);
