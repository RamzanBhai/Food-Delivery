import React from 'react';
import { useDispatch } from 'react-redux';
import { setSearch } from '../Redux/SearchSlice';
 export const Navbar = () =>{
  const dispatch = useDispatch()
  return(
    <nav className='flex flex-col lg:flex-row justify-between py-3 mx-6  '>
    <div>
      <h3 className='text-xl font-bold text-gray-600'>{new Date().toUTCString().slice(0,16)} </h3>
      <h1 className='text-2xl font-bold'>Ramzan Deal's</h1> 
    </div>
    <div>
      <input className=' bg-white p-3  border  border-gray-600  outline-none text-sm rounded-lg  w-full lg:w-[25vw]' type="search" name="search" id="" placeholder='Search here' onChange={(e)=>dispatch(setSearch(e.target.value))} />
    </div>
    </nav>
   
  )
}