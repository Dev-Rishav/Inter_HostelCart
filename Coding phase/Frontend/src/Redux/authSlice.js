import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import Cookies from 'js-cookie';

export const login = createAsyncThunk('auth/login', async (credentials) => {
  const response = await axios.post('http://localhost:3001/api/auth/login', credentials);
  const { token, admin } = response.data;
  Cookies.set('token', token);
  return { token, admin };
});

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    token: null,
    admin: false,
    status: 'idle',
    error: null,
  },
  reducers: {
    logout(state) {
      state.token = null;
      state.admin = false;
      Cookies.remove('token');
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(login.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(login.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.token = action.payload.token;
        state.admin = action.payload.admin;
      })
      .addCase(login.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export const { logout } = authSlice.actions;

export default authSlice.reducer;