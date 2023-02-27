import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/class-names/class-names';
import { Button } from 'shared/ui/button';
import cls from './page-error.module.scss';

interface PageErrorProps {
  className?: string;
}

export const PageError = ({ className }: PageErrorProps) => {
  const { t } = useTranslation();

  const reloadPage = () => {
    // eslint-disable-next-line no-restricted-globals
    location.reload();
  };

  return (
    <div className={classNames(cls.pageError, {}, [className])}>
      <p>{t('unpredictable error')}</p>
      <Button onClick={reloadPage}>
        {t('update')}
      </Button>
    </div>
  );
};
