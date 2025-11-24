import { createSlice } from "@reduxjs/toolkit";

const initState = {
  carts: [],
};
const CartSlice = createSlice({
  name: "cart",
  initialState: initState,
  reducers: {
    add: (state, action) => {
      const { product, quantity } = action.payload;
      const exist = state.carts.find((item) => item.product.id == product.id);
      if (exist) {
        exist.quantity += 1;
      } else {
        state.carts.push({ product, quantity: quantity });
      }
    },

    changeQuantity: (state, action) => {
      const { id, change } = action.payload;
      const exist = state.carts.find((item) => item.product.id == id);
      if (exist) {
        exist.quantity = exist.quantity + change;
      }
    },

    remove: (state, action)=>{
        state.carts = state.carts.filter((item) => item.product.id !== action.payload);
    },

    clearAll: (state)=>{
        state.carts = [];
    }
  },
});

export default CartSlice;
