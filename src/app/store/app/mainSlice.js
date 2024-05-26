import { createSlice } from '@reduxjs/toolkit';

export const selectCDSH = state => state.app.cdsh;
export const selectCurrTheme = state => state.app.cdsh?.currTheme ?? 'default';

const initialState = {
	currTheme: 'default'
};

const cdshSlice = createSlice({
	name: 'cdsh',
	initialState: initialState,
	reducers: {
		setThemeSettings: (state, action) => {
			console.log('newTheme', action.payload);
			state.currTheme = action.payload;
		}
	},
	extraReducers: {}
});

export const { setThemeSettings } = cdshSlice.actions;

export default cdshSlice.reducer;
