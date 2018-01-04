<?php
/**
 * Created by PhpStorm.
 * User: Administrator
 * Date: 2017-12-19
 * Time: 15:02
 */
require_once "DBPDO.php";
$pdo = new DBPDO();
$res = $pdo->select("SELECT * FROM agent");
$callback = $_GET['callback'];
echo $callback.'('.json_encode($res).')';
//echo json_encode($res);
