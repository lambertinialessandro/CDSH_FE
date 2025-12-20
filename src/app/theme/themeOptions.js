import { darken, getContrastRatio, lighten } from '@mui/material';

// color palette: https://m2.material.io/design/color/the-color-system.html#tools-for-picking-colors

const getContrastTextColor = (color) => {
  const contrastRatio = getContrastRatio(color, '#000000');
  return contrastRatio >= 7 ? '#000000' : '#ffffff';
};

const colorVariantCoeff = 0.16;
const disabledCoeff = 0.8;

export function generateThemeOptions(props) {
  const primary = "#C8FF75"
  const secondary = "#D8D0FF"
  const info = "#ffffff"
  const success = "#ffffff"
  const warning = "#ffffff"
  const error = "#ffffff"

  console.log("generateThemeOptions")

  return {
    default: {
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
  }
  };
}

export const themeOptions = generateThemeOptions();
export default themeOptions;