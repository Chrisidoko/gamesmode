import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  items: [],
  status: null,
  error: null,
};

export const productsFetch = createAsyncThunk(
  // AsyncThunk take in 3 parameters (action type, payload creator, options):

  "products/productsFetch", // Action Type ("products": this is the name of our Slice)
  async () => {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/photos"
    );
    return response?.data;
  } // Payload Creator
);
//4292472fd679469ea48703bd185d7750
const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {}, // Generate and handle action creators
  extraReducers: {
    [productsFetch.pending]: (state, action) => {
      state.status = "pending";
      action.items = action.payload;
    },
    [productsFetch.fulfilled]: (state, action) => {
      state.status = "success";
      action.items = action.payload;
    },
    [productsFetch.rejected]: (state, action) => {
      state.status = "rejected";
    },
  }, // Handle the action creators types
});
export default productsSlice.reducer;
