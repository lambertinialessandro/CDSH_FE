import { createSlice } from '@reduxjs/toolkit';

export const logoutUser = () => async (dispatch, getState) => {
  return dispatch(userLoggedOut());
};

export const selectUserRole = (state) => state.slp.user.role;
export const selectUserPermissions = (state) => state.slp.user.permissions;
export const selectUserData = (state) => state.slp.user.data;

const initialState = {
  role: '',
  permissions: '',
  userData: {},
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, { payload }) => (state = { ...state, ...payload }),
    userLoggedOut: (state, action) => initialState,
  },
});

export const { setUser, userLoggedOut } = userSlice.actions;

export default userSlice.reducer;
