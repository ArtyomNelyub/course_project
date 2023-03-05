import React from 'react';
import { ComponentStory, ComponentMeta, Story } from '@storybook/react';
import { AppLink, AppLinkTheme } from './app-link';
import { ThemeDecorator } from 'shared/config/storybook/theme-decorator/theme-decorator';
import { THEME } from 'app/providers/theme-provider';

export default {
  title: 'shared/AppLink',
  component: AppLink,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
  args: {
    to: '/'
  }
} as ComponentMeta<typeof AppLink>;

const Template: ComponentStory<typeof AppLink> = (args) => <AppLink {...args} />;

export const Primary : Story = Template.bind({});
Primary.args = {
  children: 'Text',
  theme: AppLinkTheme.PRIMARY,
};

export const Secondary : Story = Template.bind({});
Secondary.args = {
  children: 'Text',
  theme: AppLinkTheme.SECONDARY
};

export const Red : Story = Template.bind({});
Red.args = {
  children: 'Text',
  theme: AppLinkTheme.RED
};

export const PrimaryDark : Story = Template.bind({});
PrimaryDark.args = {
  children: 'Text',
  theme: AppLinkTheme.PRIMARY,
};
PrimaryDark.decorators = [ThemeDecorator(THEME.DARK)]

export const SecondaryDark : Story = Template.bind({});
SecondaryDark.args = {
  children: 'Text',
  theme: AppLinkTheme.SECONDARY
};
SecondaryDark.decorators = [ThemeDecorator(THEME.DARK)]

export const RedDark : Story = Template.bind({});
RedDark.args = {
  children: 'Text',
  theme: AppLinkTheme.RED
};
RedDark.decorators = [ThemeDecorator(THEME.DARK)]
