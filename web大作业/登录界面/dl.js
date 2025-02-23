// 默认隐藏验证码登录和微信登录选项
document.querySelector('.captcha-login').style.display = 'none';
document.querySelector('.wechat-login').style.display = 'none';

// 点击验证码登录时显示验证码登录表单
document.getElementById('captchaLogin').addEventListener('click', function(event) {
    event.preventDefault();
    document.querySelector('.captcha-login').style.display = 'block';
    document.querySelector('.wechat-login').style.display = 'none';
});

// 点击微信登录时显示微信登录按钮
document.getElementById('weChatLogin').addEventListener('click', function(event) {
    event.preventDefault();
    document.querySelector('.wechat-login').style.display = 'block';
    document.querySelector('.captcha-login').style.display = 'none';
});
