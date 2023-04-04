<?php
include 'db.php';

$table = $_POST['table'];
$column = $_POST['column'];
$value = $_POST['value'];

$sql = `DELETE FROM ` + $table + ` WHERE ` + $column + ` = '` + $value + `'`;
$connect->query($sql);
