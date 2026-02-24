const initThemeScript = `(function(){
  try {
    var stored = localStorage.getItem('theme');
    var preferredDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    var theme = stored === 'dark' || stored === 'light' ? stored : (preferredDark ? 'dark' : 'light');
    document.documentElement.classList.toggle('dark', theme === 'dark');
    document.documentElement.style.colorScheme = theme;
  } catch (e) {
    document.documentElement.classList.toggle('dark', false);
    document.documentElement.style.colorScheme = 'light';
  }
})();`;

export function ThemeInitScript() {
  return <script>{initThemeScript}</script>;
}
