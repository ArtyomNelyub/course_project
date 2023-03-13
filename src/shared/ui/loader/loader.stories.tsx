import React from 'react';
import { ComponentStory, ComponentMeta, Story } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/theme-decorator/theme-decorator';
import { THEME } from 'app/providers/theme-provider';
import { Loader } from './loader';

export default {
  title: 'shared/Loader',
  component: Loader,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Loader>;

const Template: ComponentStory<typeof Loader> = (args) => <Loader {...args} />;

export const Primary : Story = Template.bind({});

export const PrimaryDark : Story = Template.bind({});
PrimaryDark.decorators = [ThemeDecorator(THEME.DARK)];
