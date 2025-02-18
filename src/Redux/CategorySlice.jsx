import { createSlice } from "@reduxjs/toolkit";


const CategorySlice = createSlice({
  name:"Category",
  initialState:{
    category:"All",
  },
  reducers:{
    setCategories(state,action){
      state.category=action.payload;
    },
  }
})
export const {setCategories} = CategorySlice.actions;
export default CategorySlice.reducer;