// 確保 DOM 內容加載完成後再執行
document.addEventListener('DOMContentLoaded', function() {
    // 選取所有年份標題
    const yearTitles = document.querySelectorAll('.year-title');
    
    // 為每個年份標題添加點擊事件監聽器
    yearTitles.forEach(function(title) {
      title.addEventListener('click', function() {
        const year = this.innerText; // 獲取被點擊的年份
        togglePosts(year); // 調用 togglePosts 函數
      });
    });
  });
  
  // 切換文章列表的顯示狀態
  function togglePosts(year) {
    const postList = document.querySelector(`#posts-${year}`); // 獲取對應年份的文章列表
    // 根據當前顯示狀態切換顯示或隱藏
    if (postList.style.display === "none") {
      postList.style.display = "block"; // 顯示文章列表
    } else {
      postList.style.display = "none"; // 隱藏文章列表
    }
  }
  