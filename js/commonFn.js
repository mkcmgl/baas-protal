$(function() {
    /**
     * G_data
     */
    let loginUrl = 'http://10.221.19.216:8081/sd-baas/account-center/login', // 登录链接地址（即后台管理平台登录）
        indexUrl = 'http://10.221.19.216:8081/sd-baas/account-center/login', // 星火链网业务管理平台首页
        orderUrl = 'http://10.221.19.216:8081/sd-baas/account-center/login';
        
    /**
     * 获取登录信息
     */
    let token = sessionStorage.getItem("token");
    let loginPlatform = $("#login-platform");
    if (token) { 
        // 已登录：显示控制台，跳转到后台管理首页
        loginPlatform.html(`
            <div class="wdf-flex tr">
                <a class="portal-kzt" href="${indexUrl}" target="_self">
                    <img src="static/kzt.png" class="logor kzt" />
                </a>
            </div>
        `)
    } else { 
        // 未登录：显示登录按钮，跳转到后台管理登录页
        // <img src="static/xhlw-sy/denglu.png" class="kzt" width="14" />

        loginPlatform.html(`
            <div class="wdf-flex tr">
                <a href="${loginUrl}" class="header-right">
                    <span class="login-top" >登录</span>
                </a>
            </div>
        `)
    }
    // $.ajax({
    //     type: "get",
    //     url: "http://10.180.13.32:13001",
    //     dataType: "jsonp",
    //     jsonp: "jsoncallback",
        

    // })

    /**
     * jump-config-page
     */
    $(document).on("click", ".jump-config-page", function() {
        let _this = $(this),
            _href = _this.attr("data-href");

        if (struId && token) {
            // 已登录
            window.location.href = _href;
        } else {
            // 未登录
            window.location.href = loginUrl;
        }
    }).on("click", ".so-success-jump", function() {
        window.location.href = orderUrl;
    })
})