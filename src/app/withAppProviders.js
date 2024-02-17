import Provider from 'react-redux/es/components/Provider';
/* import LocalizationProvider from '@mui/lab/LocalizationProvider';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import AppContext from './AppContext'; */
import store from './store';

const withAppProviders = (Component) => (props) => {
  const WrapperComponent = () => {
    {
      /* <AppContext.Provider>
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <Provider store={store}>
          <Component {...props} />
        </Provider>
      </LocalizationProvider>
    </AppContext.Provider> */
    }

    return (
      <Provider store={store}>
        <Component {...props} />
      </Provider>
    );
  };

  return WrapperComponent;
};

export default withAppProviders;
