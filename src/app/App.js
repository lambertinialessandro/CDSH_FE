import { BrowserRouter, Route, Switch } from 'react-router-dom';
import withAppProviders from './withAppProviders';

import { ThemeProvider } from '@mui/material';
import Admin from './layouts/Admin.js';
import Auth from './layouts/Auth.js';
import Guest from './layouts/Guest.js';
import theme from './theme/themeOptions';

function App() {
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
