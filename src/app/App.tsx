import { classNames } from 'shared/lib/class-names/class-names';
import { useTheme } from 'app/providers/theme-provider';
import { AppRouter } from 'app/providers/router';
import { Navbar } from 'widgets/navbar';
import './styles/index.scss';

const App = () => {
  const { theme } = useTheme();

  return (
    <div className={classNames('app', {}, [theme])}>
      <Navbar />
      <AppRouter />
    </div>
  );
};

export default App;
