import { lazy } from 'react';

export const AboutPageAsync = lazy(
  () => new Promise((resolve) => {
    setTimeout(() => {
      // @ts-ignore
      resolve(import('./about-page'));
    }, 1500);
  }),
);
