/**
 * Created by Administrator on 2017/12/15.
 */
$(function () {
    if($(document).width() < 380){
        $('.page05_word span').hide();
    }else{
        $('.page05_word span').show();
    }
    var i = 0;var j = 1;
    $('.threeBlock').click(function () {
        i = 0;
        j = $(this).index();
        $('.threeBlock').removeClass('threeBlockAddAnimate').eq(j).addClass('threeBlockAddAnimate');
        $('.myLunbo').hide().eq(j).show().find('.myPic').hide().eq(i).show();
    }).eq(1).addClass('threeBlockAddAnimate');
    $('.leftBtn').click(function () {
        i --;
        if(i < 0){
            i = $('.myPic').length/3 - 1;
        }
        $('.myLunbo').eq(j).find('.myPic').hide().eq(i).show();
    })
    $('.rightBtn').click(function () {
        i ++;
        if(i > $('.myPic').length/3 - 1){
            i = 0;
        }
        $('.myLunbo').eq(j).find('.myPic').hide().eq(i).show();
    })
})