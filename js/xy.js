// 小优页面内跳转
$(document).on('click', '#header .nav-two li',function() {
     $(this).siblings().find('a').removeClass('active1');
     $(this).find('a').addClass('active1');
     if ($(this).index() == 0 ) {
         $('body').stop().animate({'scrollTop': ($('.xu-section-one')[0].offsetTop - 40 )}, 500)
     }
     if ($(this).index() == 1 ) {
         $('body').stop().animate({'scrollTop': ($('.xy-section.section-twl')[0].offsetTop - 40 )}, 1000)
     }
}) 
 $(function(){
    var contOn = $('#main .xu-section-one');
    var contOne = contOn[0].offsetTop + contOn.outerHeight()/2;
    var contOneIsShow = false;

    var contTw = $('#main .xu-section-two');
    var contTwo = contTw[0].offsetTop + contTw.outerHeight()/2;
    var contTwoIsShow = false;
    
    var contThr = $('#main .xu-section-three');
    var contThree = contThr[0].offsetTop + contThr.outerHeight()/2;
    var contThreeIsShow = false;

    var contFou = $('#main .xu-section-four');
    var contFour = contFou[0].offsetTop + contFou.outerHeight()/2;
    var contFourIsShow = false;

    var contSi = $('#main .xu-section-six');
    var contSix = contSi[0].offsetTop + contSi.outerHeight()/2;
    var contSixIsShow = false;

    var contSev = $('#main .xu-section-seven');
    var contSeven = contSev[0].offsetTop + contSev.outerHeight()/2;
    var contSevenIsShow = false;

    var contEig = $('#main .xu-section-eight');
    var contEight = contEig[0].offsetTop + contEig.outerHeight()/2;
    var contEightIsShow = false;

    var contNin = $('#main .xu-section-nine');
    var contNine = contNin[0].offsetTop + contNin.outerHeight()/2;
    var contNineIsShow = false;

    $(window).scroll(function(e){
        if ((contOne >= $(window).scrollTop() && contOne < ($(window).scrollTop() + $(window).height())) ) {
           if (!contOneIsShow) {
               contOneIsShow = true;
                    $('#main .xu-section-one .brief').animate({
                    'opacity' : '1',
                    '-webkit-opacity' : '1',
                    '-moz-opacity' : '1',
                    '-o-opacity' : '1',
                    'marginTop' : '116' 
                    })
             }
      }
        if ((contTwo >= $(window).scrollTop() && contTwo < ($(window).scrollTop() + $(window).height())) ) {
           if (!contTwoIsShow) {
               contTwoIsShow = true;
                    $('#main .xu-section-two li:nth-child(1)').animate({
                    'opacity' : '1',
                    '-webkit-opacity' : '1',
                    '-moz-opacity' : '1',
                    '-o-opacity' : '1',
                    'marginTop' : '-100' 
                    })
                     $('#main .xu-section-two li:nth-child(2)').delay(200).animate({
                    'opacity' : '1',
                    '-webkit-opacity' : '1',
                    '-moz-opacity' : '1',
                    '-o-opacity' : '1',
                    'marginTop' : '-100' 
                    })
                     $('#main .xu-section-two li:nth-child(3)').delay(400).animate({
                    'opacity' : '1',
                    '-webkit-opacity' : '1',
                    '-moz-opacity' : '1',
                    '-o-opacity' : '1',
                    'marginTop' : '-100' 
                    })
             }
      }
       if ((contThree >= $(window).scrollTop() && contThree < ($(window).scrollTop() + $(window).height())) ) {
           if (!contThreeIsShow) {
               contThreeIsShow = true;
                    $('#main .xu-section-three li:nth-child(1)').animate({
                    'opacity' : '1',
                    '-webkit-opacity' : '1',
                    '-moz-opacity' : '1',
                    '-o-opacity' : '1',
                    'marginTop' : '-100' 
                    })
                     $('#main .xu-section-three li:nth-child(2)').delay(200).animate({
                    'opacity' : '1',
                    '-webkit-opacity' : '1',
                    '-moz-opacity' : '1',
                    '-o-opacity' : '1',
                    'marginTop' : '-100' 
                    })
                     $('#main .xu-section-three li:nth-child(3)').delay(400).animate({
                    'opacity' : '1',
                    '-webkit-opacity' : '1',
                    '-moz-opacity' : '1',
                    '-o-opacity' : '1',
                    'marginTop' : '-100' 
                    })
             }
      }
      if ((contFour >= $(window).scrollTop() && contFour < ($(window).scrollTop() + $(window).height())) ) {
           if (!contFourIsShow) {
               contFourIsShow = true;
                    $('#main .xu-section-four .brief').animate({
                    'opacity' : '1',
                    '-webkit-opacity' : '1',
                    '-moz-opacity' : '1',
                    '-o-opacity' : '1',
                    'marginTop' : '245' 
                    })
             }
      }
      if ((contSix >= $(window).scrollTop() && contSix < ($(window).scrollTop() + $(window).height())) ) {
           if (!contSixIsShow) {
                contSixIsShow = true;
                 $('#main .xu-section-six li:nth-child(1)').animate({
                    'marginTop' : '0' 
                    })
                     $('#main .xu-section-six li:nth-child(2)').delay(200).animate({
                    'marginTop' : '0' 
                    })
                     $('#main .xu-section-six li:nth-child(3)').delay(400).animate({
                    'marginTop' : '0' 
                    })
                 }
      }
        if ((contSeven >= $(window).scrollTop() && contSeven < ($(window).scrollTop() + $(window).height())) ) {
           if (!contSevenIsShow) {
               contSevenIsShow = true;
                    $('#main .xu-section-seven li:nth-child(1)').animate({
                    'marginTop' : '-100' 
                    })
                     $('#main .xu-section-seven li:nth-child(2)').delay(200).animate({
                    'marginTop' : '-100' 
                    })
                     $('#main .xu-section-seven li:nth-child(3)').delay(400).animate({
                    'marginTop' : '-100' 
                    })
             }
      }
      if ((contEight >= $(window).scrollTop() && contEight < ($(window).scrollTop() + $(window).height())) ) {
           if (!contEightIsShow) {
               contEightIsShow = true;
                    $('#main .xu-section-eight .brief').animate({
                    'opacity' : '1',
                    '-webkit-opacity' : '1',
                    '-moz-opacity' : '1',
                    '-o-opacity' : '1',
                    'marginTop' : '342' 
                    })
             }
      }
      if ((contNine >= $(window).scrollTop() && contNine < ($(window).scrollTop() + $(window).height())) ) {
           if (!contNineIsShow) {
                contNineIsShow = true;
                 $('#main .xu-section-nine li:nth-child(1)').animate({
                    'marginTop' : '0' 
                    })
                     $('#main .xu-section-nine li:nth-child(2)').delay(200).animate({
                    'marginTop' : '0' 
                    })
                     $('#main .xu-section-nine li:nth-child(3)').delay(400).animate({
                    'marginTop' : '0' 
                    })
                 }
      }
    })
  })  