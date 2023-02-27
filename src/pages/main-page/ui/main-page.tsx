import { BugButton } from 'app/providers/error-boundary';
import { useTranslation } from 'react-i18next';

const MainPage = () => {
  const { t } = useTranslation('main');
  return (
    <div>
      <BugButton />
      {t('main page')}
    </div>
  );
};

export default MainPage;
