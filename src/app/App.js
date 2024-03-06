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

import Wireframe from './layouts/Wireframe.js';

function App() {
  const dispatch = useDispatch();
  const langDirection = useSelector(selectCurrLangDir);

  let msg = "%c 💚 I'm happy that you are curious 💚";
  let styles = [
    'font-size: 12px',
    'color: #fffce1',
    'font-family: monospace',
    'background: #0e100f',
    'display: inline-block',
    'padding: 1rem 3rem',
    'border: 1px solid #fffce1',
    'border-radius: 4px;',
  ].join(';');
  console.log(msg, styles);

  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Switch>
          {/* <Route path="/admin" component={Admin} />
          <Route path="/auth" component={Auth} /> */}

          {/* <Route path="/landing" component={Landing} /> */}

          {/* <Route path="/*" component={Guest} /> */}

          <Route path="/*" component={Wireframe} />
        </Switch>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default withAppProviders(App)();
