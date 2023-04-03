<?php
include 'dp.php';

$language = $_POST['language'];
$level = $_POST['level'];
$chapter = $_POST['chapter'];
$gubun = $_POST['gubun'];
$kl = $_POST['kl'];
$cl = $_POST['cl'];
$el = $_POST['el'];
$rl = $_POST['rl'];
$regdate = $_POST['regdate'];

$table = $_POST['table'];
$query = mysqli_query($connect, 'INSERT INTO ' + $table + ` VALUES ('` + '');
