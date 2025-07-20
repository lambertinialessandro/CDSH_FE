import { createSlice } from '@reduxjs/toolkit';

export const selectCDSH = (state) => state.app.cdsh;
export const selectCurrTheme = (state) => state.app.cdsh.currTheme;

export const selectIsBannerOpen = (state) => state.app.cdsh.isBannerOpen;

const initialState = {
  currTheme: 'default',  // localStorage.getItem('theme') ?? 'default',
  isBannerOpen: false
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

    setIsBannerOpen: (state, {payload}) => {
      state.isBannerOpen = payload;
    }
  },
  /* extraReducers: {} */
});

export const { setThemeSettings, setIsBannerOpen } = cdshSlice.actions;

export default cdshSlice.reducer;
