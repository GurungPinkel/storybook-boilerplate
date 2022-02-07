import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ExampleHeader } from './ExampleHeader';

export default {
  title: 'Example/Header',
  component: ExampleHeader
} as ComponentMeta<typeof ExampleHeader>;

const Template: ComponentStory<typeof ExampleHeader> = (args) => <ExampleHeader {...args} />;

export const LoggedIn = Template.bind({});
LoggedIn.args = {
  user: {}
};

export const LoggedOut = Template.bind({});
LoggedOut.args = {};
