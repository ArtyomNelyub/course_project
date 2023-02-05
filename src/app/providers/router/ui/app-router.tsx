import path from 'path';
import { AboutPage } from 'pages/about-page';
import { MainPage } from 'pages/main-page';
import { Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import { routeConfig } from 'shared/config/rout-config/rout-config';

console.log(Object.values(routeConfig).map(({ element }) => element));

const AppRouter = () => {
  return (
    <Suspense fallback={<div>loading...</div>}>
      <Routes>
        {Object.values(routeConfig).map(({ element, path }) => (
          <Route key={path} path={path} element={element} />
        ))}
      </Routes>
    </Suspense>
  );
};

export default AppRouter;
