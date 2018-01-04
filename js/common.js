// window.onload = function(){
//   var text = '<div class = "alertPage"></div>'
//     FuckInternetExplorer()
//     function FuckInternetExplorer() {
//       var browser = navigator.appName;
//       var b_version = navigator.appVersion;
//       var version = b_version.split(";");
//       if (version.length > 1) {
//         var trim_Version = parseInt(version[1].replace(/[ ]/g, "").replace(/MSIE/g, ""));
//         if (trim_Version < 9) {
//           $('body').empty().append(text);
//           $('.alertPage').css('paddingTop','200px').css('fontSize','30px').css('textAlign','center')          
//           return false;
//         }
//       }
//       return true;
//     }
//   }
//二级导航随滚轮滚动，一级导航隐藏
window.onload = function (){
    mobile_device_detect("http://m.uurobot.com/mobile");
}
function mobile_device_detect(url)
{
    var thisOS=navigator.platform;
    var os=new Array("iPhone","iPod","iPad","android","Nokia","SymbianOS","Symbian","Windows Phone","Phone","Linux armv71","MAUI","UNTRUSTED/1.0","Windows CE","BlackBerry","IEMobile");
    for(var i=0;i<os.length;i++)
    {
        if(thisOS.match(os[i]))
        {
            window.location=url;
        }

    }
    //因为相当部分的手机系统不知道信息,这里是做临时性特殊辨认
    if(navigator.platform.indexOf('iPad') != -1)
    {
        window.location=url;
    }
    //做这一部分是因为Android手机的内核也是Linux
    //但是navigator.platform显示信息不尽相同情况繁多,因此从浏览器下手，即用navigator.appVersion信息做判断
    var check = navigator.appVersion;
    if( check.match(/linux/i) )
    {
        //X11是UC浏览器的平台 ，如果有其他特殊浏览器也可以附加上条件
        if(check.match(/mobile/i) || check.match(/X11/i))
        {
            window.location=url;
        }
    }
    //类in_array函数
    Array.prototype.in_array = function(e)
    {
        for(i=0;i<this.length;i++)
        {
            if(this[i] == e)
                return true;
        }
        return false;
    }
}


$(function(){
     window.onscroll=function(){
          var sl=-Math.max(document.body.scrollLeft,document.documentElement.scrollLeft);
          document.getElementById('scroll-nav').style.left=sl+'px';
    }
    $('#header input').focus(function(){
       $('.result-container').fadeIn(100);
    })
  $('.wechat-icon').hover(function(){
    $('.wechat-erweima-icon').addClass('show')
  },function(){
   $('.wechat-erweima-icon').removeClass('show')
  }
  )
     $('#main .brief, #main .brief-icons li, #main .xb-section-five .words').css({
      '-webkit-transition': '1.5s',
      '-moz-transition': '1.5s',
      '-0-transition': '1.5s',
      'transition': '1.5s'
    })
  var wids = $(window).width();
  if (wids < 768) {
   $(".nav-two").css({'position':'static'});
 }if (wids > 768){
   $(window).scroll(function(e){
    var scH = $(document).scrollTop();
    if (scH >= 50) {
      $(".nav-two").css({'position':'fixed','top':'0','z-index':'5','opacity':'.8'});
    }else if (scH < 50){
      $(".nav-two").css({'position':'static','opacity':'1'});
    }
  });
 }
})
// header搜索框
function searchToggle(obj, evt){
  var container = $(obj).closest('.search-wrapper');
  if(!container.hasClass('active')){
    container.addClass('active');
    evt.preventDefault();
  }
  else if(container.hasClass('active') && $(obj).closest('.input-holder').length == 0){
    container.removeClass('active');
    // clear input
    container.find('.search-input').val('');
    // hide result container when we press close
    container.find('.result-container').fadeOut(100);
  }
}
function submitFn(obj, evt){
  jQuery.expr[':'].Contains = function(a,i,m){
      return (a.textContent || a.innerText || "").toUpperCase().indexOf(m[3].toUpperCase())>=0;
  };
  function filterList() { 
  $('input')
      .change( function () {
        var filter = $(obj).find('.search-input').val().trim();
        if(filter) {
          $matches = $(list).find('a:Contains(' + filter + ')').parent();
          $('li', list).not($matches).slideUp();
          $matches.slideDown()
        } else {
          $(list).find("li").slideDown();
        }
        return false;
      })
    .keyup( function () {
        $(this).change();
    });
  }
  $(function () {
    filterList();
  });
  $(obj).find('.result-container').fadeIn(100);
  evt.preventDefault();
}
// back-to-top
$(document).ready(function(o) {
    var t = 300,
    a = 1200,
    s = 700,
    l = o(".js__back-to-top");
    o(window).scroll(function() {
        o(this).scrollTop() > t ? l.addClass("-is-visible") : l.removeClass("-is-visible -zoom-out"),
        o(this).scrollTop() > a && l.addClass("-zoom-out")
    }),
    l.on("click",
    function(t) {
        t.preventDefault(),
        o("body,html").animate({
            scrollTop: 0
        },
        s)
        $('#header .nav-two-list').find('a').removeClass('active1');
    })
});
$(function () {
  $('.swiper-change li').click(function(){
    $(this).css({'height':'11px','top':'2px'}).siblings().css({'height':'7px','top':'4px'})
     var s = $(this).index();
     $('.swiper-pages .swiper-page').eq(s).addClass('show-swiper').siblings().removeClass('show-swiper')
      $('.show-swiper .imgChange').hide();
     $('.show-swiper .imgChange').eq(0).show();
    })
  var i = 0;
  if(i >= $('.show-swiper .imgChange').length){
    i = 0;
  }
  $('.show-swiper .imgChange').hide();
  $('.show-swiper .imgChange').eq(i).show();
  $('.nextBtn').click(function(){
    i++;
    if(i >= $('.show-swiper .imgChange').length){
      i = 0;
    }
    $('.show-swiper .imgChange').hide();
    $('.show-swiper .imgChange').eq(i).show();
  });
  $('.prevBtn').click(function(){
    i--;
    if(i < 0){
      i = $('.show-swiper .imgChange').length-1;
    }
    $('.show-swiper .imgChange').hide();
    $('.show-swiper .imgChange').eq(i).show();
  })
}) 