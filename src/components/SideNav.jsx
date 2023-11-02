import React from 'react'
import { useState } from 'react'
import {AiOutlineMenu,AiOutlineHome,AiOutlineMinusSquare,AiOutlineMail} from 'react-icons/ai'
import {BiShapeSquare} from 'react-icons/bi'
import {BsFillPersonFill} from 'react-icons/bs'

const SideNav = () => {

 const handleNav = () => {
  setSideNav(!SideNav);
 };

 const [SideNav,setSideNav]=useState(false)
  return (
   <>
    <AiOutlineMenu onClick={handleNav} size={25} className='absolute top-4 right-4 md:hidden text-lg cursor-pointer z-[99] '/>
    {
    SideNav ?(
      <div className=' bg-white/90 fixed w-[100vw] h-[100vh] flex items-center justify-center z-[20] top-0 left-0 flex-col md:hidden'>
       <a onClick={handleNav} href="#Main" className='bg-gray-100 hover:scale-110 duration-300  my-3 flex items-center justify-center w-[80vw] shadow-[0px_10px_1px_rgba(221,_221,_221,_1),_0_10px_20px_rgba(204,_204,_204,_1)] rounded-2xl py-3 '>
       <AiOutlineHome size={25} className=' inline '/>
       <span className=' ml-2 text-lg'>Home</span>
       </a>
       <a onClick={handleNav} href="#Work" className='bg-gray-100 hover:scale-110 duration-300  my-3 flex items-center justify-center w-[80vw] shadow-[0px_10px_1px_rgba(221,_221,_221,_1),_0_10px_20px_rgba(204,_204,_204,_1)] rounded-2xl py-3 '>
       <AiOutlineMinusSquare size={25} className=' inline '/>
       <span className=' ml-2 text-lg'>Work</span>
       </a>
       <a onClick={handleNav} href="#Projects" className=' bg-gray-100 hover:scale-110 duration-300 my-3 flex items-center justify-center w-[80vw] shadow-[0px_10px_1px_rgba(221,_221,_221,_1),_0_10px_20px_rgba(204,_204,_204,_1)] rounded-2xl py-3 '>
       <BiShapeSquare size={25} className=' inline '/>
       <span className=' ml-2 text-lg'>Projects</span>
       </a>
       <a onClick={handleNav} href="" className='bg-gray-100 hover:scale-110 duration-300  my-3 flex items-center justify-center w-[80vw] shadow-[0px_10px_1px_rgba(221,_221,_221,_1),_0_10px_20px_rgba(204,_204,_204,_1)] rounded-2xl py-3 '>
       <BsFillPersonFill size={25} className=' inline '/>
       <span className=' ml-2 text-lg'>CV</span>
       </a>
       <a onClick={handleNav} href="Contact" className='bg-gray-100 hover:scale-110 duration-300  my-3 flex items-center justify-center w-[80vw] shadow-[0px_10px_1px_rgba(221,_221,_221,_1),_0_10px_20px_rgba(204,_204,_204,_1)] rounded-2xl py-3 '>
       <AiOutlineMail size={25} className=' inline '/>
       <span className=' ml-2 text-lg'>Contact</span>
       </a>

      </div>
    )
    : (
      ''
    )
    }
    <div className='fixed left-3 h-screen w-10 flex flex-col justify-center items-center max-md:hidden z-[20]'>
     <a href='#Main'><AiOutlineHome size={40} className='bg-gray-100  rounded-full p-2 shadow-md hover:scale-110 duration-300 cursor-pointer mb-3 shadow-gray-400  hover:border-2 hover:border-black transition-all'/></a>
     <a href='#Work'><AiOutlineMinusSquare size={40} className='bg-gray-100  rounded-full p-2 shadow-md hover:scale-110 duration-300 cursor-pointer mb-3 shadow-gray-400   hover:border-2 hover:border-black transition-all'/></a>
     <a href='#Projects'><BiShapeSquare size={40} className='bg-gray-100  rounded-full p-2 shadow-md hover:scale-110 duration-300 cursor-pointer mb-3 shadow-gray-400   hover:border-2 hover:border-black transition-all'/></a>
     <a href=''><BsFillPersonFill size={40} className='bg-gray-100  rounded-full p-2 shadow-md hover:scale-110 duration-300 cursor-pointer mb-3 shadow-gray-400   hover:border-2 hover:border-black transition-all'/></a>
     <a href='#Contact'><AiOutlineMail size={40} className='bg-gray-100  rounded-full p-2 shadow-md hover:scale-110 duration-300 cursor-pointer mb-3 shadow-gray-400   hover:border-2 hover:border-black transition-all'/></a>

    </div>
    </>
  )
}

export default SideNav