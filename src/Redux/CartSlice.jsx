import { createSlice } from "@reduxjs/toolkit";

const Slicer = createSlice({
  name: "Cart",
  initialState: {
    products: [],
    totalQuantity: 0,
    totalPrice: 0,
  },
  reducers: {
    AddToCart(state, action) {
      const newItem = action.payload;
      const existingItem = state.products.find(
        (item) => item.item.id === newItem.item.id
      );

      if (existingItem) {
        existingItem.quantity++;
        existingItem.totalPrice = existingItem.quantity * newItem.item.price;
      } else {
        state.products.push({
          ...newItem,
          quantity: 1,
          totalPrice: newItem.item.price,
        });
      }

      state.totalPrice += newItem.item.price;
      state.totalQuantity++;
    },
    removeFromCart(state, action) {
      const itemId = action.payload;
      const itemToRemove = state.products.find(
        (item) => item.item.id === itemId
      );

      if (itemToRemove) {
        state.totalPrice -= itemToRemove.totalPrice;
        state.totalQuantity -= itemToRemove.quantity;
        state.products = state.products.filter(
          (item) => item.item.id !== itemId
        );
      }
    },
    increaseQuantity(state, actions) {
      const itemId = actions.payload;
      const item = state.products.find((item) => item.item.id == itemId);
      if (item) {
        item.quantity++;
        item.totalPrice += item.item.price;
        state.totalPrice += item.item.price;
        state.totalQuantity++;
      }
    },
    decreaseQuantity(state, action) {
      const itemId = action.payload;
      const existingItem = state.products.find(
        (item) => item.item.id === itemId
      );

      if (existingItem) {
        if (existingItem.quantity > 1) {
          existingItem.quantity--;
          existingItem.totalPrice -= existingItem.item.price;
          state.totalPrice -= existingItem.item.price;
          state.totalQuantity--;
        } else {
          state.totalPrice -= existingItem.totalPrice;
          state.totalQuantity -= existingItem.quantity;

          state.products = state.products.filter(
            (item) => item.item.id !== itemId
          );
        }
      }
    },
  },
});
export const { AddToCart, removeFromCart, increaseQuantity, decreaseQuantity } =
  Slicer.actions;
export default Slicer.reducer;
