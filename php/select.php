<?php
include 'db.php';

$table = $_POST['table'];

$result = $connect->query('SELECT * FROM ' + $table);
$record = array();
while ($row = $result->fetch_row()) {
    array_push($record, $row);
}
return $record;
