import { createSlice } from '@reduxjs/toolkit';
import i18next from 'i18n';

export const changeLanguage = (languageId) => (dispatch, getState) => {
  return i18next.changeLanguage(languageId).then(() => {
    dispatch(i18nSlice.actions.languageChanged(languageId));
  });
};

export const selectCurrLanguage = (state) => state.i18n.language;

const initialState = {
  language: localStorage.getItem('language') ?? 'en', // ?? i18next.resolvedLanguage ?? 'en',
};

const i18nSlice = createSlice({
  name: 'i18n',
  initialState,
  reducers: {
    languageChanged: (state, { payload }) => {
      state.language = payload;
      localStorage.setItem('language', payload);
    },
  },
});

export default i18nSlice.reducer;
