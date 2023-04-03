<?php
include 'dp.php';

$table = $_POST['table'];
$record = $_POST['record'];

$sql = `INSERT INTO ` + $table + ` VALUES ('`;
for ($i = 0; $i < count($record); $i++) {
    $sql += $record[$i];
    $sql += `, `;
}
$sql = substr($sql, 0, -2);
$sql += `')`;
$query = $connect->query($sql);
