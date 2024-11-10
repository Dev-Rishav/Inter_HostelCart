import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import Cookies from 'js-cookie';

const initialState = {
  cart: { items: [] },
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
  // console.log("yes",response.data);
  
  return response.data;
});

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem(state, action) {
      const newItem = action.payload;
      const existingItem = state.cart.items.find(item => item.itemno === newItem.itemno);
      if (!existingItem) {
        state.cart.items.push({
          itemno: newItem.itemno,
          itemname: newItem.itemname,
          itemprice: newItem.itemprice,
          itemphotourl: newItem.itemphotourl,
          quantity: 1,
          totalPrice: newItem.itemprice,
        });
        state.totalAmount += newItem.itemprice;
        alert('Item added to cart successfully');
      }
      else{
        alert('Item already in cart');
      }
    },
    removeItem(state, action) {
      const itemno = action.payload;
      const existingItem = state.cart.items.find(item => item.itemno === itemno);
      if (existingItem) {
        state.totalAmount -= existingItem.itemprice;
        state.cart.items = state.cart.items.filter(item => item.itemno !== itemno);
      }
    },
    clearCart(state) {
      state.cart.items = [];
      state.totalAmount = 0;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCartItems.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchCartItems.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.cart.items = action.payload;
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