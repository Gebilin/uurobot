// 优友页面内部跳转
$(document).on('click','#header .nav-two li',function () {
  $(this).siblings().find('a').removeClass('active1');
  $(this).find('a').addClass('active1');
  if($(this).index() == 0){
    $('body').stop().animate({'scrollTop':($('.uu-section-one')[0].offsetTop - 40 )}, 500);
  }
  if($(this).index() == 1){
    $('body').stop().animate({'scrollTop':($('.uu-section-two')[0].offsetTop - 40)}, 500);
  }
  if($(this).index() == 2){
    $('body').stop().animate({'scrollTop':($('.uu-section-three')[0].offsetTop - 40)}, 500);
  }
  if($(this).index() == 3){
    $('body').stop().animate({'scrollTop':($('.uu-section-ten')[0].offsetTop - 40)}, 500);
  }
  if($(this).index() == 4){
    $('body').stop().animate({'scrollTop':($('#swiper-container')[0].offsetTop - 40)}, 500);
  }
  if($(this).index() == 5){
    $('body').stop().animate({'scrollTop':($('.section-twl.uu-section')[0].offsetTop - 40)}, 500);
  }
});
$(function(){
 var contTw = $('#main .uu-section-two');
 var contTwo = contTw[0].offsetTop + contTw.outerHeight()/2;
 var contTwoIsShow = false;
 
 var contThr = $('#main .uu-section-three');
 var contThree = contThr[0].offsetTop + contThr.outerHeight()/2;
 var contThreeIsShow = false;
 
 var contFou = $('#main .uu-section-four');
 var contFour = contFou[0].offsetTop + contFou.outerHeight()/2;
 var contFourIsShow = false;

 var contSi = $('#main .uu-section-six');
 var contSix = contSi[0].offsetTop + contSi.outerHeight()/2;
 var contSixIsShow = false;

 var contSev = $('#main .uu-section-seven');
 var contSeven = contSev[0].offsetTop + contSev.outerHeight()/2;
 var contSevenIsShow = false;

 var contEig = $('#main .uu-section-eight');
 var contEight = contEig[0].offsetTop + contEig.outerHeight()/2;
 var contEightIsShow = false;

 var contNie = $('#main .uu-section-nine');
 var contNine = contNie[0].offsetTop + contNie.outerHeight()/2;
 var contNineIsShow = false;

 $(window).scroll(function(e){
   if ((contTwo >= $(window).scrollTop() && contTwo < ($(window).scrollTop() + $(window).height())) ) {
     if (!contTwoIsShow) {
       contTwoIsShow = true;
       $('#main .uu-section-two li:nth-child(1)').delay(200).animate({
        'opacity' : '1',
        '-webkit-opacity' : '1',
        '-moz-opacity' : '1',
        '-o-opacity' : '1',
        'marginTop' : '-100' 
      })
       $('#main .uu-section-two li:nth-child(2)').delay(400).animate({
        'opacity' : '1',
        '-webkit-opacity' : '1',
        '-moz-opacity' : '1',
        '-o-opacity' : '1',
        'marginTop' : '-100' 
      })
       $('#main .uu-section-two li:nth-child(3)').delay(600).animate({
        'opacity' : '1',
        '-webkit-opacity' : '1',
        '-moz-opacity' : '1',
        '-o-opacity' : '1',
        'marginTop' : '-100' 
      })
       $('#main .uu-section-two li:nth-child(4)').delay(800).animate({
        'opacity' : '1',
        '-webkit-opacity' : '1',
        '-moz-opacity' : '1',
        '-o-opacity' : '1',
        'marginTop' : '-100' 
      })
       $('#main .uu-section-two li:nth-child(5)').delay(1000).animate({
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
       $('#main .uu-section-three .brief').delay(200).animate({
        'opacity' : '1',
        '-webkit-opacity' : '1',
        '-moz-opacity' : '1',
        '-o-opacity' : '1',
        'marginTop' : '243' 
      })
     }
   }
   if ((contFour >= $(window).scrollTop() && contFour < ($(window).scrollTop() + $(window).height())) ) {
     if (!contFourIsShow) {
       contFourIsShow = true;
       $('#main .img-top .cir-1').delay(200).animate({
        'opacity' : '1',
        '-webkit-opacity' : '1',
        '-moz-opacity' : '1',
        '-o-opacity' : '1',
        'left':'1'
      },1000)
       $('#main .img-top .cir-2').delay(300).animate({
        'opacity' : '1',
        '-webkit-opacity' : '1',
        '-moz-opacity' : '1',
        '-o-opacity' : '1',
        'left':'166'
      },1000)
       $('#main .img-top .cir-3').delay(400).animate({
        'opacity' : '1',
        '-webkit-opacity' : '1',
        '-moz-opacity' : '1',
        '-o-opacity' : '1',
        'left':'254'
      },1000)
       $('#main .img-top .cir-4').delay(500).animate({
        'opacity' : '1',
        '-webkit-opacity' : '1',
        '-moz-opacity' : '1',
        '-o-opacity' : '1',
        'left':'293'
      },1000)
       $('#main .img-top .cir-5').delay(700).animate({
        'opacity' : '1',
        '-webkit-opacity' : '1',
        '-moz-opacity' : '1',
        '-o-opacity' : '1',
        'left':'335'
      },1000)
       $('#main .img-top .cir-6').delay(900).animate({
        'opacity' : '1',
        '-webkit-opacity' : '1',
        '-moz-opacity' : '1',
        '-o-opacity' : '1',
        'left':'375'
      },1000)
       $('#main .img-top .cir-7').delay(1100).animate({
        'opacity' : '1',
        '-webkit-opacity' : '1',
        '-moz-opacity' : '1',
        '-o-opacity' : '1',
        'left':'464'
      },1000)
       function turn(num) { //远场麦克风旋转
        var num = 0, sexOne = $(".circle-2"), sexTwo = $(".circle-3"), num1 = 0, num2 = 0;
        setInterval(function () {
          num1 -= .02;
          num2 += .02;
          sexOne.css({transform: "rotate(" + num1 + "deg)",transformOrigin: '49.95% 49.95%'});
          sexTwo.css({transform: "rotate(" + num2 + "deg)"});
        }, 2)
      }
      turn();
      function run(number) { //摄像头旋转
        var number = 0, sexOne = $(".voice-1"), sexTwo = $(".voice-2"), sexThree = $(".voice-3"),number1 = 0, number2 = 0, number3 = 0;
        setInterval(function () {
          number1 += .08;
          number2 += .05;
          number3 -= .03;
          sexOne.css({transform: "rotate(" + number1 + "deg)"}); 
          sexTwo.css({transform: "rotate(" + number2 + "deg)"});
          sexThree.css({transform: "rotate(" + number3 + "deg)"});
        }, 2)
      }
      run();
    }
  }
  if ((contSix >= $(window).scrollTop() && contSix < ($(window).scrollTop() + $(window).height())) ) {
   if (!contSixIsShow) {
    contSixIsShow = true;
    $('#main .uu-section-six li:nth-child(1)').delay(200).animate({
      'opacity' : '1',
      '-webkit-opacity' : '1',
      '-moz-opacity' : '1',
      '-o-opacity' : '1',
      'marginTop' : '-100' 
    })
    $('#main .uu-section-six li:nth-child(2)').delay(400).animate({
      'opacity' : '1',
      '-webkit-opacity' : '1',
      '-moz-opacity' : '1',
      '-o-opacity' : '1',
      'marginTop' : '-100' 
    })
    $('#main .uu-section-six li:nth-child(3)').delay(600).animate({
      'opacity' : '1',
      '-webkit-opacity' : '1',
      '-moz-opacity' : '1',
      '-o-opacity' : '1',
      'marginTop' : '-100' 
    })
    $('#main .uu-section-six li:nth-child(4)').delay(800).animate({
      'opacity' : '1',
      '-webkit-opacity' : '1',
      '-moz-opacity' : '1',
      '-o-opacity' : '1',
      'marginTop' : '-100' 
    })
  }
}
if ((contSeven >= $(window).scrollTop() && contSeven < ($(window).scrollTop() + $(window).height())) ) {
 if (!contSevenIsShow) {
   contSevenIsShow = true;
   $('#main .uu-section-seven li:nth-child(1)').delay(200).animate({
    'opacity' : '1',
    '-webkit-opacity' : '1',
    '-moz-opacity' : '1',
    '-o-opacity' : '1',
    'marginTop' : '-100' 
  })
   $('#main .uu-section-seven li:nth-child(2)').delay(400).animate({
    'opacity' : '1',
    '-webkit-opacity' : '1',
    '-moz-opacity' : '1',
    '-o-opacity' : '1',
    'marginTop' : '-100' 
  })
   $('#main .uu-section-seven li:nth-child(3)').delay(600).animate({
    'opacity' : '1',
    '-webkit-opacity' : '1',
    '-moz-opacity' : '1',
    '-o-opacity' : '1',
    'marginTop' : '-100' 
  })
   $('#main .uu-section-seven li:nth-child(4)').delay(800).animate({
    'opacity' : '1',
    '-webkit-opacity' : '1',
    '-moz-opacity' : '1',
    '-o-opacity' : '1',
    'marginTop' : '-100' 
  })
   $('#main .uu-section-seven li:nth-child(5)').delay(1000).animate({
    'opacity' : '1',
    '-webkit-opacity' : '1',
    '-moz-opacity' : '1',
    '-o-opacity' : '1',
    'marginTop' : '-100' 
  })
 }
}
if ((contEight >= $(window).scrollTop() && contEight < ($(window).scrollTop() + $(window).height())) ) {
 if (!contEightIsShow) {
   contEightIsShow = true;
   $('#main .uu-section-eight .product-img').delay(200).animate({
    '-webkit-transition': '1.5s',
    '-moz-transition': '1.5s',
    '-0-transition': '1.5s',
    'transition': '1.5s',
    'opacity' : '1',
    '-webkit-opacity' : '1',
    '-moz-opacity' : '1',
    '-o-opacity' : '1',
    'top':'110'
  })
 }
}
if ((contNine >= $(window).scrollTop() && contNine < ($(window).scrollTop() + $(window).height()))) {
  if (!contNineIsShow) {
    contNineIsShow = true;
    var i = 0;
    var m = 0;
    var j = 0;
    var time;
    var time2;
    var time3;
    time = setInterval(function(){
     i++;
     var ssss = $('#main .brief-icons-two li:nth-child(1)').find('span').text(i);
     if ( i >= 6) {
      clearTimeout(time);
    }
  },200) 
    time2 = setInterval(function(){
     m++;
     var ss = $('#main .brief-icons-two li:nth-child(2)').find('span').text(m);
     if ( m >= 25) {
      clearTimeout(time2);
    }
  },50) 
    time3 = setInterval(function(){
     j++;
     $('#main .brief-icons-two li:nth-child(3)').find('span').text(j);
     if ( j >= 486) {
      clearTimeout(time3);
    }
  },1) 
  }
}
})
})  
$(function () {
  var $li =$('#wrap ul li');
  $li.hover(function (ev) {
    move.call(this , ev , true);
  },function (ev) {
    move.call(this , ev , false);
  });
  function move( ev , bool) {
    var top = $(this).offset().top;
    var bottom = top + $(this).height();
    var left = $(this).offset().left;
    var right = left + $(this).width();
    var x = ev.pageX,
    y = ev.pageY;
    var sT = Math.abs(y - top),
    sB = Math.abs(y - bottom),
    sL = Math.abs(x - left),
    sR = Math.abs(x - right);
    var a = Math.min( sT , sB , sL , sR );
    switch( a ){
      case sT:
      if (bool) {
        $(this).find('.cove').css({
          left:0,
          top:'-1'
        }).animate({
          top:0
        },200);
      } else {
        $(this).find('.cove').stop(1,1).animate({
          top:'-300px'
        },200);
      }
      break;
      case sB:
      if ( bool ) {
        $(this).find('.cove').css({
          left:0,
          top:'300px'
        }).animate({
          top:0
        },200);
      } else {
        $(this).find('.cove').stop(1,1).animate({
          top:'300px'
        },200);
      }
      break;
      case sL:
      if ( bool ) {
        $(this).find('.cove').css({
          left:'-100%',
          top:0
        }).animate({
          left:0
        },200);
      } else {
        $(this).find('.cove').stop(1,1).animate({
          left:'-100%'
        },200);
      }
      break;
      case sR:
      if ( bool ) {
        $(this).find('.cove').css({
          left:'100%',
          top:0
        }).animate({
          left:0
        },200);
      } else {
        $(this).find('.cove').stop(1,1).animate({
          left:'1005'
        },200);
      }
      break;
    }
  };
});