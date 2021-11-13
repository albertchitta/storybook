import React from 'react';

import { Card } from './Card';

export default {
  title: 'Example/Card',
  component: Card,
};

// eslint-disable-next-line react/jsx-props-no-spreading
const Template = (args) => <Card {...args} />;

export const LoggedIn = Template.bind({});
LoggedIn.args = {
  title: 'TITLE',
  text: 'text',
};

export const LoggedOut = Template.bind({});
LoggedOut.args = {};
