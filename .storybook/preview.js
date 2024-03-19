import React from 'react';
import { ThemeProvider } from '@storybook/theming';

// Define your ThemeProvider decorator

const themes = {
  // Define your theme properties here
  dark: {
    color: 'white',
    backgroundcolor: 'black',
    hover:"#282829",
    disable:"#F2F3F5"
  },
  light: {
    color: 'white',
    backgroundcolor: 'black',
    hover:"#282829",
    disable:"#282829"
  }
  // Add more theme properties as needed
};
const withThemeProvider = (Story,context) => {
  console.log(context.parameters.theme,"context")
  const { value } = context.globals.backgrounds
  console.log(context,"context")
  const storyTheme = value === '#333333' ? themes.dark : themes.light
  return(
  <ThemeProvider theme={storyTheme}>
    <Story />
  </ThemeProvider>
  )
  };

export const decorators = [withThemeProvider];

/** @type { import('@storybook/react').Preview } */
const preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
