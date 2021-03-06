import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ExamplePage } from './ExamplePage';
import * as HeaderStories from './Header.stories';

export default {
  title: 'Example/Page',
  component: ExamplePage
} as ComponentMeta<typeof ExamplePage>;

const Template: ComponentStory<typeof ExamplePage> = (args) => <ExamplePage {...args} />;

export const LoggedIn = Template.bind({});
LoggedIn.args = {
  // More on composing args: https://storybook.js.org/docs/react/writing-stories/args#args-composition
  ...HeaderStories.LoggedIn.args
};

export const LoggedOut = Template.bind({});
LoggedOut.args = {
  ...HeaderStories.LoggedOut.args
};
