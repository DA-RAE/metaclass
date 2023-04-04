<?php
header('Content-Type: application/json');
include 'db.php';

$table = json_decode($_POST['table'], true);
$value = json_decode($_POST['value'], true);

$sql = `INSERT INTO ` + $table + ` VALUES (`;
for ($i = 0; $i < count($value); $i++) {
    $sql += $value[$i];
    $sql += `, `;
}
$sql = substr($sql, 0, -2);
$sql += `)`;
$result = $connect->query($sql);
echo json_encode($result);
