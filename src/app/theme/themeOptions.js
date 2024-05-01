import { createTheme } from '@mui/material';

// color palette: https://m2.material.io/design/color/the-color-system.html#tools-for-picking-colors

export const themeOptions = {
	palette: {
		background: {
			default: '#0c0c0c',
			light_1: '#000000',
			light_2: '#232323',
			paper: '#333333',
			transparent: '#00000000'
		},
		text: {
			primary: 'rgba(255,255,255,1.0)',
			secondary: 'rgba(255,255,255,0.8)',
			tertiary: 'rgba(255,255,255,0.6)',
			disabled: 'rgba(255,255,255,0.38)'
		},
		primary: {
			main: '#5594db',
			_50: '#e5f1fa',
			_100: '#c1ddf5',
			_200: '#9cc8ee',
			_300: '#7ab3e6',
			_400: '#65a2e0',
			_500: '#5594db',
			_600: '#4e86ce',
			_700: '#4674bb',
			_800: '#3f64a9',
			_900: '#324788',
			light: '#77A9E2',
			dark: '#3B6799',
			contrastText: '#FFFFFF'
		},
		secondary: {
			main: '#d64870'
		},
		error: {
			main: '#da4a4a'
		},
		warning: {
			main: '#ea812b'
		},
		info: {
			main: '#5098bd'
		},
		success: {
			main: '#529455'
		}
	}
};

const theme = createTheme(themeOptions);

export default theme;
