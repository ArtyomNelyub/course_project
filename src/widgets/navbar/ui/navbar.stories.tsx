import React from 'react';
import { ComponentStory, ComponentMeta, Story } from '@storybook/react';

import { ThemeDecorator } from 'shared/config/storybook/theme-decorator/theme-decorator';
import { Navbar} from './navbar';
import { THEME } from 'app/providers/theme-provider';

export default {
  title: 'widgets/Navbar',
  component: Navbar,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Navbar>;

const Template: ComponentStory<typeof Navbar> = (args) => <Navbar {...args} />;

export const Light : Story = Template.bind({});
Light.args = {};

export const Dark : Story = Template.bind({});
Dark.decorators=[ThemeDecorator(THEME.DARK)]

