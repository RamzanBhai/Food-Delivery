import React from 'react'
import owner from '../assets/owner.jpg'

const Owner = () => {
  return (
    <div className=' flex lg:justify-between items-center rounded-lg  text-2xl font-bold p-6'>
       <div>
      <h2 className='mb-3 '><span className='text-green-500'>Muhammad Ramzan</span> </h2>
      <h2 ><span className='text-green-500'> MR Fast Food's Cafe..</span></h2>
      </div>
      <div><img className='w-[150px] h-[150px] rounded-full ' src={owner}/></div>
      
    </div>
  )
}

export default Owner