import { useContext } from 'react';
import { THEME, ThemeContext, LOCAL_STORAGE_THEME_KEY } from './theme-context';

interface UseThemeResult {
  toggleTheme: () => void;
  theme: THEME;
}

export function useTheme(): UseThemeResult {
  const { theme, setTheme } = useContext(ThemeContext);
  const toggleTheme = () => {
    const newTheme = theme === THEME.LIGHT ? THEME.DARK : THEME.LIGHT
    setTheme(newTheme);
    localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme)
  };
  return { theme, toggleTheme };
}
