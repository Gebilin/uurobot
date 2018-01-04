// aboutUs页面内跳转
$(document).on('click', '#header .nav-two li',function() {
     $(this).siblings().find('a').removeClass('active1');
     $(this).find('a').addClass('active1');
     if ($(this).index() == 0 ) {
         $('body').stop().animate({'scrollTop': ($('.company')[0].offsetTop - 40 )}, 500)
     }
     if ($(this).index() == 1 ) {
         $('body').stop().animate({'scrollTop': ($('.join')[0].offsetTop - 40 )}, 1000)
     }
     if ($(this).index() == 2 ) {
         $('body').stop().animate({'scrollTop': ($('.location')[0].offsetTop - 40 )}, 1000)
     }
}) 
    $(function(){
        $(".about-four .jli-tit").click(function(){
            if($(this).parent(".jli").hasClass("on")){
                //当前状态展开的时候，继续点击无效
            }else{
                $(this).parents("ul").find(".sub").slideUp(300,function(){
                    $(this).parents("ul").find(".jli").removeClass("on");
                });
                $(this).next(".sub").slideDown(300,function(){
                    $(this).parent(".jli").addClass("on");
                });
            }
        })
        $('#main .local-top').click(function() {
       $('#main #map-two').css('z-index','2');
       $('#main #map').css('z-index','1');
    })
    $('#main .local-bottom').click(function() {
       $('#main #map-two').css('z-index','1');
       $('#main #map').css('z-index','2');
    })
    })