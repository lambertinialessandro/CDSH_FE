import { ThemeProvider } from '@mui/material';
import { useSelector } from 'react-redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Admin from './layouts/Admin.js';
import Auth from './layouts/Auth.js';
import Guest from './layouts/Guest.js';
import { selectCurrLangDir } from './store/i18nSlice';
import theme from './theme/themeOptions';
import withAppProviders from './withAppProviders';
import { useDispatch } from 'react-redux';

function App() {
  const dispatch = useDispatch();
  const langDirection = useSelector(selectCurrLangDir);

  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Switch>
          <Route path="/admin" component={Admin} />
          <Route path="/auth" component={Auth} />

          {/* <Route path="/landing" component={Landing} /> */}

          <Route path="/*" component={Guest} />
        </Switch>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default withAppProviders(App)();
