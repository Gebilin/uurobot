/**
 * Created by Administrator on 2017/12/15.
 */
$(function () {
    $('.page05_headers01:nth-child(3)').find('img').addClass('page05Animate');
    $('.page05_headers01').click(function () {
        if($(this).next().css('display') == 'none'){
            $('.page05_headers01').find('img').removeClass('page05Animate').attr('src','pics/aboutUs/page05/pic01.png').parent().parent().css('borderTop','2px dashed #e5e5e5').css('background','#fff').css('color','#555').next().slideUp().prev().eq(0).css('border','none');
            $('.page05_headers01:nth-child(7)').css('borderBottom','2px dashed #e5e5e5');
            $(this).find('img').attr('src','pics/aboutUs/page05/pic02.png').addClass('page05Animate').parent().parent().css('border','none').css('background','#555').css('color','#fff').next().slideDown();
        }
    })
    $('.page06_word').click(function () {
        $('.allmap').hide().eq($(this).index() - 1).show()
    })
    var i = 2;
    var j = i;
    if($('.page02_news').length < 2){
        $('.page02_more').hide();
    }
    $('.page02_more').click(function () {
        for(i;i < j + 5 && i < $('.page02_news').length;i ++){
            $('.page02_news').eq(i).fadeIn();
        }
        j = i;
        if(i == $('.page02_news').length){
            $(this).hide();
        }
    })
})

$(function () {
    $.getJSON("../json/industry.json",function(data){
        var count = data.length;
        for (var item in data){
            var title,time,img_url,content,a_url;
            title = data[item].title;
            time = data[item].time;
            img_url = data[item].img;
            content = data[item].describe;
            a_url = data[item].url;
            var content_div = ['<div class="page02_news">',
                '                  <img class="page02_img" src="./../'+img_url+'" />',
                '                    <div class="page02_words">',
                '                    <p class="page02_word01">'+title+'</p>',
                '             <p class="page02_word02">'+content+'</p>',
                '                    <p class="page02_word03">'+time+'<img src="pics/moreNews/pic03.png"/>99+ <a href="./../'+a_url+'/myNews.html">阅读全文>></a><br style="clear: both"/> </p>',
                '                    </div>',
                '                   </div>',
                '                </div>'].join("");
            $(".page02").prepend(content_div);
        }
    })
})
