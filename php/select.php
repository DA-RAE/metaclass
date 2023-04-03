<?php
include 'db.php';

$table = $_POST['table'];
$result = $connect->query('SELECT * FROM ' + $table);

$array = array();
while ($row = $result->fetch_row()) {
    array_push($array, $row);
}
return $array;
