
document.addEventListener('DOMContentLoaded', function () {
  // 取得下拉菜單和切換按鈕
  const navMenu = document.querySelector('.nav-menu');
  const menuButton = document.querySelector('.menu-button');

  // 初始化下拉菜單狀態
  navMenu.style.opacity = '0';
  navMenu.style.pointerEvents = 'none';

  // 點擊下拉菜單按鈕顯示/隱藏菜單
  menuButton.addEventListener('click', () => {
    if (navMenu.style.opacity === '0') {
      navMenu.style.opacity = '1';
      navMenu.style.pointerEvents = 'auto'; // 顯示時啟用點擊事件
    } else {
      navMenu.style.opacity = '0';
      navMenu.style.pointerEvents = 'none'; // 隱藏時禁用點擊事件
    }
  });

  // 點擊其他地方隱藏下拉菜單
  document.addEventListener('click', (event) => {
    if (!menuButton.contains(event.target) && !navMenu.contains(event.target)) {
      navMenu.style.opacity = '0';
      navMenu.style.pointerEvents = 'none';
    }
  });
  

  const menuToggle = document.querySelector('.menu-toggle');
  const mobileNav = document.querySelector('.mobile-nav');

  menuToggle.addEventListener('click', function() {
    // 切換菜單的顯示狀態
    mobileNav.classList.toggle('active');
  });
});



document.addEventListener('DOMContentLoaded', function() {
  const scrollToTopBtn = document.getElementById('scroll-to-top-btn');

  // 當頁面滾動時顯示/隱藏按鈕
  window.addEventListener('scroll', function() {
      if (window.scrollY > 300) { // 當滾動超過 300px 顯示按鈕
          scrollToTopBtn.style.display = 'block';
      } else {
          scrollToTopBtn.style.display = 'none';
      }
  });

  // 當點擊按鈕時，滾動到頁面頂部
  scrollToTopBtn.addEventListener('click', function() {
      window.scrollTo({ top: 0, behavior: 'smooth' });
  });
});


// 壓下去顯示圖案
const header = document.querySelector('header');
const imageContainer = document.getElementById('press_show_cute');

header.addEventListener('click', (event) => {
  // 獲取游標的座標
  const x = event.clientX; // 游標的 X 軸位置
  const y = event.clientY; // 游標的 Y 軸位置

  // 創建新的圖片元素
  const img = document.createElement('img');
  img.src = '/images/0.png'; // 設定圖片來源
  img.style.position = 'absolute'; // 使圖片絕對定位
  
  // 設置圖片在游標旁邊的位置
  img.style.left = `${x + 5}px`; // 向右偏移10像素
  img.style.top = `${y - 25}px`; // 向上偏移25像素（根據圖片大小調整）
  
  // 設置圖片大小
  img.style.width = '30px'; // 設定寬度
  img.style.height = '30px'; // 設定高度
  
  imageContainer.appendChild(img); // 將圖片添加到容器中

  // 設定圖片的顯示時間，然後移除
  setTimeout(() => {
    img.remove();
  }, 800); // 2 秒後移除圖片
});
