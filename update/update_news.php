<?php
/**
 * Created by PhpStorm.
 * User: Administrator
 * Date: 2017-7-8
 * Time: 10:28
 */
//标题
$title = $_POST['title'];
//简介描述
$describe = $_POST['describe'];
//内容
$content = $_POST['content'];
//时间
$showtime=date("Y-m-d H:i:s");
//为了避免文件名字相同，用时间命名
$filename = date("Ymdhis");
//行业咨询json路径
$industry_file = "../json/industry.json";
//新闻json路径
$news_file = "../html/news/".$filename."/"."news.json";
//第一张图片路径
$photo_file = "../html/news/".$filename."/"."main";
$photo_real_file ="html/news/".$filename."/main0.jpg";
//url
$url = "../news.html";
//读取行业咨询的json
$industry_json = file_get_contents($industry_file);
//转成数组
$industry_array = json_decode($industry_json, true);
//数组大小
$count_tmp = count($industry_array);
$count = $industry_array[$count_tmp-1]["id"]+1;

$g_count = 0;
//echo '标题：'.$title.'<br>描述：'.$describe.'<br>内容'.$content;
ini_set('pcre.backtrack_limit', 999999999);

preg_match_all('/<img[^>]+?src="data:image\/(\w+);base64,([^"]+)"[^>]+>/Uims', $content, $matches);


if ($title != ''){
    xCopy("../html/news/template","../html/news/".$filename,0);

    if ($matches[2]>0){
        for ($i = 0;$i<count($matches[2]);$i++){
            file_put_contents($photo_file.$i.'.jpg', base64_decode($matches[2][$i]));
        }
        $result = preg_replace_callback('#(?<=<img src=").+?"#i','cb',$content);
        $new_list  = array("id"=>$count,"time"=>$showtime,"title"=>$title,"url"=>"html/news/".$filename,"img"=>$photo_real_file,"describe"=>$describe);
        $new_content = array("time"=>$showtime,"title"=>$title,"describe"=>$describe,"content"=>$result);
        array_push($industry_array,$new_list);
        //将数组转成json字符串
        $industry_string = json_encode($industry_array);
        $content_string = json_encode($new_content);


        //将字符串写入文件
        file_put_contents($industry_file, $industry_string);
        file_put_contents($news_file,$content_string);
    }else{
        Header("HTTP/1.1 303 See Other");
        Header("Location: ../html/error.html");
        exit;
    }

}
if (isset($url))
{
    Header("HTTP/1.1 303 See Other");
    Header("Location: $url");
    exit;
}

function cb($m) {
    global $g_count;
    global $photo_file;
    $replace_res[$g_count] = 'main'.$g_count.'.jpg"';
    $replace_str = $replace_res[$g_count++] ? : $replace_res[$g_count=0];
    echo $replace_str;
    return $replace_str;
}

function xCopy($source, $destination, $child){
    if (!file_exists($destination))
    {
        if (!mkdir(rtrim($destination, '/'), 0777))
        {
            //$err->add($_LANG['cannt_mk_dir']);
            return false;
        }
        @chmod($destination, 0777);
    }
    if(!is_dir($source)){
        return 0;
    }
    if(!is_dir($destination)){
        mkdir($destination,0777);
    }
    $handle=dir($source);
    while($entry=$handle->read()){
        if(($entry!=".")&&($entry!="..")){
            if(is_dir($source."/".$entry)){
                if($child)
                    xCopy($source."/".$entry,$destination."/".$entry,$child);
            }
            else{
                copy($source."/".$entry,$destination."/".$entry);
            }
        }
    }
    return 1;
}