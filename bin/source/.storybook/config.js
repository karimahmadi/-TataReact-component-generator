import { configure } from '@storybook/react';
import { initializeRTL } from 'storybook-addon-rtl';

initializeRTL();

const req = require.context('../src', true, /[^/]+\/stories.js$/);

function loadStories() {
	req.keys().forEach((filename) => req(filename));
}

configure(loadStories, module);
