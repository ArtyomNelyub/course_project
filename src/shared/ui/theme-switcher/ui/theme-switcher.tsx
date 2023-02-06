import { THEME, useTheme } from 'app/providers/theme-provider';
import { classNames } from 'shared/lib/class-names/class-names';
import { Button, ThemeButton } from 'shared/ui/button/button';
import LightIcon from 'shared/assets/icons/theme-light.svg';
import DarkIcon from 'shared/assets/icons/theme-dark.svg';
import cls from './theme-switcher.module.scss';

interface ThemeSwitcherProps {
  className?: string;
}

export const ThemeSwitcher = ({ className }: ThemeSwitcherProps) => {
  const { theme, toggleTheme } = useTheme();
  return (
    <Button
      theme={ThemeButton.CLEAR}
      className={classNames(cls.themeSwitcher, {}, [className])}
      onClick={toggleTheme}
    >
      {theme === THEME.DARK ? <DarkIcon /> : <LightIcon />}
    </Button>
  );
};
