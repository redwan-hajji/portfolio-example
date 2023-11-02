import React from 'react'
import { TypeAnimation } from 'react-type-animation'
import {FaFacebook} from 'react-icons/fa'
import {AiFillInstagram,AiFillLinkedin,AiFillTwitterCircle} from 'react-icons/ai'

const Main = () => {
  return (
   <div   id='Main'>
    <img className='  bg-left  relative top-0 left-0 w-full h-screen bg-cover' src="https://images.pexels.com/photos/14655171/pexels-photo-14655171.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load " alt="" />
    <div className=' bg-white/50 z-[2] absolute top-0 left-0 w-full h-screen'></div>
    <div className=' font-bold text-gray-800 top-0 left-0 w-full h-screen flex items-center justify-center flex-col absolute z-[5]  text-6xl max-lg:text-5xl max-md:text-4xl max-sm:text-3xl'>I am Redwan
    <div className=' font-normal max-w-[700px] text-5xl max-lg:text-4xl max-md:text-3xl max-sm:text-2xl'>I am a
    <span>  </span> 
      <TypeAnimation
      sequence={[
     
        ' Coder',
        2000, 
        ' Developer',
        2000,
      ]}
      wrapper="span"
      speed={50}
      style={{ display: 'inline-block', margin:'1px', padding: '3px'}}
      repeat={Infinity}
    /> 
     </div>
     <div className='flex mt-2'>
     <FaFacebook size={30}  className='flex mx-3 cursor-pointer hover:scale-110 duration-300'/>
     <AiFillInstagram size={30}  className='flex mx-3 cursor-pointer hover:scale-110 duration-300 '/>
     <AiFillLinkedin  size={30} className='flex mx-3 cursor-pointer hover:scale-110 duration-300 '/>
     <AiFillTwitterCircle size={30} className='flex mx-3 cursor-pointer hover:scale-110 duration-300 '/>
     </div>
    </div>

   </div>
  )
}

export default Main