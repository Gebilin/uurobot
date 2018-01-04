$(function () {
    /*二级导航联动*/
    function initia(n) {
        $('#ag-main .tab-cont .item').eq(n).addClass('show').siblings().removeClass('show');
        $('#ag-main .tab li').eq(n).addClass('now').siblings().removeClass('now');
        if (n == 0) {
            $('.cont-three textarea').attr('placeholder', '请简述您所在的城市、公司情况，以及您在商业经营方面的经验和代理意愿等；')
        } else if (n == 1) {
            $('.cont-three textarea').attr('placeholder', '请简述您所在的城市、公司情况，以及对定制机器人的需求等；')
        } else {
            $('.cont-three textarea').attr('placeholder', '请简述您所在的城市、公司情况、需求等；')
        }
    }

    /*  二级导航跳转*/
    $('#header .nav-two li').click(function () {
        $(this).siblings().find('a').removeClass('active1');
        $(this).find('a').addClass('active1');
        var n = $(this).index();
        initia(n)
        if (n == 0) {
            $('body').stop().animate({'scrollTop': ($('.agent-two')[0].offsetTop)}, 500);
        }
        if (n == 1) {
            $('body').stop().animate({'scrollTop': ($('.agent-two')[0].offsetTop)}, 500);
        }
        if (n == 2) {
            $('body').stop().animate({'scrollTop': ($('.agent-two')[0].offsetTop)}, 500);
        }
    })
    /*表单验证函数*/
    $('#ag-main .item:first').addClass('show')
    function nameBlur() {
        var name = $('#name').val();
        var reg = /^[\u4e00-\u9fa5]{1,7}$|^[\dA-Za-z ]{1,20}$/;
        if (name == '' || name == ' ') {
            $('#name').css({'border': '1px solid red'})
            $('.name-vali').html('*&nbsp;&nbsp;请输入姓名');
            return false;
        }
        else if (!reg.test(name)) {
            $('#name').css({'border': '1px solid red'})
            $('.name-vali').html('*&nbsp;&nbsp;中文或英文数字空格(最长不得超过7个汉字，或20个字节)');
            return false;
        } else {
            $('#name').css({'border': '1px solid #e8e8e8'})
            $('.name-vali').html('<i class="right-icon"></i>');
            return true;
        }
    }

    function telBlur() {
        var tel = $('#tel').val();
        var reg = /^0{0,1}(1[0-9][0-9]|15[7-9]|153|156|18[7-9])[0-9]{8}$/;
        if (tel == '') {
            $('#tel').css({'border': '1px solid red'})
            $('.tel-vali').html('*&nbsp;&nbsp;请输入手机号码');
            return false;
        }
        else if (!reg.test(tel)) {
            $('#tel').css({'border': '1px solid red'})
            $('.tel-vali').html('*&nbsp;&nbsp;请输入正确的电话号码');
            return false;
        } else {
            $('#tel').css({'border': '1px solid #e8e8e8'})
            $('.tel-vali').html('<i class="right-icon"></i>');
            return true;
        }
    }

    function companyBlur() {
        var company = $('#company').val();
        var reg = /^[\u4E00-\u9FA5A-Za-z0-9 ]+$/;
        if (company == '' || company == ' ') {
            $('#company').css({'border': '1px solid red'})
            $('.company-vali').html('*&nbsp;&nbsp;请输入公司名');
            return false;
        }
        else if (!reg.test(company)) {
            $('#company').css({'border': '1px solid red'})
            $('.company-vali').html('*&nbsp;&nbsp;禁止输入特殊字符');
            return false;
        } else {
            $('#company').css({'border': '1px solid #e8e8e8'})
            $('.company-vali').html('<i class="right-icon"></i>');
            return true;
        }
    }

    function detBlur() {
        var det = $('#det').val();
        var reg = /^[\u4E00-\u9FA5A-Za-z0-9,.，。；’“”‘（）()@%{}\[\]*【】、]+$/;
        if (det == '' || det == ' ') {
            $('#det').css({'border': '1px solid red'})
            $('.det-vali').html('*&nbsp;&nbsp;请输入描述');
            return false;
        }
        else if (!reg.test(det)) {
            $('#det').css({'border': '1px solid red'})
            $('.det-vali').html('*&nbsp;&nbsp;禁止输入特殊字符)');
            return false;
        } else {
            $('#det').css({'border': '1px solid #e8e8e8'})
            $('.det-vali').html('<i class="right-icon"></i>');
            return true;
        }
    }

    function validate() {
        var userName = nameBlur();
        var userTel = telBlur();
        var userCom = companyBlur();
        var userDet = detBlur();

        if (userName&& userTel&& userCom&& userDet) {
            sub();
        } else {
            return false;
        }
    }
    function sub() {
        var type = $(".now").index() + 1;
        var name = $("#name").val();
        var tel = $("#tel").val();
        var company = $("#company").val();
        var message = $("#det").val();
        $.ajax({
            url: 'update/agent.php',
            type: "GET",
            data: {type: type, name: name, tel: tel, company: company, message: message},
            async: 'false',
            success: function (data) {
                if (data == "ok") {
                    $('.mask').css({'z-index': '888','display':'block'})
                } else {
                    alert(data)
                }
            }

        });
    }
    /*   表单验证*/
    $('#ag-main #name').blur(function () {
        nameBlur();
    })
    $('#ag-main #tel').blur(function () {
        telBlur();
    })
    $('#ag-main #company').blur(function () {
        companyBlur();
    })
    $('#ag-main #det').blur(function () {
        detBlur();
    })
    $('#ag-main .vali').click(function () {
        validate();
    })
    /* 内容切换*/
    $('#ag-main .tab li').click(function () {
        $('#ag-main input').val('');
        $('#ag-main textarea').val('');
        $('#ag-main form span').empty();
        $('.cont-three input').css({'border': '1px solid #e8e8e8'});
        $('.cont-three textarea').css({'border': '1px solid #e8e8e8'});
        var n = $(this).index();
        initia(n)
        $('#header .nav-two li a').removeClass('active1')
    })
    /*关闭弹出层*/
    $('.mask .close').click(function () {
        $('.mask').css({'z-index': '-1','display':'none'})
        $('#ag-main input').val('');
        $('#ag-main textarea').val('');
        $('#ag-main form span').empty();
    })
})
