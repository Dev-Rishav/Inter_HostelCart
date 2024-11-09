import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import Cookies from 'js-cookie';

const initialState = {
  items: [],
  totalAmount: 0,
  status: 'idle',
  error: null,
};

// Thunk to fetch cart items from the backend
export const fetchCartItems = createAsyncThunk('cart/fetchCartItems', async () => {
  const token = Cookies.get('token');
  const response = await axios.get('http://localhost:3001/api/cart', {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });  
  return response.data;
});

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem(state, action) {
      const newItem = action.payload;
      const existingItem = state.items.find(item => item.id === newItem.id);
      if (!existingItem) {
        state.items.push({
          id: newItem.id,
          name: newItem.name,
          price: newItem.price,
          quantity: 1,
          totalPrice: newItem.price,
        });
      }
      state.totalAmount += newItem.price;
    },
    removeItem(state, action) {
      const id = action.payload;
      const existingItem = state.items.find(item => item.id === id);
      if (existingItem) {
        state.totalAmount -= existingItem.price;
        state.items = state.items.filter(item => item.id !== id);
      }
    },
    clearCart(state) {
      state.items = [];
      state.totalAmount = 0;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCartItems.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchCartItems.fulfilled, (state, action) => {
        // console.log("payload",action.payload);
        
        state.status = 'succeeded';
        state.items = action.payload;
        state.totalAmount = action.payload.reduce((total, item) => total + item.itemprice, 0);
      })
      .addCase(fetchCartItems.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export const { addItem, removeItem, clearCart } = cartSlice.actions;

export default cartSlice.reducer;