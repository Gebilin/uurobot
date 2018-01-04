// 服务页面内跳转
$(document).on('click', '#header .nav-two li',function() {
     $(this).siblings().find('a').removeClass('active1');
     $(this).find('a').addClass('active1');
     if ($(this).index() == 0 ) {
         $('body').stop().animate({'scrollTop': ($('.service-two')[0].offsetTop - 150 )}, 500)
     }
     if ($(this).index() == 1 ) {
         $('body').stop().animate({'scrollTop': ($('.ser-tel')[0].offsetTop + 350 )}, 1000)
     }
     if ($(this).index() == 2 ) {
         $('body').stop().animate({'scrollTop': ($('.download')[0].offsetTop + 350 )}, 1000)
     }
}) 