import React from 'react';
import { ComponentStory, ComponentMeta, Story } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/theme-decorator/theme-decorator';
import { THEME } from 'app/providers/theme-provider';
import { NotFound } from './not-found-page';

export default {
  title: 'pages/NotFound',
  component: NotFound,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof NotFound>;

const Template: ComponentStory<typeof NotFound> = (args) => <NotFound />;

export const Primary : Story = Template.bind({});

export const PrimaryDark : Story = Template.bind({});
PrimaryDark.decorators = [ThemeDecorator(THEME.DARK)];
