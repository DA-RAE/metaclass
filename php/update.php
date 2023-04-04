<?php
include 'db.php';

$table = $_POST['table'];

$sql = `UPDATE ` + $table + ` SET `;