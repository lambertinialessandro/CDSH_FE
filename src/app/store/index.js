import { configureStore } from '@reduxjs/toolkit';
import axios from 'axios';
import createReducer from './rootReducer';

if (process.env.NODE_ENV === 'development' && module.hot) {
  module.hot.accept('./rootReducer', () => {
    const newRootReducer = require('./rootReducer').default;
    store.replaceReducer(newRootReducer.createReducer());
  });
}

const handleApiCall = ({ getState, dispatch }) => {
  return (next) => (action) => {
    const state = getState();

    const { requestId } = action.meta ?? {};
    if (requestId) {
      const headers = {
        ...axios.defaults.headers,
        'X-Request-ID': requestId,
        'Accept-Language': state.i18n.language,
      };

      axios.defaults.headers = headers;
    }

    try {
      const { /* payload, */ error, meta } = action;
      if (meta?.requestStatus === 'pending' && meta.withLoading) {
        // dispatch(setLoading(true));
      }

      if (meta?.requestStatus === 'rejected' && error.message !== 'Aborted') {
        /* const message = payload ?? error.message; */
        // if (meta.showError) dispatch(showMessage({ message, variant: 'error' }));
        // (meta.withLoading || !payload) && dispatch(setLoading(false));
      }

      if (meta?.requestStatus === 'fulfilled') {
        // meta.withLoading && dispatch(setLoading(false));
        // meta.message && dispatch(showMessage({ message: meta.message, variant: meta.type || 'success' }));
      }

      return next(action);
    } catch (err) {
      console.error(`err`, err);
      throw err;
    }
  };
};

const middlewares = [handleApiCall];

if (process.env.NODE_ENV === 'development') {
  const { createLogger } = require(`redux-logger`);
  const logger = createLogger({ collapsed: (getState, action, logEntry) => !logEntry.error });

  middlewares.push(logger);
}

const store = configureStore({
  reducer: createReducer(),
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      immutableCheck: false,
      serializableCheck: false,
    }).concat(middlewares),
  devTools: process.env.NODE_ENV === 'development',
});

export default store;
