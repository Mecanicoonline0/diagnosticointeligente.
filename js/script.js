document.addEventListener('DOMContentLoaded', function(){
  const menuBtn = document.getElementById('menuBtn');
  const nav = document.getElementById('nav');

  menuBtn && menuBtn.addEventListener('click', function(){
    if(nav.style.display === 'flex'){
      nav.style.display = '';
    } else {
      nav.style.display = 'flex';
      nav.style.flexDirection = 'column';
      nav.style.gap = '12px';
    }
  });
});