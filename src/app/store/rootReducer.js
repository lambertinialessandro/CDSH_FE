import { combineReducers } from '@reduxjs/toolkit';
import app from './app';
import i18n from './i18nSlice';

const createReducer = (asyncReducers) => (state, action) => {
  const combinedReducer = combineReducers({
    app,
    i18n,
    ...asyncReducers,
  });

  /*
	Reset the redux store when user logged out
	 */
  if (action.type === 'auth/user/userLoggedOut') {
    return combinedReducer(undefined, action);
  }

  return combinedReducer(state, action);
};

export default createReducer;
