import { createSlice } from '@reduxjs/toolkit';

export const selectCDSH = (state) => state.app.cdsh;
export const selectCurrTheme = (state) => state.app.cdsh.currTheme;

export const selectIsBannerOpen = (state) => state.app.cdsh.isBannerOpen;
export const selectUserLanguage = (state) => state.app.cdsh.userLanguage;

const initialState = {
  currTheme: 'default',
  isBannerOpen: false,
  userLanguage: localStorage.getItem('language') ?? 'en',
};

const cdshSlice = createSlice({
  name: 'cdsh',
  initialState,
  reducers: {
    setThemeSettings: (state, { payload }) => {
      console.log('newTheme', payload);
      state.currTheme = payload;
      localStorage.setItem('theme', payload);
    },

    setIsBannerOpen: (state, { payload }) => {
      state.isBannerOpen = payload;
    },
    setUserLanguage: (state, { payload }) => {
      state.userLanguage = payload;
    },
  },
  /* extraReducers: {} */
});

export const { setThemeSettings, setIsBannerOpen, setUserLanguage } = cdshSlice.actions;

export default cdshSlice.reducer;
