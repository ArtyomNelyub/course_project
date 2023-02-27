import { classNames } from 'shared/lib/class-names/class-names';
import cls from './loader.module.scss';

interface LoaderProps {
  className?: string;
}

export const Loader = ({ className }: LoaderProps) => (
  <div className={classNames(cls.ldsRipple, {}, [className])}>
    <div />
    <div />
  </div>
);
