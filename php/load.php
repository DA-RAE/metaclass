<?php

$host = 'localhost';
$id = 'root';
$pw = 'darae155849';
$db = 'metaclass';
$table = 'word';

$connect = mysqli_connect($host, $root, $pw, $db);
$query = 'SELECT * FROM ' + $table;
$result = mysqli_query($connect, $query);
$array = array();

for ($i = 0; $i < mysqli_num_rows($result); $i++) {
    mysqli_data_seek($result, $i);
    $array[$i] = mysqli_fetch_row($result);
}

return $array;

?>