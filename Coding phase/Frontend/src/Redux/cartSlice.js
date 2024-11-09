import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [],
  totalAmount: 0,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem(state, action) {
      const newItem = action.payload;
      console.log("payload",newItem);
      
      const existingItem = state.items.find(item => item.id === newItem.itemno);
      if (!existingItem) {
        state.items.push({
          id: newItem.itemno,
          name: newItem.itemname,
          price: newItem.itemprice,
          quantity: 1,
          totalPrice: newItem.itemprice,
          profileImg: newItem.itemphotourl,
        });
        state.totalAmount += newItem.itemprice;
      } else {
        alert('Item already in cart');
      }
    },
    removeItem(state, action) {
      const id = action.payload;
      const existingItem = state.items.find(item => item.id === id);
      if (existingItem) {
        state.totalAmount -= existingItem.price;
        state.items = state.items.filter(item => item.id !== id);
      }
      else {
        alert('Item not in cart');
      }
    },
    clearCart(state) {
      state.items = [];
      state.totalAmount = 0;
    },
  },
});

export const { addItem, removeItem, clearCart } = cartSlice.actions;
export default cartSlice.reducer;