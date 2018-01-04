// 小笨页面内部跳转
$(document).on('click','#header .nav-two li',function () {
        $(this).siblings().find('a').removeClass('active1');
        $(this).find('a').addClass('active1');
        if($(this).index() == 0){
            $('body').stop().animate({'scrollTop':($('.xb-section-two')[0].offsetTop - 40 )}, 500);
        }
        if($(this).index() == 1){
            $('body').stop().animate({'scrollTop':($('.xb-section-three')[0].offsetTop - 40)}, 500);
        }
        if($(this).index() == 2){
            $('body').stop().animate({'scrollTop':($('.xb-section-four')[0].offsetTop - 40)}, 500);
        }
         if($(this).index() == 3){
            $('body').stop().animate({'scrollTop':($('.xb-section-six')[0].offsetTop - 40)}, 500);
        }
         if($(this).index() == 4){
            $('body').stop().animate({'scrollTop':($('.xb-section-seven')[0].offsetTop - 40)}, 500);
        }
        if($(this).index() == 5){
            $('body').stop().animate({'scrollTop':($('.xb-section.section-twl')[0].offsetTop - 40)}, 500);
        }
    });
$(function(){
    var contTw = $('#main .xb-section-two');
    var contTwo = contTw[0].offsetTop + contTw.outerHeight()/2;
    var contTwoIsShow = false;
    
    var contThr = $('#main .xb-section-three');
    var contThree = contThr[0].offsetTop + contThr.outerHeight()/2;
    var contThreeIsShow = false;

    var contFou = $('#main .xb-section-four');
    var contFour = contFou[0].offsetTop + contFou.outerHeight()/2;
    var contFourIsShow = false;

    var contFiv = $('#main .xb-section-five');
    var contFive = contFiv[0].offsetTop + contFiv.outerHeight()/2;
    var contFiveIsShow = false;

    var contSi = $('#main .xb-section-six');
    var contSix = contSi[0].offsetTop + contSi.outerHeight()/2;
    var contSixIsShow = false;

    var contSev = $('#main .xb-section-seven');
    var contSeven = contSev[0].offsetTop + contSev.outerHeight()/2;
    var contSevenIsShow = false;

    var contEig = $('#main .xb-section-eight');
    var contEight = contEig[0].offsetTop + contEig.outerHeight()/2;
    var contEightIsShow = false;

    $(window).scroll(function(e){
        if ((contTwo >= $(window).scrollTop() && contTwo < ($(window).scrollTop() + $(window).height())) ) {
           if (!contTwoIsShow) {
               contTwoIsShow = true;
               $('#main .xb-section-two .img-right').delay(200).animate({
                   '-webkit-transition': '4s',
                   '-moz-transition': '4s',
                   '-0-transition': '4s',
                   'transition': '4s',
                   'right' : '-102' 
               })
             }
      }
       if ((contThree >= $(window).scrollTop() && contThree < ($(window).scrollTop() + $(window).height())) ) {
           if (!contThreeIsShow) {
               contThreeIsShow = true;
                    $('#main .xb-section-three img').delay(200).animate({
                    '-webkit-transition': '3s',
                   '-moz-transition': '3s',
                   '-0-transition': '3s',
                   'transition': '3s',
                    'marginTop' : '64' 
                    })
             }
      }
      if ((contFour >= $(window).scrollTop() && contFour < ($(window).scrollTop() + $(window).height())) ) {
           if (!contFourIsShow) {
               contFourIsShow = true;
                    $('#main .xb-section-four .brief').delay(200).animate({
                    'opacity' : '1',
                    '-webkit-opacity' : '1',
                    '-moz-opacity' : '1',
                    '-o-opacity' : '1',
                    'marginTop' : '258' 
                    })
             }
      }
      if ((contFive >= $(window).scrollTop() && contFive < ($(window).scrollTop() + $(window).height())) ) {
           if (!contFiveIsShow) {
               contFiveIsShow = true;
                    $('#main .xb-section-five .words-1').delay(200).animate({
                    'opacity' : '1',
                    '-webkit-opacity' : '1',
                    '-moz-opacity' : '1',
                    '-o-opacity' : '1',
                    })
                    $('#main .xb-section-five .words-2').delay(400).animate({
                    'opacity' : '1',
                    '-webkit-opacity' : '1',
                    '-moz-opacity' : '1',
                    '-o-opacity' : '1',
                    })
                    $('#main .xb-section-five .words-3').delay(600).animate({
                    'opacity' : '1',
                    '-webkit-opacity' : '1',
                    '-moz-opacity' : '1',
                    '-o-opacity' : '1',
                    })
                    $('#main .xb-section-five .words-4').delay(800).animate({
                    'opacity' : '1',
                    '-webkit-opacity' : '1',
                    '-moz-opacity' : '1',
                    '-o-opacity' : '1',
                    })
                    $('#main .xb-section-five .words-5').delay(1000).animate({
                    'opacity' : '1',
                    '-webkit-opacity' : '1',
                    '-moz-opacity' : '1',
                    '-o-opacity' : '1',
                    })
                    $('#main .xb-section-five .words-6').delay(1200).animate({
                    'opacity' : '1',
                    '-webkit-opacity' : '1',
                    '-moz-opacity' : '1',
                    '-o-opacity' : '1',
                    })
                    $('#main .xb-section-five .words-7').delay(1400).animate({
                    'opacity' : '1',
                    '-webkit-opacity' : '1',
                    '-moz-opacity' : '1',
                    '-o-opacity' : '1',
                    })
                    $('#main .xb-section-five .words-8').delay(1600).animate({
                    'opacity' : '1',
                    '-webkit-opacity' : '1',
                    '-moz-opacity' : '1',
                    '-o-opacity' : '1',
                    })
                    $('#main .xb-section-five .words-9').delay(1800).animate({
                    'opacity' : '1',
                    '-webkit-opacity' : '1',
                    '-moz-opacity' : '1',
                    '-o-opacity' : '1',
                    })
                    $('#main .xb-section-five .words-10').delay(2000).animate({
                    'opacity' : '1',
                    '-webkit-opacity' : '1',
                    '-moz-opacity' : '1',
                    '-o-opacity' : '1',
                    })
                    $('#main .xb-section-five img').addClass('img-scale')
             }
      }
      if ((contSix >= $(window).scrollTop() && contSix < ($(window).scrollTop() + $(window).height())) ) {
           if (!contSixIsShow) {
                contSixIsShow = true;
                 $('#main .xb-section-six li:nth-child(1)').delay(200).animate({
                    'opacity' : '1',
                    '-webkit-opacity' : '1',
                    '-moz-opacity' : '1',
                    '-o-opacity' : '1',
                    'marginTop' : '-100' 
                })
                 $('#main .xb-section-six li:nth-child(2)').delay(400).animate({
                    'opacity' : '1',
                    '-webkit-opacity' : '1',
                    '-moz-opacity' : '1',
                    '-o-opacity' : '1',
                    'marginTop' : '-100' 
                })
                 $('#main .xb-section-six li:nth-child(3)').delay(600).animate({
                    'opacity' : '1',
                    '-webkit-opacity' : '1',
                    '-moz-opacity' : '1',
                    '-o-opacity' : '1',
                    'marginTop' : '-100' 
                })
                 $('#main .xb-section-six img').delay(800).animate({
                    'opacity' : '1',
                    '-webkit-opacity' : '1',
                    '-moz-opacity' : '1',
                    '-o-opacity' : '1',
                })
                 }
      }
        if ((contSeven >= $(window).scrollTop() && contSeven < ($(window).scrollTop() + $(window).height())) ) {
           if (!contSevenIsShow) {
               contSevenIsShow = true;
                    $('#main .xb-section-seven li:nth-child(1)').delay(200).animate({
                    'marginTop' : '-100' 
                    })
                     $('#main .xb-section-seven li:nth-child(2)').delay(400).animate({
                    'marginTop' : '-100' 
                    })
                     $('#main .xb-section-seven li:nth-child(3)').delay(600).animate({
                    'marginTop' : '-100' 
                    })
             }
      }
      if ((contEight >= $(window).scrollTop() && contEight < ($(window).scrollTop() + $(window).height())) ) {
           if (!contEightIsShow) {
             contEightIsShow = true;
             $('#main .xb-section-eight li:nth-child(1)').delay(200).animate({
                'marginTop' : '-100' 
            })
             $('#main .xb-section-eight li:nth-child(2)').delay(400).animate({
                'marginTop' : '-100' 
            })
             $('#main .xb-section-eight li:nth-child(3)').delay(600).animate({
                'marginTop' : '-100' 
            })
         }
      }
    })
  })  
 
