import React from 'react';
import { ComponentStory, ComponentMeta, Story } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/theme-decorator/theme-decorator';
import { THEME } from 'app/providers/theme-provider';
import { PageError } from './page-error';

export default {
  title: 'widgets/PageError',
  component: PageError,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof PageError>;

const Template: ComponentStory<typeof PageError> = (args) => <PageError {...args} />;

export const Light : Story = Template.bind({});
Light.args = {};

export const Dark : Story = Template.bind({});
Dark.decorators = [ThemeDecorator(THEME.DARK)];
