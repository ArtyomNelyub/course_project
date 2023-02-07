import { classNames } from 'shared/lib/class-names/class-names';
import { AppLink, AppLinkTheme } from 'shared/ui/app-link/app-link';
import cls from './navbar.module.scss';

interface NavbarProps {
  className?: string;
}

export const Navbar = ({ className }: NavbarProps) => {
  return (
    <nav className={classNames(cls.navbar, {}, [className])}>
      <div className={cls.links}>
        <AppLink theme={AppLinkTheme.SECONDARY} to='/' className={cls.mainLink}>
          Main
        </AppLink>
        <AppLink theme={AppLinkTheme.SECONDARY} to='/about'>
          About
        </AppLink>
      </div>
    </nav>
  );
};
