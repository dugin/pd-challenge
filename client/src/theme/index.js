import React from 'react';
import { GoogleFont, TypographyStyle } from 'react-typography';
import { ThemeProvider } from 'styled-components';
import typography from './typography';

const Theme = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <section>
        <TypographyStyle typography={typography} />
        <GoogleFont typography={typography} />
        {children}
      </section>
    </ThemeProvider>
  );
};

const theme = {
  colors: {
    background: '#fafafa',
    backgroundTwo: '#fff',
    accent: '#FFCE70',
    palePurple: '#ba7fd8',
    pinkPurple: '#c545df',
    sandy: '#f4db6f',
    sandyTwo: '#f3d36f',
    greenishTeal: '#2ecc71',
    peachyPink: '#ff8e8e',
    text: {
      light: '#c6c6c6',
      pinkishGrey: '#c8c8c8',
      regular: '#b8b8b8',
      warmGrey: '#939393',
      warmGreyTwo: '#9a9a9a',
      bold: '#a7a7a7',
      brownishGrey: '#606060',
      brownishGreyTwo: '#6d6d6d',
      greyishTwo: '#a9a9a9'
    }
  }
};

export default Theme;
