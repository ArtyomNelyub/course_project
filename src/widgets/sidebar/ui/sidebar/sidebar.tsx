import { useState } from 'react';
import { classNames } from 'shared/lib/class-names/class-names';
import { Button } from 'shared/ui/button';
import { LangSwitcher } from 'shared/ui/lang-switcher';
import { ThemeSwitcher } from 'shared/ui/theme-switcher';
import cls from './sidebar.module.scss';

interface SidebarProps {
  className?: string;
}

export const Sidebar = ({ className }: SidebarProps) => {
  const [collapsed, setCollapsed] = useState(false);

  const onToggle = () => {
    setCollapsed(!collapsed);
  };

  return (
    <div
      className={classNames(cls.sidebar, { [cls.collapsed]: collapsed }, [
        className,
      ])}
    >
      <Button onClick={onToggle}>toggle</Button>
      <div className={cls.switchers}>
        <ThemeSwitcher />
        <LangSwitcher className={cls.lang} />
      </div>
    </div>
  );
};
