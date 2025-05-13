import { combineReducers } from '@reduxjs/toolkit';
import event from './eventSlice';
import cdsh from './mainSlice';
import staff from './staffSlice';
import user from './userSlice';

const slpReducers = combineReducers({
  event,
  cdsh,
  staff,
  user,
});

export default slpReducers;
