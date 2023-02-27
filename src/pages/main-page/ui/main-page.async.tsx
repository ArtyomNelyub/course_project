import { lazy } from 'react';

export const MainPageAsync = lazy(
  () => new Promise((resolve) => {
    setTimeout(() => {
      // @ts-ignore
      resolve(import('./main-page'));
    }, 1500);
  }),
);
