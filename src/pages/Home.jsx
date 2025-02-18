import React from "react";
import { Navbar } from "../Components/Navbar";
import { Categroy } from "../Components/CategoryMenu";
import { FoodItem } from "../Components/FoodItems";
import Owner from "../Components/Owner";
import { FaCartShopping } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
const Home = () => {
  const Item = useSelector((state) => state.cart);
  return (
    <div>
      <Navbar />
      <Owner />

      <div
        className={`absolute  top-4 right-7 text-4xl bg-red-500 p-4 text-yellow-500 w-20 h-20  flex items-center justify-center rounded-full ${
          Item.totalQuantity > 0 &&
          "animate-[bounceY_2s_infinite_ease-in-out] bg-red-500 p-4 text-yellow-500 w-20 h-20  flex items-center justify-center rounded-full  "
        }`}
      >
        <Link to="/cart">
          <FaCartShopping />
        </Link>
        <div className="text-red-600 text-sm absolute top-0 -left-4 w-5 h-5 bg-yellow-600 flex items-center justify-center rounded-full">
          {Item.totalQuantity > 0 ? <h3>{Item.totalQuantity}</h3> : "0"}
        </div>
      </div>
      <Categroy />
      <FoodItem />

      <div className="pt-3 pb-5 flex justify-center items-center text-2xl font-bold  ">
        <h2>
          &copy; 2025 <span className="text-green-600"> @MR Fast Food</span> .
          All rights reserved.
        </h2>
      </div>
    </div>
  );
};

export default Home;
