import React from "react";
import { FaX } from "react-icons/fa6";
import { OrderItem } from "./Orderitem";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

export const Cart = () =>{
const Item = useSelector((state)=>state.cart)
  
  return(
    <>
    <div>
      <img className="fixed" src="https://img.freepik.com/free-photo/seafood-pizza_74190-5944.jpg?w=996&t=st=1693062328~exp=1693062928~hmac=53fd9ad496580db41c6ca8066510cd89c6b0a0389de8bb6b875a78a1eda09cb5" alt="" />
    <div className="fixed right-0 top-0 w-full lg:w-[30vw] bg-white h-full p-5 shadow-2xl ">
      <div className="flex justify-between my-5">
        <span className="text-xl font-bold text-gray-800">My Order</span><Link to='/'><FaX className="border-2 text-gray-500 rounded-md  font-bold text-xl p-1 hover:text-red-400 hover:border-red-400 cursor-pointer"/></Link>
      </div>
  
     <OrderItem/>
   

      <div className="absolute bottom-0">
        <h3 className="font-semibold text-gray-800">Item:{Item.totalQuantity}</h3>
        <h3 className="font-semibold text-gray-800">Total Amount: Rs.{Item.totalPrice}</h3>
        <hr/>
        {
          Item.totalQuantity > 0 ?(<Link to='/success'> <button className="bg-green-500 text-white font-bold px-3 py-2 mb-5 mt-3 rounded-lg w-[90vw] lg:w-[25vw]">Checkout</button></Link>):(<Link to='/'><button className="bg-green-500 text-white font-bold px-3 py-2 mb-5 mt-3 rounded-lg w-[90vw] lg:w-[25vw]" onClick={()=>alert("Please select items")}>Checkout</button></Link>)
        }
      </div>
     </div>
    </div>
   
    </>
   
  )
}