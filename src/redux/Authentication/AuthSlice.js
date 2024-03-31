import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isAuthenticated: false,
  token: '', 
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    signIn: (state, action) => {
      // On sign-in, set isAuthenticated to true and store the token
      state.isAuthenticated = true;
      state.token = action.payload.token;
    },
    signOut: (state) => {
      // On sign-out, set isAuthenticated to false and clear the token
      state.isAuthenticated = false;
      state.token = '';
    },
  },
});

// Export action creators
export const { signIn, signOut } = authSlice.actions;

// Export reducer
export default authSlice.reducer;
