import { darken, getContrastRatio, lighten } from '@mui/material';

// color palette: https://m2.material.io/design/color/the-color-system.html#tools-for-picking-colors

const getContrastTextColor = (color) => {
  const contrastRatio = getContrastRatio(color, '#000000');
  return contrastRatio >= 7 ? '#000000' : '#ffffff';
};

const colorVariantCoeff = 0.16;
const disabledCoeff = 0.8;

export function generateThemeOptions(props) {
  const primary = "#8f20ff"
  const secondary = "#eae7f8"
  const info = "#ffffff"
  const success = "#ffffff"
  const warning = "#ffffff"
  const error = "#ffffff"

  return {
    palette: {
      //mode: 'light',
      common: {},
      background: {
        default: {
          _100: '#ffffff',
          _200: '#fcfcfc',
          _300: '#f7f7f7',
          _400: '#ececec',
        },
        contrast: {
          _100: '#000000',
        },
        paper: '#f1f1f1',
        transparent: '#ffffff00',
      },
      text: {
        primary: '#000000de',
        secondary: '#00000099',

        subtitle: {
          _300: '#a0a0a0',
          _400: '#8b8b8b',
          _500: '#616161',
        },
        contrast: {
          _100: '#ffffff',
          _300: '#ffffffcc',
          _400: '#ffffff99',
          disabled: '#ffffff61',
        },

        disabled: '#9f9f9f',
      },
      primary: {
        main: primary,
        light: lighten(primary, colorVariantCoeff),
        dark: darken(primary, colorVariantCoeff),
        contrastText: getContrastTextColor(primary),

        disabled: lighten('#252627', disabledCoeff),
      },
      secondary: {
        main: secondary,
        light: lighten(secondary, colorVariantCoeff),
        dark: darken(secondary, colorVariantCoeff),
        contrastText: getContrastTextColor(secondary),

        disabled: lighten('#252627', disabledCoeff),
      },
      info: {
        main: info,
        light: lighten(info, colorVariantCoeff),
        dark: darken(info, colorVariantCoeff),
        contrastText: getContrastTextColor(info),
      },
      success: {
        main: success,
        light: lighten(success, colorVariantCoeff),
        dark: darken(success, colorVariantCoeff),
        contrastText: getContrastTextColor(success),
      },
      warning: {
        main: warning,
        light: lighten(warning, colorVariantCoeff),
        dark: darken(warning, colorVariantCoeff),
        contrastText: getContrastTextColor(warning),
      },
      error: {
        main: error,
        light: lighten(error, colorVariantCoeff),
        dark: darken(error, colorVariantCoeff),
        contrastText: getContrastTextColor(error),
      },
    },
    components: {
      MuiAppBar: {
        defaultProps: {
          enableColorOnDark: true,
        },
        styleOverrides: {
          root: {
            backgroundImage: 'none',
          },
        },
      },
      MuiButton: {
        styleOverrides: {
          root: {
            textTransform: 'none',
          },
        },
      },
    },
  };
}

/* export const themeOptions = {
  default: {
    palette: {
      background: {
        default: '#0c0c0c',
        paper: '#333333',
        transparent: '#00000000',

        light_1: '#000000',
        light_2: '#232323',

        primary: '#1e1e1e',
        default_secondary: '#f1f1f1',
      },
      text: {
        primary: 'rgba(255,255,255,1.0)',
        secondary: 'rgba(255,255,255,0.8)',
        tertiary: 'rgba(255,255,255,0.6)',
        disabled: 'rgba(255,255,255,0.38)',
        contrast: 'rgba(0,0,0,1.0)',

        black_primary: 'rgba(0,0,0,0.87)',
        white_secondary: 'rgba(255,255,255,0.8)',

        contrast_primary: '#ffffffff',
        contrast_secondary: '#ffffffcc',
        contrast_tertiary: '#ffffff99',
        contrast_disabled: '#ffffff61',
        error: '#da5555',
        success: '#64c969',
        warning: '#f0a454',
      },
      primary: {
        main: main,
        _50: lighten(main, 0.45),
        _100: lighten(main, 0.4),
        _200: lighten(main, 0.3),
        _300: lighten(main, 0.2),
        _400: lighten(main, 0.1),
        _500: main,
        _600: darken(main, 0.1),
        _700: darken(main, 0.2),
        _800: darken(main, 0.3),
        _900: darken(main, 0.4),
        _950: darken(main, 0.45),

        light: '#77A9E2',
        dark: '#3B6799',
        contrastText: '#FFFFFF',
      },
      secondary: {
        main: '#d64870',
      },
      error: {
        main: '#da5555',
      },
      warning: {
        main: '#f0a454',
      },
      info: {
        main: '#5098bd',
      },
      success: {
        main: '#64c969',
      },
    },
    typography: typography,
  },
  light: {
    palette: {
      background: {
        default: '#FFFFFF',
        paper: '#FAFAFA',
        transparent: '#00000000',

        light_1: '#F5F5F5',
        light_2: '#EEEEEE',
      },
      text: {
        primary: 'rgba(0,0,0,0.87)',
        secondary: 'rgba(0,0,0,0.6)',
        tertiary: 'rgba(0,0,0,0.38)',
        disabled: 'rgba(0,0,0,0.12)',
        contrast: 'rgba(255,255,255,1.0)',
        black_primary: 'rgba(0,0,0,0.87)',
        white_secondary: 'rgba(255,255,255,0.8)',
      },
      primary: {
        main: main,
        _50: lighten(main, 0.45),
        _100: lighten(main, 0.4),
        _200: lighten(main, 0.3),
        _300: lighten(main, 0.2),
        _400: lighten(main, 0.1),
        _500: main,
        _600: darken(main, 0.1),
        _700: darken(main, 0.2),
        _800: darken(main, 0.3),
        _900: darken(main, 0.4),
        _950: darken(main, 0.45),

        light: '#77A9E2',
        dark: '#3B6799',
        contrastText: '#FFFFFF',
      },
      secondary: {
        main: '#d64870',
      },
      error: {
        main: '#da5555',
      },
      warning: {
        main: '#f0a454',
      },
      info: {
        main: '#5098bd',
      },
      success: {
        main: '#64c969',
      },
    },
    typography: typography,
  },
}; */


export const themeOptions = generateThemeOptions();
export default themeOptions;