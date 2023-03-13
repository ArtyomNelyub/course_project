import { Story } from '@storybook/react';
import { THEME } from 'app/providers/theme-provider';

export const ThemeDecorator = (theme: THEME) => (StoryComponent: Story) => (
  <div className={`app ${theme}`}>
    <StoryComponent />
  </div>
);
