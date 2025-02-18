import React from "react";
import { FaStar } from "react-icons/fa";
import FoodData from "../Data/FoodData";
import { useDispatch, useSelector} from "react-redux";
import { AddToCart } from "../Redux/CartSlice";
export const FoodCart = () =>{
    const selectCategory = useSelector((state)=>state.category.category)
    const selectSearch  = useSelector((state)=>state.search.search) 
  const dispatch = useDispatch();
  return (
    <div className="flex flex-wrap gap-10 justify-center">
      {
    FoodData.filter((food)=>{
      if(selectCategory ==="All"){
       return food.name.toLowerCase().includes(selectSearch.toLowerCase());
      }else{
          return( selectCategory === food.category &&
         food.name.toLowerCase().includes(selectSearch.toLowerCase())
          )
      }
    }).map((item)=>(
      
            <div key={item.id} className="font-bold w-[280px] p-5 bg-white flex flex-col gap-2 mb-5 rounded-lg">
      <img src={item.img} alt="" className="w-auto h-[130px] hover:scale-110 cursor-grab transition-all duration-500 ease-in-out" />
      <div className="flex text-sm justify-between">
        <h2>{item.name}</h2>
        <span className="text-green-500">Rs.{item.price}</span>
        </div>
        <p className="text-sm font-normal">{item.desc.slice(0,50)}...</p>
        <div className="flex justify-between">
          <span className="flex justify-center items-center">
            <FaStar className="mr-1 text-yellow-400"/> {item.rating} 
          </span>
          <button onClick={()=>dispatch(AddToCart({item}),alert(`${item.name} Added to Cart!` ))} className="p-1 text-white bg-green-500 hover:bg-green-600 rounded-lg text-sm">Add To Cart</button>
        </div>
      
    </div>
     
    ))
  }
 
   </div>

  )
}