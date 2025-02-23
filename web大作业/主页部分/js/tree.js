// 获取所有有子菜单的项
document.querySelectorAll('.has-children').forEach(function(item) {
    item.addEventListener('click', function() {
        var subMenu = this.nextElementSibling; // 获取当前项的子菜单
        if (subMenu && subMenu.classList.contains('sub-menu')) {
            // 如果子菜单是隐藏的，则展开；如果是展开的，则隐藏
            if (subMenu.style.display === 'block') {
                subMenu.style.display = 'none';
                this.classList.remove('open');
            } else {
                subMenu.style.display = 'block';
                this.classList.add('open');
            }
        }
    });
});
