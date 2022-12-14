
import { themes } from '@storybook/theming';
import { initialize, mswDecorator } from 'msw-storybook-addon';

import '../src/styles/global.css';

const isDevelopment = window.CONFIG_TYPE === 'DEVELOPMENT';

// Initialize MSW
initialize({
  onUnhandledRequest: 'bypass',
  serviceWorker: {
    url: isDevelopment ? 'mockServiceWorker.js' : '/ignite-lab-design-system/mockServiceWorker.js'
  }
});

// Provide the MSW addon decorator globally
export const decorators = [mswDecorator];

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  docs: {
    theme: themes.dark
  }
}