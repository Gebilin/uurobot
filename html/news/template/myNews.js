/**
 * Created by Administrator on 2017/11/20.
 */
/*声明wow.js*/
new WOW().init();
/*声明wow.js*/
/*(function IsPC(){
 var userAgentInfo = navigator.userAgent;
 var Agents = new Array("Android", "iPhone", "SymbianOS", "Windows Phone", "iPod");
 var flag = true;
 for (var v = 0; v < Agents.length; v++) {
 if (userAgentInfo.indexOf(Agents[v]) > 0) { break; }else{
 window.location.href = 'http://www.uurobot.com'
 }
 }
 })()*/
window.addEventListener("onorientationchange" in window ? "orientationchange" : "resize", function() {
    if (window.orientation === 180 || window.orientation === 0) {
        $('body').show();
    }
    if (window.orientation === 90 || window.orientation === -90 ){
        $('body').hide();
        alert('关闭手机自动旋转功能，浏览效果更加哦。')
    }
}, false);
$(function () {
    if(window.orientation==90||window.orientation==-90){
        $('body').hide();
        alert('关闭手机自动旋转功能，浏览效果更加哦。')
    }else{
        $('body').show();
    }
})
    /*分享功能*/
    /*jsModern.share({
        defaultTheme: true,
        qrcode: "#qrcode",
        qzone: "#qzone",
        douban: "#douban",
        sina: "#sina",
        qq: "#qq"
    });*/
    /*分享功能*/
    /*导航页点击后的渐变*/
    $('.list_search').click(function () {
        $(this).addClass('listAnimate01').find('img').attr('src','../../../mobile/pics/listPics/pic10.png')
        $('.languageChange').addClass('listAnimate02').find('img').attr('src','../../../mobile/pics/listPics/pic07.png');
        $('.hotSearchs').slideDown();
        $('.hotSearch').click(function () {
            if($(this).html() == 'U03S'){
                window.location.href="../../../mobile/xiaoyou.html";
            }else if($(this).html() == '售后'){
                window.location.href="../../../mobile/service.html";
            }else if($(this).html() == '定制'){
                window.location.href="../../../mobile/customization.html";
            }else if($(this).html() == 'More'){
                window.location.href="../../../mobile/aboutUs.html";
            }else if($(this).html() == 'U05'){
                window.location.href="../../../mobile/youyou.html";
            }else if($(this).html() == 'Mini U'){
                window.location.href="../../../mobile/xiaoben.html";
            }
            $('.list_search input').val($(this).text())
        })
    })
    /*导航页点击后的渐变*/
    /*中英文切换*/
    $('.languageChange').click(function () {
        if($('.languageChange_01').text() == '中国'){
            $('.languageChange_01').text('English')
        }else{
            $('.languageChange_01').text('中国')
        }
    })
    /*中英文切换*/
    /*导航页搜索*/
    $('.searchBtn').click(function () {
        if($('.list_search input').val().toLowerCase() == ''){
            window.location.href="../../../mobile/index.html";
        }else
        if($('.list_search input').val().toLowerCase() == 'u03s'){
            window.location.href="../../../mobile/xiaoyou.html";
        }else
        if($('.list_search input').val() == '售后'){
            window.location.href="../../../mobile/service.html";
        }else
        if($('.list_search input').val() == '定制'){
            window.location.href="../../../mobile/customization.html";
        }else
        if($('.list_search input').val().toLowerCase() == 'more'){
            window.location.href="../../../mobile/aboutUs.html";
        }else
        if($('.list_search input').val().toLowerCase() == 'u05'){
            window.location.href="../../../mobile/youyou.html";
        }else
        if($('.list_search input').val().toLowerCase() == 'mini u'||'miniu'){
            window.location.href="../../../mobile/xiaoben.html";
        }
    })
    /*导航页搜索*/
    var mySwich = 0;
    $('.listBtns').click(function () {
        mySwich = 1;
        $('.listPage').slideDown(1000,function () {
            $('.listBtns .one').removeClass('addAnimate');
            $('.listBtns .three').removeClass('addAnimate1');
            $('.listBtns .two').removeClass('addAnimate4').addClass('addAnimate2');
            if(mySwich == 1){
                $('.listPage').siblings().hide();
            }

        });
        $('.list_listBtns img').removeClass('closeBtnAnimate').removeClass('closeBtnAnimate1').addClass('closeBtnAnimate');

    })
    $('.list_listBtns').click(function () {
        mySwich = 0;
        $('.list_listBtns img').removeClass('closeBtnAnimate').removeClass('closeBtnAnimate1').addClass('closeBtnAnimate1');
        $('.listPage').slideUp(1000,function () {
            $('.listBtns .one').addClass('addAnimate');
            $('.listBtns .three').addClass('addAnimate1');
            $('.listBtns .two').addClass('addAnimate4').removeClass('addAnimate2');
        });
        $('.listPage').siblings().show();
        $('.weChatMark').hide().next().hide();
        $('.alertWin').hide();
        $('.share').hide();

    })
    /*小屏幕footer元素溢出，溢出部分设置隐藏*/
    if($(window).width() < 350){
        $('.footer .footer03_04').hide();
        $('.footer .footer03_05').hide();
    }else{
        $('.footer .footer03_04').show();
        $('.footer .footer03_05').show();
    }
    /*小屏幕footer元素溢出，溢出部分设置隐藏*/
    /*footer链接跳转*/
    $('.footer01 .footer01_01').click(function () {
        window.location.href="../../../mobile/index.html";
    }).next().click(function () {
        window.location.href="../../../mobile/service.html";
    }).next().click(function () {
        window.location.href="../../../mobile/aboutUs.html";
    }).next().click(function () {
        window.location.href="../../../mobile/business.html"
    })
    /*footer链接跳转*/
    /*设置listPage高度*/
    $(function () {
        $('.listPage').height($(window).height());
        $('.list_logo').click(function () {
            window.location.href="../../../mobile/index.html";
        })
    })
    /*设置listPage高度*/
    /*微信公众号二维码弹出*/
    $(function () {
        $('.footer .footer03_04').click(function () {
            $('.weChatMark').fadeIn();
            $('.weChatPic').fadeIn();
            $('body').css('overflowY','hidden')
        })
        $('.weChatMark').click(function () {
            $('.weChatMark').fadeOut();
            $('.weChatPic').fadeOut();
            $('.alertWin').fadeOut();
            $('body').css('overflowY','scroll')
        })
    })
    /*微信公众号二维码弹出*/
    /*微博点击事件*/
    $('.footer .footer03_05').click(function () {
        window.location.href="http://weibo.com/u/2144020305";
    })
    /*微博点击事件*/
$(function () {
    if($(document).width() < 380){
        $('.page03_word02 span').hide();
    }else{
        $('.page03_word02 span').show();
    }
    $('.page02_img02').click(function () {
        $('.share').fadeIn();
        $('.shareIcons').addClass('animated fadeInUp')
        $('body ').css('overflowY','hidden')
    })
    $('.shareMark').click(function () {
        $('.share').fadeOut();
        $('body ').css('overflowY','visible')
    })
})

$(function () {
    $.getJSON("news.json",function(data){
        $(".page02_title").html(data.title);
        $(".page02_word01").html(data.time);
        $(".page02_words").html(data.content).find('span').css({fontSize:'2.8125vw',fontFamily:'smartFont',color:'#555',lineHeight:'3.90625vw'})
        $(".page02_words").find('img').width('100%')
    });
})
