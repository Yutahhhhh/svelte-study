(function() {
  // システムテーマの検出
  function getSystemTheme() {
    return window.matchMedia('(prefers-color-scheme: dark)').matches;
  }

  // data-theme属性でのテーマ適用
  function applyTheme(isDark) {
    document.documentElement.setAttribute('data-theme', isDark ? 'dark' : 'light');
  }

  function initTheme() {
    // システムテーマに従う
    const isDark = getSystemTheme();
    applyTheme(isDark);
  }

  // システムテーマの変更監視
  function watchSystemTheme() {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    
    mediaQuery.addEventListener('change', (e) => {
      applyTheme(e.matches);
    });
  }

  initTheme();

  // DOMが読み込まれた後に監視を開始
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', watchSystemTheme);
  } else {
    watchSystemTheme();
  }
})();
