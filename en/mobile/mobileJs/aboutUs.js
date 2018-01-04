/**
 * Created by Administrator on 2017/12/15.
 */
$(function () {
    $('.page05_headers01:nth-child(3)').find('img').addClass('page05Animate');
    $('.page05_headers01').click(function () {
        if($(this).next().css('display') == 'none'){
            $('.page05_headers01').find('img').removeClass('page05Animate').attr('src','pics/aboutUs/page05/pic01.png').parent().parent().css('borderTop','2px dashed #e5e5e5').css('background','#fff').css('color','#555').next().slideUp().prev().eq(0).css('border','none');
            $('.page05_headers01:nth-child(7)').css('borderBottom','2px dashed #e5e5e5');
            $(this).find('img').attr('src','pics/aboutUs/page05/pic02.png').addClass('page05Animate').parent().parent().css('border','none').css('background','#555').css('color','#fff').next().slideDown();
        }
    })
    $('.page06_word').click(function () {
        $('.allmap').eq($(this).index() - 1).css('zIndex',$('.allmap').eq($(this).index() - 1).css('zIndex')+1).siblings().css('zIndex',$('.allmap').eq($(this).index() - 1).siblings().css('zIndex')-1)
    })
})
// 百度地图API功能
var map = new BMap.Map("allmap1");
$('.page06_word').click(function () {
    $('.allmap').hide().eq($(this).index() - 1).show()
})
var point = new BMap.Point(116.353516, 40.039328);
map.addControl(new BMap.NavigationControl({anchor:BMAP_ANCHOR_TOP_LEFT,type:BMAP_NAVIGATION_CONTROL_ZOOM}));
map.centerAndZoom(point, 15);
var marker = new BMap.Marker(point);  // 创建标注
map.addOverlay(marker);               // 将标注添加到地图中
marker.setAnimation(BMAP_ANIMATION_BOUNCE); //跳动的动画
setTimeout(function(){
    map.setZoom(14);
}, 30);  //2秒后放大到14级
map.enableScrollWheelZoom(true);
// 百度地图API功能
var map = new BMap.Map("allmap");
var point = new BMap.Point(113.95554, 22.560596);
map.addControl(new BMap.NavigationControl({anchor:BMAP_ANCHOR_TOP_LEFT,type:BMAP_NAVIGATION_CONTROL_ZOOM}));
map.centerAndZoom(point, 15);
var marker = new BMap.Marker(point);  // 创建标注
map.addOverlay(marker);               // 将标注添加到地图中
marker.setAnimation(BMAP_ANIMATION_BOUNCE); //跳动的动画
setTimeout(function(){
    map.setZoom(14);
}, 30);  //2秒后放大到14级
map.enableScrollWheelZoom(true);