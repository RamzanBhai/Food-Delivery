import React from "react";
import { FaTrash } from "react-icons/fa6";
import { useDispatch, useSelector } from "react-redux";
import { decreaseQuantity, increaseQuantity, removeFromCart } from "../Redux/CartSlice";
export const OrderItem = () => {
  const setItem = useSelector((state) => state.cart.products);
  const dispatch = useDispatch();
  return (
    <div className="overflow-y-auto   h-[380px] ">
      {setItem.length >0 ? setItem.map((food) => (
        <div
          key={food.item.id}
          className="flex justify-between items-center shadow-md p-3 rounded-lg mb-3"
        >
          <img src={food.item.img} alt="" className="w-[70px] h-[70px] " />
          <div>
            <h2 className="font-bold text-gray-700 ">{food.item.name}</h2>
            <div>
              <span className="text-green-500 font-bold flex items-center justify-center">
                Rs. {food.item.price}
              </span>
            </div>
            <div className="flex justify-center gap-3">
              <button className="border-2 text-gray-400 h-[15px] w-[15px] font-bold flex justify-center items-center rounded-sm p-2 hover:bg-green-500 transition-all ease-linear cursor-pointer hover:text-white " onClick={()=>dispatch(decreaseQuantity(food.item.id))}>
                -
              </button>
              <span>{food.quantity}</span>
              <button className="border-2 text-gray-400 h-[15px] w-[15px] font-bold flex justify-center items-center rounded-sm p-2 hover:bg-green-500 transition-all ease-linear cursor-pointer hover:text-white " onClick={()=>dispatch(increaseQuantity(food.item.id))}>
                +
              </button>
            </div>
          </div>
          <div>
            <FaTrash
              onClick={() => dispatch(removeFromCart(food.item.id),alert(`${food.item.name} Remove from Cart!`))}
              className="text-red-400 hover:scale-110"
            />
          </div>
        </div>
      )):<h2 className="text-2xl text-red-600 font-bold">This  cart is Empty</h2>}
    </div>
  );
};
