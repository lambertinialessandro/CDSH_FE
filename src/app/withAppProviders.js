import { StyledEngineProvider } from '@mui/material/styles';
import Provider from 'react-redux/es/components/Provider';
import AppContext from './AppContext';
import store from './store';
import { SnackbarProvider } from 'notistack';

const withAppProviders = (Component) => (props) => {
  const WrapperComponent = () => {
    return (
      <>
        <AppContext.Provider value={{}}>
          <Provider store={store}>
            <StyledEngineProvider injectFirst>
              <SnackbarProvider maxSnack={10}>
                <Component {...props} />
              </SnackbarProvider>
            </StyledEngineProvider>
          </Provider>
        </AppContext.Provider>
      </>
    );
  };

  return WrapperComponent;
};

export default withAppProviders;
