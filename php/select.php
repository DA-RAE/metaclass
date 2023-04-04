<?php
include 'db.php';

$table = $_POST['table'];

$sql = `SELECT * FROM ` + $table;
$result = $connect->query($sql);
$value = array();
while ($row = $result->fetch_row()) {
    array_push($value, $row);
}
return $value;
