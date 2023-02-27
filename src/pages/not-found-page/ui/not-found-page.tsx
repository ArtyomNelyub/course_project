import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/class-names/class-names';
import cls from './not-found-page.module.scss';

interface NotFoundProps {
  className?: string;
}

export const NotFound = ({ className }: NotFoundProps) => {
  const { t } = useTranslation();
  return (
    <div className={classNames(cls.notFoundPage, {}, [className])}>
      {t('page not found')}
    </div>
  );
};
