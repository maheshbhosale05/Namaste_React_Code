import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },
  reducers: {
    addItems: (state, action) => {
      const index = state.items.findIndex(
        ({ detail }) => detail.id === action.payload.id
      );
      if (index !== -1) state.items[index].quantity += 1;
      else state.items.push({ detail: action.payload, quantity: 1 });
    },
    removeItems: (state, action) => {
      const index = state.items.findIndex(
        ({ detail }) => detail.id === action.payload
      );
      if (state.items[index].quantity > 1) state.items[index].quantity -= 1;
      else state.items.splice(index, 1);
    },
    clearCart: () => {
      state.item = [];
    },
  },
});

export const { addItems, removeItems, clearCart } = cartSlice.actions;

export default cartSlice.reducer;
