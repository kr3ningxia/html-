var searchContent = document.querySelector('#search-content') ;
var suggestion = document.querySelector('.suggestion');
searchContent.addEventListener('input',function(e){
  var value = searchContent.value;
  if(value){
  suggestion.classList.add('active');
  } else {
       suggestion.classList.remove('active');
  }
});
//响应式菜单部分
const menuButton = document.getElementById('menuButton');
const hbMenu = document.querySelector('.hb');
menuButton.addEventListener('click', function() {
    
    hbMenu.style.display = hbMenu.style.display === 'block' ? 'none' : 'block';
    
    if (hbMenu.style.display === 'block') {
        menuButton.textContent = 'Close Menu';
    } else {
        menuButton.textContent = 'Open Menu';
    }
});