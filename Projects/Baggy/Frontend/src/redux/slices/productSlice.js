import { createSlice } from "@reduxjs/toolkit";
import { data } from "react-router-dom";

const productSlice = createSlice({
  name: "product",
  initialState: { data : []},
  reducers: {
    setProductData : (state,action)=>{
        state.data = action.payload
    }
  },

});

export const { setProductData } = productSlice.actions;
export default productSlice.reducer;
