import { extendTheme } from '@chakra-ui/react';

export const theme = extendTheme({
  colors: {
    black: '#000000',
    white: '#ffffff',
    yellow: '#FFBA08',
    gray: {
      '700': '#000000', // Dark - Black
      '600': '#47585B', // Dark - Headings and Text
      '500': '#999999', // Dark - Info
      '400': '#999999', // Dark - Info 50%
      '300': '#DADADA', // Light - Info
      '200': '#F5F8FA', // Light - Headings and Text
      '100': '#FFFFFF', // Light - White
    },
  },
  fonts: {
    heading: 'Poppins',
    body: 'Poppins',
  },
  styles: {
    global: {
      body: {
        bg: 'gray.200',
        color: 'gray.600',
      },
    },
  },
});
