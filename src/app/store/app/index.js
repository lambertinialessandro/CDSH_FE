import { combineReducers } from '@reduxjs/toolkit';
import main from './mainSlice';
import eventSlice from './eventStore';

const reducers = combineReducers({ main, eventSlice });

export default reducers;
