import { ThemeProvider } from '@mui/material';
/* import { useSelector } from 'react-redux'; */
import { BrowserRouter, Route, Switch } from 'react-router-dom';
/* import Admin from './navigation/Admin.js';
import Auth from './navigation/Auth.js';
import { selectCurrLangDir } from './store/i18nSlice'; */
import theme from './theme/themeOptions';
import withAppProviders from './withAppProviders';
/* import { useDispatch } from 'react-redux'; */

import { DateTime } from 'luxon';
import Guest from './navigation/Guest.js';
import Wireframe from './navigation/Wireframe.js';
import Landing from './views/Landing';

import Home from 'app/wireframe/pages/home/Home';
import { Redirect } from 'react-router';

function App() {
	/* const dispatch = useDispatch();
  const langDirection = useSelector(selectCurrLangDir); */

	// https://patorjk.com/software/taag/#p=display&h=0&f=Tmplr&t=CDSH%0A | tmplr | Spliff
	const presentation = [
		'┏┓┳┓┏┓┓┏',
		'┃ ┃┃┗┓┣┫',
		'┗┛┻┛┗┛┛┗',
		'The CDSH - CONTEMPORARY DANCE SCHOOL HAMBURG',
		DateTime.now().setLocale('en-gb').toLocaleString(DateTime.DATETIME_SHORT)
	].join('\n');
	console.log(presentation);

	return (
		<ThemeProvider theme={theme}>
			<BrowserRouter>
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
					<Route path="*">
						<Redirect to="home" />
					</Route>
				</Switch>
			</BrowserRouter>
		</ThemeProvider>
	);
}

export default withAppProviders(App)();
