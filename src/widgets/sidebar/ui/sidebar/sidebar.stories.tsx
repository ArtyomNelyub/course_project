import React from 'react';
import { ComponentStory, ComponentMeta, Story } from '@storybook/react';

import {
  ThemeDecorator,
} from 'shared/config/storybook/theme-decorator/theme-decorator';
import { THEME } from 'app/providers/theme-provider';
import { Sidebar } from './sidebar';

export default {
  title: 'widgets/Sidebar',
  component: Sidebar,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Sidebar>;

const Template: ComponentStory<typeof Sidebar> = (args) => <Sidebar {...args} />;

export const Light : Story = Template.bind({});
Light.args = {};

export const Dark : Story = Template.bind({});
Dark.decorators = [ThemeDecorator(THEME.DARK)];
