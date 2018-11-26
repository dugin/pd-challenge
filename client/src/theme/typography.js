import Typography from 'typography';

const typography = new Typography({
  baseFontSize: '18px',
  baseLineHeight: 1.666,
  googleFonts: [
    {
      name: 'Roboto',
      styles: ['400', '500', '600', '700']
    },
    {
      name: 'Montserrat',
      styles: ['400', '500', '600', '700']
    }
  ],
  headerFontFamily: ['Montserrat', 'Helvetica', 'Arial', 'sans-serif'],
  bodyFontFamily: ['Roboto', 'Helvetica', 'Arial', 'sans-serif']
});

export default typography;
