<?php
header('Content-Type: application/json');
include 'db.php';

$post = json_decode(file_get_contents('php://input'));
$table = json_decode($_POST[$post], true);

$sql = `SELECT * FROM ` + $table;
$result = $connect->query($sql);
$value = $result->fetch_all(MYSQLI_ASSOC);
echo json_encode($value);
