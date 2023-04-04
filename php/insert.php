<?php
include 'db.php';

$table = $_POST['table'];
$value = $_POST['value'];

$sql = `INSERT INTO ` + $table + ` VALUES (`;
for ($i = 0; $i < count($value); $i++) {
    $sql += $value[$i];
    $sql += `, `;
}
$sql = substr($sql, 0, -2);
$sql += `)`;
$connect->query($sql);
