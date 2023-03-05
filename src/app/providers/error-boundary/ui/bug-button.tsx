import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Button } from 'shared/ui/button/button';

// Компонент для тестирования ошибки
export const BugButton = () => {
  const [error, setError] = useState(false);
  const { t } = useTranslation();

  const toggleThrow = () => setError(true);

  useEffect(() => {
    if (error) {
      throw new Error();
    }
  }, [error]);

  return (
    <Button
      onClick={toggleThrow}
    >
      {t('throw')}
    </Button>
  );
};
