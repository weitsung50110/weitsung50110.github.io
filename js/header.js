
document.addEventListener('DOMContentLoaded', function () {
  const navMenu = document.querySelector('.nav-menu');
  const menuButton = document.querySelector('.menu-button');

  // 點擊下拉菜單按鈕顯示/隱藏菜單
  menuButton.addEventListener('click', (event) => {
    event.stopPropagation(); // 阻止事件冒泡
    navMenu.classList.toggle('show'); // 切換顯示狀態
  });

  // 點擊其他地方隱藏下拉菜單
  document.addEventListener('click', () => {
    navMenu.classList.remove('show'); // 隱藏選單
  });
  

  const menuToggle = document.querySelector('.menu-toggle');
  const mobileNav = document.querySelector('.mobile-nav');

  menuToggle.addEventListener('click', function() {
    // 切換菜單的顯示狀態
    mobileNav.classList.toggle('active');
  });
});
