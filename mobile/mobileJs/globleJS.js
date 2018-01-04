/**
 * Created by Administrator on 2017/11/20.
 */
/*声明wow.js*/
new WOW().init();
/*声明wow.js*/

$(function () {
    /*视频播放*/
    $('.page01_word03').click(function () {
        $('.page01_content').hide();
        $('.myVideo').show();
        $('.page01_video').get(0).play();
        $('.page01_video').attr('title1','1');
        $('body').css('overflow','hidden');
    })
    $('.closeVideoBtn').click(function () {
        $('.page01_content').show();
        $('.myVideo').hide();
        $('.page01_video').get(0).pause();
        $('.page01_video').attr('title1','0');
        $('body').css('overflow','visible')
    })
    $('.page01_video').click(function () {
        if($('.page01_video').attr('title1') == 0){
            $('.page01_video').get(0).play();
            $('.page01_video').attr('title1','1');
        }else{
            $('.page01_video').get(0).pause();
            $('.page01_video').attr('title1','0');
        }
    })
    /*视频播放*/
    /*导航页点击后的渐变*/
    $('.list_search').click(function () {
        $(this).addClass('listAnimate01').find('img').attr('src','pics/listPics/pic10.png')
        $('.languageChange').addClass('listAnimate02').find('img').attr('src','pics/listPics/pic07.png');
        $('.hotSearchs').slideDown();
        $('.hotSearch').click(function () {
            if($(this).html() == 'U03S'){
                window.location.href="./xiaoyou.html";
            }else if($(this).html() == '售后'){
                window.location.href="./service.html";
            }else if($(this).html() == '定制'){
                window.location.href="./customization.html";
            }else if($(this).html() == 'More'){
                window.location.href="./aboutUs.html";
            }else if($(this).html() == 'U05'){
                window.location.href="./youyou.html";
            }else if($(this).html() == 'Mini U'){
                window.location.href="./xiaoben.html";
            }
            $('.list_search input').val($(this).text())
        })
    })
    /*导航页点击后的渐变*/
    /*点击logo跳转首页*/
    $('.logo').click(function () {
        window.location.href="./index.html";
    })
    /*点击logo跳转首页*/
    /*中英文切换*/
    $('.languageChange').click(function () {
        if($('.languageChange_01').text() == '中国'){
            $('.languageChange_01').text('English')
            window.location.href = './../en/mobile/index.html'
        }else{
            $('.languageChange_01').text('中国')
            window.location.href = '../../index.html'
        }
    })
    /*$('.languageChange').click(function () {
        if($('.languageChange_01').text() == 'English'){
            $('.languageChange_01').text('Chinese')
            window.location.href = '../../../../mobile/index.html'
        }else{
            $('.languageChange_01').text('English')
            window.location.href = '../../../index.html'
        }
    })*/
    /*中英文切换*/
    /*导航页搜索*/
    $('.searchBtn').click(function () {
        if($('.list_search input').val().toLowerCase() == ''){
            window.location.href="./index.html";
        }else
        if($('.list_search input').val().toLowerCase() == 'u03s'){
            window.location.href="./xiaoyou.html";
        }else
        if($('.list_search input').val() == '售后'){
            window.location.href="./service.html";
        }else
        if($('.list_search input').val() == '定制'){
            window.location.href="./customization.html";
        }else
        if($('.list_search input').val().toLowerCase() == 'more'){
            window.location.href="./aboutUs.html";
        }else
        if($('.list_search input').val().toLowerCase() == 'u05'){
            window.location.href="./youyou.html";
        }else
        if($('.list_search input').val().toLowerCase() == 'mini u'||'miniu'){
            window.location.href="./xiaoben.html";
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
        $('.exhibition').hide();

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
            window.location.href="./index.html";
        }).next().click(function () {
            window.location.href="./service.html";
        }).next().click(function () {
            window.location.href="./aboutUs.html";
        }).next().click(function () {
            window.location.href="./business.html"
        })
    /*footer链接跳转*/
    /*设置listPage高度*/
    $(function () {
        $('.listPage').height($(window).height());
        $('.list_logo').click(function () {
            window.location.href="./index.html";
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
})