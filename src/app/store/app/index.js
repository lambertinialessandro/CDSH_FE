import { combineReducers } from '@reduxjs/toolkit';
import main from './mainSlice';
import eventSlice from './eventStore';
import staff from './staffSlice';

const appReducers = combineReducers({ main, eventSlice, staff });

export default appReducers;
