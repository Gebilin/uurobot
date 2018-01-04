/**
 * Created by Administrator on 2017/12/15.
 */
$(function () {
    $('.page01_button').click(function () {
        $('.header').hide().next().hide().next().hide().next().hide();
        $('body').find('.exhibition').fadeIn();
    })
    $('.exhibition_icon').click(function () {
        $('.header').show().next().next().show().next().show();
        $('body').find('.exhibition').hide();
        $("html,body").animate({scrollTop:0}, 0);
    })
})
window.addEventListener("onorientationchange" in window ? "orientationchange" : "resize", function() {
    if (window.orientation === 180 || window.orientation === 0) {
        $('body').show();
    }
    if (window.orientation === 90 || window.orientation === -90 ){
        $('body').hide();
        alert('关闭手机自动旋转功能，浏览效果更佳哦。')

    }
}, false);
$(function () {
    if(window.orientation==90||window.orientation==-90){
        $('body').hide();
        alert('关闭手机自动旋转功能，浏览效果更佳哦。')
    }else{
        $('body').show();
    }
})
