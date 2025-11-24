import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initState = {
  products: [],
  status: "",
};

export const ProductsList = createAsyncThunk("fetchProduct", () => {
  return fetch("https://fakestoreapi.com/products")
    .then((response) => response.json())
    .catch((error) => {
      throw new error();
    });
});

const ProductSlice = createSlice({
  name: "products",
  initialState: initState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(ProductsList.pending, (state) => {
        state.status = "loading";
      })
      .addCase(ProductsList.fulfilled, (state, action) => {
        (state.status = "success"), (state.products = action.payload);
      })
      .addCase(ProductsList.rejected, (state) => {
        state.status = "error";
      });
  },
});

export default ProductSlice;
