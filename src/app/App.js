import { ThemeProvider, createTheme, responsiveFontSizes } from '@mui/material';
import { useMemo } from 'react';
import { useSelector } from 'react-redux';
import { Redirect } from 'react-router';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import themeOptions from './theme/themeOptions';
import withAppProviders from './withAppProviders';
/* import Admin from './navigation/Admin.js';
import Auth from './navigation/Auth.js';
import { selectCurrLangDir } from './store/i18nSlice'; */

import Wireframe from './navigation/Wireframe.js';
import { selectCurrTheme } from './store/app/staffSlice';
import Home from 'app/wireframe/pages/home/Home';

function App() {
	const selectedTheme = useSelector(selectCurrTheme);
	console.log('selectedTheme', selectedTheme);
	// console.log('selectCDSH', useSelector(selectCDSH));
	const theme = useMemo(() => responsiveFontSizes(createTheme(themeOptions[selectedTheme])), [selectedTheme]);

	return (
		<ThemeProvider theme={theme}>
			<BrowserRouter basename="/CDSH_FE">
				<Switch>
					{/* <Route path="/admin" component={Admin} />
          <Route path="/auth" component={Auth} /> */}

					{/* <Route path="/landing" component={Landing} />

					<Route path="/guest" component={Guest} /> */}

					<Route path="/*" component={Wireframe} />

					{/* <Route component={Home} />
					<Route path="" component={Home} />
					<Route path="*" component={Home} />
					<Route path="/" component={Home} /> */}
					{/* <Route path="/*" component={Home} /> */}
					<Route path="*" component={Home} />
					<Route path="/*" component={Home} />

					<Route path="/">
						<Redirect to="/home" />
					</Route>
				</Switch>
			</BrowserRouter>
		</ThemeProvider>
	);
}

export default withAppProviders(App)();
