$(function() {

    // 判断导航栏是否在原来位置上的标志，初始为false
    var test = false;
    $(window).scroll(function() {
        // 滚动条当前位置到窗口顶部的高度
        var h_num = $(window).scrollTop();
        let h_top = $('.bgf6').height() + 40;
        if (h_num > h_top) {
            $(".anchor-box").addClass('anchor-fixer');
            if (!test) {
                test = true;
            } 
        }else {
            $(".anchor-box").removeClass('anchor-fixer');
            if (test) {
                test = false;
            }
        }


        var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
        if (scrollTop > 500) {
            $(".noback").addClass("back");
            $(".noback").removeClass("noback");
        } else {
            $(".back").addClass("noback");
            $(".back").removeClass("back");
        }
    });

    // 锚点动画
    $('.anchor-item').click(function() {
        $('html,body').animate({ 
            scrollTop: ($($.attr(this, 'href')).offset().top - 50) + "px"
        }, 500);
    }); 

})