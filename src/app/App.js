import { ThemeProvider, createTheme, responsiveFontSizes } from '@mui/material';
import { useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import Navigation from './navigation/Navigation';
import { selectCurrTheme } from './store/app/mainSlice';
import { themeOptions } from './theme/themeOptions';
import withAppProviders from './withAppProviders';
import { changeLanguage } from './store/i18nSlice';

function App() {
  const dispatch = useDispatch();
  const selectedTheme = useSelector(selectCurrTheme);
  const theme = useMemo(() => responsiveFontSizes(createTheme(themeOptions[selectedTheme])), [selectedTheme]);

  if (localStorage.getItem('language') !== 'en') {
    if (['de'].includes(localStorage.getItem('language'))) {
      dispatch(changeLanguage(localStorage.getItem('language')));
    }
  }

  return (
    <>
      <ThemeProvider theme={theme}>
        <BrowserRouter basename={'/CDSH_FE'}>
          <Navigation />
        </BrowserRouter>
      </ThemeProvider>
    </>
  );
}

export default withAppProviders(App)();
