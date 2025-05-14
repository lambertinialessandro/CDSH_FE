import { ThemeProvider, createTheme, responsiveFontSizes } from '@mui/material';
import { useMemo } from 'react';
import { useSelector } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import Navigation from './navigation/Navigation';
import { selectCurrTheme } from './store/app/mainSlice';
import { themeOptions } from './theme/themeOptions';
import withAppProviders from './withAppProviders';

function App() {
  const selectedTheme = useSelector(selectCurrTheme);
  console.log('selectedTheme', selectedTheme);
  const theme = useMemo(() => responsiveFontSizes(createTheme(themeOptions[selectedTheme])), [selectedTheme]);

  return (
    <>
      <ThemeProvider theme={theme}>
          <BrowserRouter basename="/CDSH_FE">
            <Navigation />
          </BrowserRouter>
      </ThemeProvider>
    </>
  );
}

export default withAppProviders(App)();
