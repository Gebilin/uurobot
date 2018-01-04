<?php
/**
 * Created by PhpStorm.
 * User: Administrator
 * Date: 2017-11-28
 * Time: 11:28
 */
$filename = $_GET["name"];
if (isset($filename)){
    $file=fopen("resource/".$filename,"r");
    header("Content-Type: application/octet-stream");
    header("Accept-Ranges: bytes");
    header("Accept-Length: ".filesize("resource/".$filename));
    header("Content-Disposition: attachment; filename=".$filename);
    echo fread($file,filesize("resource/".$filename));
    fclose($file);
}

