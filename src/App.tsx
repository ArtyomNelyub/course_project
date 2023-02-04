import { Routes, Route, Link } from 'react-router-dom';
import { AboutPageAsync } from './pages/about-page/about-page.async';
import { MainPageAsync } from './pages/main-page/main-page.async';
import { Suspense } from 'react';
import { useTheme } from './theme/useTheme';
import './styles/index.scss';
import { classNames } from './helpers/class-names/class-names';

const App = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className={classNames('app', {}, [theme])}>
      <button onClick={toggleTheme}>TOGGLE THEME</button>
      <Link to='/'>Main</Link> <br />
      <Link to='/about'>About</Link>
      <Suspense fallback={'loading'}>
        <Routes>
          <Route path='/about' element={<AboutPageAsync />} />
          <Route path='/' element={<MainPageAsync />} />
        </Routes>
      </Suspense>
    </div>
  );
};

export default App;
