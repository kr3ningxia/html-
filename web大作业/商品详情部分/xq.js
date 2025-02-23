// 获取按钮
const buyNowButton = document.querySelector('.btn:nth-of-type(2)');
const addToCartButton = document.querySelector('.btn:nth-of-type(3)');

// 点击事件
buyNowButton.addEventListener('click', function () {
    window.location.href = '../购物车部分/购物车.html'; // 跳转
});

addToCartButton.addEventListener('click', function () {
    window.location.href = '../购物车部分/购物车.html'; // 跳转
});