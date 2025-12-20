import { combineReducers } from '@reduxjs/toolkit';
import cdsh from './mainSlice';
import page from './pageSlice';

const slpReducers = combineReducers({
  cdsh,
  page,
});

export default slpReducers;
