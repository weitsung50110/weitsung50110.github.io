document.addEventListener('DOMContentLoaded', function() {
    function generateTOC() {
        const toc = document.getElementById('toc');
        const tocList = toc.querySelector('ul');

        // 解析 Markdown 內容中的標題
        const headers = document.querySelectorAll('article h1, article h2, article h3, article h4, article h5, article h6');

        headers.forEach(header => {
            // 創建 id，將標題文字轉換為符合 id 的格式
            const id = header.textContent.trim().replace(/\s+/g, '-').toLowerCase();
            header.id = id; // 設置 id

            const listItem = document.createElement('li');
            const link = document.createElement('a');
            link.href = `#${id}`;
            link.textContent = header.textContent;

            // 根據標題層級設置縮排
            const level = parseInt(header.tagName.replace('H', ''), 10);
            listItem.style.marginLeft = `${(level - 1) * 20}px`;

            listItem.appendChild(link);
            tocList.appendChild(listItem);
        });

        // 處理列表項
        const lists = document.querySelectorAll('article ul, article ol');
        lists.forEach(list => {
            list.classList.add('toc-list'); // 添加自定義樣式類
        });

        // 如果目錄為空，隱藏目錄
        if (tocList.childElementCount === 0) {
            toc.style.display = 'none';
        }
    }

    // 確保內容完全加載後生成目錄
    setTimeout(generateTOC, 100);
});

// toc的toggle button 出現和消失控制
document.addEventListener('DOMContentLoaded', function() {
    const toc = document.getElementById('toc');
    const tocToggle = document.getElementById('toc-toggle-btn');
    const postElement = document.querySelector('.post');
    
    if (window.innerWidth > 768) {
        // 桌面模式
        postElement.style.marginRight = '250px';
    }

    // 點擊按鈕切換目錄顯示狀態
    tocToggle.addEventListener('click', () => {
        if (window.innerWidth <= 768) {
            // 手機模式
            toc.classList.toggle('show');
        } else {
            // 桌面模式
            toc.classList.toggle('close');
            tocToggle.style.bottom = toc.classList.contains('close') ? '50%' : '55px';
            postElement.style.marginRight = toc.classList.contains('close') ? '0' : '250px';
        }
    });
});

// 控制png圖案出現在toc目錄的上面 當滑一定距離之後
document.addEventListener('DOMContentLoaded', function() {
    const imageContainer = document.querySelector('.toc_image-container');
    const toc = document.getElementById('toc');
    const showDistance = 138; // 設定滾動距離（以像素為單位）

    window.addEventListener('scroll', function() {
        if (window.scrollY > showDistance) {
            const tocRect = toc.getBoundingClientRect(); // 獲取目錄的位置
            const imageHeight = imageContainer.offsetHeight; // 獲取圖片高度

            // 設置圖片容器的top位置在目錄上方
            imageContainer.style.top = `${tocRect.top + window.scrollY - imageHeight}px`;
            imageContainer.style.display = 'block'; // 顯示圖片
        } else {
            imageContainer.style.display = 'none'; // 隱藏圖片
        }
    });
});