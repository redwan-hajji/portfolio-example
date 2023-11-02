import React from 'react'
import ProjectItem from './ProjectItem'

const Projects = () => {
  return (
    <div id='Projects' className=' pt-10 max-w-[1100px]  px-4 max-[1200px]:mx-12 max-md:ml-0 max-md:mr-0 m-auto'>
      <div className='text-center '>
      <div className=' text-center font-bold text-blue-950 text-3xl '>Projects</div>
      <p className='text-gray-600 pt-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda, perferendis dolor culpa quia accusantium corrupti. Dolor tempora quas perspiciatis eligendi.</p>
      </div>
   <ProjectItem/>
   </div>
  )
}

export default Projects