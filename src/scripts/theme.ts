function updateDocumentThemeClass(newTheme: Theme) {
  if (newTheme === 'light') {
    document.documentElement.classList.add('light');

    return;
  }

  document.documentElement.classList.remove('light');
}

function applyTheme(theme: Theme) {
  localStorage.setItem('theme', theme);
  updateDocumentThemeClass(theme);
}

const themeToggle = document.querySelector('theme-toggle') as HTMLElement & { setTheme: (newTheme: 'dark' | 'light') => void };
themeToggle.addEventListener('theme-change', ({ detail }: CustomEvent) => {
  applyTheme(detail.newTheme);
});

const lightColorSchemeMediaQuery = matchMedia('(prefers-color-scheme: light)');
lightColorSchemeMediaQuery.addEventListener('change', ({ matches }) => {
  const newTheme = matches ? 'light' : 'dark';

  applyTheme(newTheme);
  // The theme was changed externally (instead of using the toggle button)
  // Therefore, we have to update the state of themeToggle manually
  themeToggle.setTheme(newTheme);
});

const prefersLightTheme = lightColorSchemeMediaQuery.matches;
// Get the current stored theme
// If no preference is set previously in local storage, use user's color scheme preference
const currentTheme = localStorage.getItem('theme') as Theme
  ?? (prefersLightTheme ? 'light' : 'dark');

applyTheme(currentTheme);