import { createSlice } from "@reduxjs/toolkit";
const productSlice = createSlice({
  name: "product",
  initialState: {
    productList: [],
  },
  reducers: {
    setProduct: (state, action) => {
      state.productList = action.payload;
    },
  },
});
export const { setProduct } = productSlice.actions;
export default productSlice.reducer;
