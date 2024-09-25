
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


document.addEventListener('mousemove', function(e) {
  const cursorEffect = document.getElementById('cursor-effect');
  const scrollbarWidth = 12; // 根據你的滾動條寬度設置

  // 檢查滑鼠是否在滾動條範圍內
  const isOverScrollbar = (e.pageX > window.innerWidth - scrollbarWidth-50);

  if (isOverScrollbar) {
    cursorEffect.style.opacity = 0; // 隱藏特效
  } else {
    cursorEffect.style.left = (e.pageX + 3) + 'px'; // 向右偏移 3 像素
    cursorEffect.style.top = (e.pageY + 10) + 'px'; // 向下偏移 10 像素
    cursorEffect.style.opacity = 1; // 顯示特效
  }
});

// 當滑鼠移開時隱藏特效
document.addEventListener('mouseleave', function() {
  const cursorEffect = document.getElementById('cursor-effect');
  cursorEffect.style.opacity = 0; // 隱藏特效
});
