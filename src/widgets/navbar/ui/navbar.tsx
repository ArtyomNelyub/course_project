import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/class-names/class-names';
import { AppLink, AppLinkTheme } from 'shared/ui/app-link/app-link';
import cls from './navbar.module.scss';

interface NavbarProps {
  className?: string;
}

export const Navbar = ({ className }: NavbarProps) => {
  const { t } = useTranslation();
  return (
    <nav className={classNames(cls.navbar, {}, [className])}>
      <div className={cls.links}>/</div>
    </nav>
  );
};
