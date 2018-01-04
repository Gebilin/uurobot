<?php
/**
 * Created by PhpStorm.
 * User: Administrator
 * Date: 2017-12-20
 * Time: 15:07
 */
require_once 'DBPDO.php';
$id = $_POST['id'];
if (isset($id)){
    //$sql = "DELETE FROM agent WHERE id = $id";
    $sql = "UPDATE agent SET STATUS = -1 WHERE id = $id";
    $pdo = new DBPDO();
    echo $pdo->update($sql)?'ok':'no';
}
