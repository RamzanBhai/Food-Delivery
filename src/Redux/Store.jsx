import { configureStore } from "@reduxjs/toolkit";
import CartSlice from "./CartSlice";
import CategorySlice from './CategorySlice'
import SearchSlice from './SearchSlice'
 export const store =configureStore({
reducer:{
cart:CartSlice,
category:CategorySlice,
search:SearchSlice,
}
})
