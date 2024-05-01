/* import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider'; */
import { StyledEngineProvider } from '@mui/material/styles';
import Provider from 'react-redux/es/components/Provider';
import AppContext from './AppContext';
import store from './store';

const withAppProviders = Component => props => {
	const WrapperComponent = () => {
		/* <AppContext.Provider value={{}}>
			<LocalizationProvider dateAdapter={AdapterDateFns}>
				<Provider store={store}>
					<StyledEngineProvider injectFirst>
						<Component {...props} />
					</StyledEngineProvider>
				</Provider>
			</LocalizationProvider>
		</AppContext.Provider> */

		return (
			<AppContext.Provider value={{}}>
				<Provider store={store}>
					<StyledEngineProvider injectFirst>
						<Component {...props} />
					</StyledEngineProvider>
				</Provider>
			</AppContext.Provider>
		);
	};

	return WrapperComponent;
};

export default withAppProviders;
