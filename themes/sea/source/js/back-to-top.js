// back-to-top.js
(function() {
  // 创建返回顶部按钮元素
  const backToTopBtn = document.createElement('div');
  backToTopBtn.id = 'back-to-top';
  backToTopBtn.innerHTML = '↑'; // 按钮显示的内容，也可以换成图标
  backToTopBtn.style.cssText = `
    position: fixed;
    bottom: 50px;
    right: 30px;
    width: 40px;
    height: 40px;
    line-height: 40px;
    text-align: center;
    color: #fff;
    border-radius: 50%;
    cursor: pointer;
    opacity: 0;
    visibility: hidden;
    transition: all 0.3s ease;
    z-index: 9999;
    background: #42b983;
    font-size: 16px;
    box-shadow: 0 2px 8px rgba(0,0,0,0.15);
  `;
  document.body.appendChild(backToTopBtn);

  // 监听滚动事件，控制按钮显示/隐藏
  window.addEventListener('scroll', function() {
    if (window.scrollY > 300) { // 滚动距离超过300px时显示按钮
      backToTopBtn.style.opacity = '1';
      backToTopBtn.style.visibility = 'visible';
    } else {
      backToTopBtn.style.opacity = '0';
      backToTopBtn.style.visibility = 'hidden';
    }
  });

  // 点击按钮返回顶部
  backToTopBtn.addEventListener('click', function() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth' // 平滑滚动效果
    });
  });
})();
