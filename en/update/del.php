<?php
/**
 * Created by PhpStorm.
 * User: Administrator
 * Date: 2017-11-9
 * Time: 16:18
 */
$id = $_GET["id"];
//json路径
$industry_file = "../json/industry.json";
//读取json
$industry_json = file_get_contents($industry_file);
//转成数组
$industry_array = json_decode($industry_json, true);

if (isset($id)) {
    for ($i = 0; $i < count($industry_array); $i++) {
        if ($industry_array[$i]["id"] == $id) {
            $url = "../".$industry_array[$i]["url"];
            array_splice($industry_array, $i, 1);
            delDirAndFile($url);
        }
    }
//将数组转成json字符串
    $industry_string = json_encode($industry_array);
//将字符串写入文件
    file_put_contents($industry_file, $industry_string);
}
Header("HTTP/1.1 303 See Other");
Header("Location: newlist.html");
exit;

function delDirAndFile( $dirName )
{
    if ( $handle = opendir( "$dirName" ) ) {
        while ( false !== ( $item = readdir( $handle ) ) ) {
            if ( $item != "." && $item != ".." ) {
                if ( is_dir( "$dirName/$item" ) ) {
                    delDirAndFile( "$dirName/$item" );
                } else {
                    if( unlink( "$dirName/$item" ) )echo "成功删除文件： $dirName/$item\n";
                }
            }
        }
        closedir( $handle );
        if( rmdir( $dirName ) )echo "成功删除目录： $dirName\n";
    }
}
