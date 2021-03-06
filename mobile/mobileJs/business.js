/**
 * Created by Administrator on 2017/12/15.
 */
$(function(){
    /*正则表达式验证表单*/
    $('.myName').blur(function () {
        $(this).val($(this).val().replace(/(^\s*)|(\s*$)/g, ""));
        var reg=/^[\u4e00-\u9fa5]{1,7}$|^[\dA-Za-z ]{1,20}$/;
        if($(this).val() == ''){
            $(this).css({'border':'1px solid red'}).next().html('*&nbsp;&nbsp;请输入您的名称').fadeIn();
        }else if(reg.test($(this).val()) == false){
            $(this).css({'border':'1px solid red'});
            if($(this).val().length > 20){
                $(this).next().html('*&nbsp;&nbsp;最长不得超过20个字节').fadeIn();
            }else{
                $(this).next().html('*&nbsp;&nbsp;支持中/英文、下划线和字符串').fadeIn();
            }
        }else{
            $(this).css({'border':'1px solid #e9e9e9'});
            $(this).next().fadeOut();
        }
    }).focus(function () {
        $(this).css({'border':'1px solid #4bbcef'});
    })
    $('.myTel').blur(function () {
        var reg = /^1[345789]\d{9}$/;
        if($(this).val() == '') {
            $(this).css({'border':'1px solid red'}).next().html('*&nbsp;&nbsp;请输入手机号码').fadeIn();
        } else if(reg.test($(this).val()) == false){
            $(this).css({'border':'1px solid red'}).next().html('*&nbsp;&nbsp;请输入正确的电话号码').fadeIn();
        } else{
            $(this).css({'border':'1px solid #e9e9e9'});
            $(this).next().fadeOut();
        }
    }).focus(function () {
        $(this).css({'border':'1px solid #4bbcef'});
    })
    $('.myCom').blur(function () {
        $(this).val($(this).val().replace(/(^\s*)|(\s*$)/g, ""))
        var reg=/^[\u4E00-\u9FA5A-Za-z0-9 ]+$/;
        if($(this).val() == ''){
            $(this).css({'border':'1px solid red'}).next().html('*&nbsp;&nbsp;请输入公司名称').fadeIn();
        } else if(reg.test($(this).val()) == false){
            $(this).css({'border':'1px solid red'})
            if($(this).val().length > 20){
                $(this).next().html('*&nbsp;&nbsp;最长不得超过40个字节').fadeIn();
            }else{
                $(this).next().html('*&nbsp;&nbsp;支持中/英文、下划线和字符串').fadeIn();
            }
        } else{
            $(this).css({'border':'1px solid #e9e9e9'});
            $(this).next().fadeOut();
        }
    }).focus(function () {
        $(this).css({'border':'1px solid #4bbcef'});
    })
    $('.myPro').blur(function () {
        $(this).val($(this).val().replace(/(^\s*)|(\s*$)/g, ""))
        var reg=/^[\u4E00-\u9FA5A-Za-z0-9,.，。；’“”‘（）()@%{}\[\]*【】、]+$/;
        if($(this).val() == ''){
            $(this).css({'border':'1px solid red'}).next().html('*&nbsp;&nbsp;请输入描述').fadeIn();
        } else if(reg.test($(this).val()) == false){
            $(this).css({'border':'1px solid red'})
            if($(this).val().length > 200){
                $(this).next().html('*&nbsp;&nbsp;最长不得超过200个字节').fadeIn();
            }else{
                $(this).next().html('*&nbsp;&nbsp;支持中/英文、下划线和字符串').fadeIn();
            }
        }else{
            $(this).css({'border':'1px solid #e9e9e9'});
            $(this).next().fadeOut();
        }
    }).focus(function () {
        $(this).css({'border':'1px solid #4bbcef'});
    })

    function sub() {
        for(var i = 1;i <= 3; i ++){
            if($('.page02_word').eq(i-1).attr('title1') == 'on')
            {
                var type = i;
                break;
            }
        }
        var name = $(".myName").val();
        var tel = $(".myTel").val();
        var company = $(".myCom").val();
        var message = $(".myPro").val();
        $.ajax({
            url: './../update/agent.php',
            type: "GET",
            data: {type: type, name: name, tel: tel, company: company, message: message},
            async: 'false',
            success: function (data) {
                if (data == "ok") {
                    $('.weChatMark').fadeIn();
                    $('.alertWin').fadeIn();
                } else {
                    alert(data)
                }
            }
        });
    }


    /*正则表达式验证表单*/
    $('.page05_button').click(function () {
        var reg1 = /^[\u4e00-\u9fa5]{1,7}$|^[\dA-Za-z ]{1,20}$/;
        var reg2 = /^1[345789]\d{9}$/;
        var reg3 = /^[\u4E00-\u9FA5A-Za-z0-9 ]+$/;
        var reg4 = /^[\u4E00-\u9FA5A-Za-z0-9,.，。；’“”‘（）()@%{}\[\]*【】、]+$/;
        if($('.page05 input').val() != '' && $('.page05 textarea').val() != '' && $('.page05 input').next().css('display') == 'none' && $('.page05 textarea').next().css('display') == 'none'){

            sub();
            /*在这里提交信息*/


        }else if($('.myName').val() == ''){
            $('.myName').css({'border':'1px solid red'}).next().html('*&nbsp;&nbsp;请输入您的名称').fadeIn();
        }else if(reg1.test($('.myName').val()) == false){
            $('.myName').css({'border':'1px solid red'});
            if($('.myName').val().length > 20){
                $('.myName').next().html('*&nbsp;&nbsp;最长不得超过20个字节').fadeIn();
            }else{
                $('.myName').next().html('*&nbsp;&nbsp;支持中/英文、下划线和字符串').fadeIn();
            }
        }else if($('.myTel').val() == ''){
            $('.myTel').css({'border':'1px solid red'}).next().html('*&nbsp;&nbsp;请输入手机号码').fadeIn();
        } else if(reg2.test($('.myTel').val()) == false){
            $('.myTel').css({'border':'1px solid red'}).next().html('*&nbsp;&nbsp;请输入正确的电话号码').fadeIn();
        }else if($('.myCom').val() == ''){
            $('.myCom').css({'border':'1px solid red'}).next().html('*&nbsp;&nbsp;请输入公司名称').fadeIn();
        }else if(reg3.test($('.myCom').val()) == false){
            $('.myCom').css({'border':'1px solid red'})
            if($('.myCom').val().length > 20){
                $('.myCom').next().html('*&nbsp;&nbsp;最长不得超过40个字节').fadeIn();
            }else{
                $('.myCom').next().html('*&nbsp;&nbsp;支持中/英文、下划线和字符串').fadeIn();
            }
        }else if($('.myPro').val() == ''){
            $('.myPro').css({'border':'1px solid red'}).next().html('*&nbsp;&nbsp;请输入描述').fadeIn();
        }else if(reg4.test($('.myPro').val()) == false){
            $('.myPro').css({'border':'1px solid red'})
            if($('.myPro').val().length > 200){
                $('.myPro').next().html('*&nbsp;&nbsp;最长不得超过200个字节').fadeIn();
            }else{
                $('.myPro').next().html('*&nbsp;&nbsp;支持中/英文、下划线和字符串').fadeIn();
            }
        }else{}
    })
    $('.weChatMark').click(function () {
     $('.weChatMark').fadeOut();
     $('.weChatPic').fadeOut();
     $('.alertWin').fadeOut();
     $('body').css('overflowY','scroll')
     window.location.href = 'business.html'
     })
    $('.closeBtn').click(function () {
        $('.weChatMark').click()
    })
    $('.alertMark').click(function () {
        $('.weChatMark').click()
    })
    $('.page02_word:first-child div').addClass('page02_wordStyle');
    $('.page02_word').click(function () {
        $('.page05_word input').val('').css('border','1px solid #e8e8e8').next().hide()
        $('.page05_word textarea').val('').css('border','1px solid #e8e8e8').next().hide()
        $('.page02_word div').removeClass('page02_wordStyle')
        $(this).find('div').addClass('page02_wordStyle');
        if($(this).attr('title1') == 'off'){
            $('.page02_word').attr('title1','off');
            $(this).attr('title1','on');
            if($(this).index() == 0){
                $('.page04').hide().prev().show()
                $('.page05_word textarea').attr('placeholder','请简述您所在的城市、公司情况，以及您在商业经营方面的经验和代理意愿等；')
            }else{
                if($(this).index() == 1){
                    $('.page05_word textarea').attr('placeholder','请简述您所在的城市、公司情况，以及对定制机器人的需求等；')
                }
                $('.page04').show().prev().hide()
            }
        }
    })
})