import { classNames } from 'shared/lib/class-names/class-names';
import { useTheme } from 'app/providers/theme-provider';
import { AppRouter } from 'app/providers/router';
import { Navbar } from 'widgets/navbar';
import { Sidebar } from 'widgets/sidebar';
import { Suspense } from 'react';
import './styles/index.scss';

function App() {
  const { theme } = useTheme();

  return (
    <div className={classNames('app', {}, [theme])}>
      <Suspense fallback="">
        <Navbar />
        <div className="content-page">
          <Sidebar />
          <AppRouter />
        </div>
      </Suspense>
    </div>
  );
}

export default App;
