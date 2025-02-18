import React, { useEffect, useState } from "react";
import FoodData from "../Data/FoodData";
import { useDispatch, useSelector } from "react-redux";
import { setCategories } from "../Redux/CategorySlice";
export const Categroy = () => {
  const [category , setCategory]=useState([])
  const selectCategory = useSelector((state)=>state.category.category)
  const dispatch=useDispatch();
  const handleCategory = ()=>{
    const uniqueCategory =[
      ...new Set(FoodData.map((food)=>food.category))]
    setCategory(uniqueCategory); 
  }
  useEffect(() => {
  handleCategory();
  }, [])
  
  return (
    <div className="ml-6">
      <h3 className="text-xl font-semibold">Find the best food</h3>
      <div className=" my-5 flex gap-3 overflow-x-scroll scroll-smooth lg:overflow-x-hidden">
      <button onClick={()=>dispatch(setCategories("All"))} className={`px-3 py-2 bg-gray-300 font-bold  rounded-lg hover:bg-green-500 hover:text-white ${selectCategory === "All" && "bg-green-600 text-white"}`}>
          All
        </button>
      {
        category.map((category,index)=>(
          <button onClick={()=>dispatch(setCategories(category))} key={index}  className={`px-3 py-2 bg-gray-300 font-bold  rounded-lg hover:bg-green-500 hover:text-white ${selectCategory === category && "bg-green-600 text-white"}`}>
          {category}
        </button>
        ))
      }
      </div>
    </div>
  );
};
