import React from 'react';
import { storiesOf } from '@storybook/react';
import App from './generics/App';

  storiesOf('App', module)
        .add('to storybook', () => <App />);
