import { ThemeProvider, createTheme, responsiveFontSizes } from '@mui/material';
import { useMemo } from 'react';
import { useSelector } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import Navigation from './navigation/Navigation';
import { selectCurrTheme } from './store/app/mainSlice';
import { themeOptions } from './theme/themeOptions';
import withAppProviders from './withAppProviders';

/* function App() {
  const selectedTheme = useSelector(selectCurrTheme);
  console.log('selectedTheme', selectedTheme);
  const theme = useMemo(() => responsiveFontSizes(createTheme(themeOptions[selectedTheme])), [selectedTheme]);

  return (
    <>
      <ThemeProvider theme={theme}>
          <BrowserRouter basename={process.env.REACT_APP_BASE_URL}>
            <Navigation />
          </BrowserRouter>
      </ThemeProvider>
    </>
  );
} */

import { HashRouter, Routes, Route, Link } from 'react-router-dom';

function Home() {
  return <h2>Home Page</h2>;
}

function About() {
  return <h2>About Page</h2>;
}

function App() {
  return (
    <HashRouter>
      <nav>
        <Link to="/">Home</Link> | <Link to="/about">About</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </HashRouter>
  );
}

export default withAppProviders(App)();
