<?php
/**
 * Created by PhpStorm.
 * User: Administrator
 * Date: 2017-12-19
 * Time: 11:31
 */
require_once "DBPDO.php";
$type = $_GET['type'];
$name = $_GET['name'];
$tel = $_GET['tel'];
$company = $_GET['company'];
$message = $_GET['message'];
$pdo = new DBPDO();
if (isset($type))
{
    if (empty($name) && empty($tel) && empty( $company) && empty($message)){
        echo '内容不能为空！';
        return;
    } else{
        $sql = "INSERT INTO agent(name,time,telephone,company,message,type,status) VALUES('$name',SYSDATE(),'$tel','$company','$message',$type,1)";
        $res = $pdo->insert($sql);
        if (!$res){
            echo '服务器异常请稍候！';
        }else{
            echo 'ok';
        }
    }
}
