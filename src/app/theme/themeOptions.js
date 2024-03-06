import { createTheme } from '@mui/material';

export const themeOptions = {
  palette: {
    background: {
      default: '#0c0c0c',
      light_1: '#333333',
      light_2: '#232323',
      paper: '#333333',
      transparent: '#00000000',
    },
    text: {
      primary: 'rgba(255,255,255,0.8)',
      secondary: 'rgba(255,255,255,0.6)',
      disabled: 'rgba(255,255,255,0.38)',
    },
    primary: {
      main: '#5594db',
      light: '#77A9E2',
      dark: '#3B6799',
      contrastText: '#FFFFFF',
    },
    secondary: {
      main: '#d64870',
    },
    error: {
      main: '#da4a4a',
    },
    warning: {
      main: '#ea812b',
    },
    info: {
      main: '#5098bd',
    },
    success: {
      main: '#529455',
    },
  },
};

const theme = createTheme(themeOptions);

export default theme;
