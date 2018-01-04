/**
 * Created by Administrator on 2017/12/15.
 */
$(function () {
    var i = 0;
    $('.leftBtn').click(function () {
        i --;
        if(i < 0){
            i = $('.myPic').length - 1;
        }
        $('.myLunbo').find('.myPic').hide().eq(i).show();
    })
    $('.rightBtn').click(function () {
        i ++;
        if(i > $('.myPic').length - 1){
            i = 0;
        }
        $('.myLunbo').find('.myPic').hide().eq(i).show();
    })
})