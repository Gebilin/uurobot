// 定制页面内跳转
$(document).on('click', '#header .nav-two li',function() {
     $(this).siblings().find('a').removeClass('active1');
     $(this).find('a').addClass('active1');
     if ($(this).index() == 0 ) {
         $('body').stop().animate({'scrollTop': ($('.platform')[0].offsetTop - 40 )}, 500)
     }
     if ($(this).index() == 1 ) {
         $('body').stop().animate({'scrollTop': ($('.custom-two')[0].offsetTop - 40 )}, 1000)
     }
     if ($(this).index() == 2 ) {
         $('body').stop().animate({'scrollTop': ($('.tel')[0].offsetTop - 40 )}, 1000)
     }
     if ($(this).index() == 3 ) {
         $('body').stop().animate({'scrollTop': ($('.section-twl.custom-section')[0].offsetTop)}, 1000)
     }
})
var contTw = $('.custom-two');
var contTwo = contTw[0].offsetTop + contTw.outerHeight()/2;
var contTh = $('.custom-three');
var contThree = contTh[0].offsetTop + contTh.outerHeight()/2;
var contFo = $('.custom-four');
var contFour = contFo[0].offsetTop + contFo.outerHeight()/2;
var contFiv = $('.custom-five');
var contFive = contFiv[0].offsetTop + contFiv.outerHeight()/2;
$(window).scroll(function(e){
   if (contTwo >= $(window).scrollTop() && contTwo < ($(window).scrollTop() + $(window).height() ) ) {
    $('.custom-two .brief-info-bg').addClass('slideUpLarge')
    $('.custom-two h2').addClass('slideUp')
    $('.custom-two .blue-line').addClass('slideUp')
    $('.custom-two .brief-text').addClass('slideUp')
    $('.custom-two .xianer').addClass('slideLeftLarge')
    $('.custom-two .xhs').addClass('slideLeft')
   }if (contThree >= $(window).scrollTop() && contThree < ($(window).scrollTop() + $(window).height() ) ) {
    $('#main .custom-three .brief-info-bg').addClass('slideUpLarge')
    $('#main .custom-three h2').addClass('slideUp')
    $('.custom-three .blue-line').addClass('slideUp')
    $('#main .custom-three .brief-text').addClass('slideUp')
    $('#main .custom-three img').addClass('slideRightLarge')
   }if (contFour >= $(window).scrollTop() && contFour < ($(window).scrollTop() + $(window).height() ) ) {
    $('.custom-four .brief-info-bg').addClass('slideUpLarge')
    $('.custom-four h2').addClass('slideUp')
    $('.custom-four .blue-line').addClass('slideUp')
    $('.custom-four .brief-text').addClass('slideUp')
    $('.custom-four img').addClass('slideLeftLarge')
   }if (contFive >= $(window).scrollTop() && contFive < ($(window).scrollTop() + $(window).height() ) ) {
    $('.custom-five .brief-info-bg').addClass('slideUpLarge')
    $('.custom-five h2').addClass('slideUp')
    $('.custom-five .blue-line').addClass('slideUp')
    $('.custom-five .brief-text').addClass('slideUp')
    $('.custom-five img').addClass('slideRightLarge')
   }
})