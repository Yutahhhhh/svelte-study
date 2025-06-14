(function() {
  // システムテーマの検出
  function getSystemTheme() {
    return window.matchMedia('(prefers-color-scheme: dark)').matches;
  }

  function applyTheme(isDark) {
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }

  function initTheme() {
    const isDark = getSystemTheme();
    applyTheme(isDark);
  }

  // システムテーマの変更を監視して、リアルタイムに反映
  function watchSystemTheme() {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    
    mediaQuery.addEventListener('change', (e) => {
      applyTheme(e.matches);
    });
  }

  initTheme();

  // DOMが読み込まれた後に監視をはじめる
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', watchSystemTheme);
  } else {
    watchSystemTheme();
  }
})();
