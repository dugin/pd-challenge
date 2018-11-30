import Typography from 'typography';

const typography = new Typography({
  baseFontSize: '18px',
  baseLineHeight: 1,
  googleFonts: [
    {
      name: 'Montserrat',
      styles: ['400', '500', '600', '700']
    }
  ],
  headerFontFamily: ['Montserrat', 'Helvetica', 'Arial', 'sans-serif'],
  bodyFontFamily: ['Montserrat', 'Helvetica', 'Arial', 'sans-serif']
});

export default typography;
