import React from 'react'
import crypto from '../assets/images/crypto.jpg'
import map from '../assets/images/world-map.jpg'
import netflix from "../assets/images/netflixclone.jpg"
import youtube from "../assets/images/youtube.jpg"

let project1={img: crypto,
 title:"crypto",
 tool: "Reactjs"
}
let project2={img: map,
 title:"maps",
 tool: "Reactjs"
}
let project3={img: netflix,
 title:"Netflix",
 tool: "Reactjs"
}
let project4={img: youtube,
 title:"Youtube",
 tool: "Reactjs"
}

let arrayData=[project1,project2,project3,project4]

const ProjectItem = () => {
  return (
    <div className='px-6 grid grid-cols-[repeat(auto-fill,minmax(350px,1fr))] gap-4 mt-4 max-md:px-0 max-[400px]:grid-cols-[repeat(auto-fill,minmax(250px,1fr))]'>
        <div  className=' relative rounded-lg bg-gradient-to-l from-blue-950 to-blue-50 bg-blue-950 h-[250px] group'>
          <img src={project1.img} alt="" className=' absolute rounded-lg top-0 left-0 hover:opacity-[10%] duration-200 bg-cover h-[100%] w-[100%] z-[2] ' />
          <div className='absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] z-[1] text-center pointer-events-none group-hover:z-[3] '>
            <div className='text-2xl text-blue-950 mb-2 font-bold '>{project1.title}</div>
            <p className='text-lg text-gray-600 mb-2 '>{project1.tool}</p>
            <a className=' cursor-pointer' href="#Home"><p className='px-2 py-1 bg-white rounded-lg'>see more</p></a>
          </div>
          </div>
        <div  className='relative rounded-lg bg-gradient-to-l from-blue-950 to-blue-50 bg-blue-950 h-[250px] group'>
          <img src={project2.img} alt="" className=' absolute rounded-lg top-0 left-0 hover:opacity-[10%] duration-200 bg-cover h-[100%] w-[100%] z-[2] ' />
          <div className='absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] z-[1] text-center pointer-events-none group-hover:z-[3] '>
            <div className='text-2xl text-blue-950 mb-2 font-bold '>{project2.title}</div>
            <p className='text-lg text-gray-600 mb-2 '>{project2.tool}</p>
            <a className=' cursor-pointer' href="#Home"><p className='px-2 py-1 bg-white rounded-lg'>see more</p></a>
          </div>
          </div>
        <div  className='relative rounded-lg bg-gradient-to-l from-blue-950 to-blue-50 bg-blue-950 h-[250px] group'>
          <img src={project3.img} alt="" className=' absolute rounded-lg top-0 left-0 hover:opacity-[10%] duration-200 bg-cover h-[100%] w-[100%] z-[2] ' />
          <div className='absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] z-[1] text-center pointer-events-none group-hover:z-[3] '>
            <div className='text-2xl text-blue-950 mb-2 font-bold '>{project3.title}</div>
            <p className='text-lg text-gray-600 mb-2 '>{project3.tool}</p>
            <a className=' cursor-pointer' href="#Home"><p className='px-2 py-1 bg-white rounded-lg'>see more</p></a>
          </div>
          </div>
        <div  className='relative rounded-lg bg-gradient-to-l from-blue-950 to-blue-50 bg-blue-950 h-[250px] group'>
          <img src={project4.img} alt="" className=' absolute rounded-lg top-0 left-0 hover:opacity-[10%] duration-200 bg-cover h-[100%] w-[100%] z-[2] ' />
          <div className='absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] z-[1] text-center pointer-events-none group-hover:z-[3] '>
            <div className='text-2xl text-blue-950 mb-2 font-bold '>{project4.title}</div>
            <p className='text-lg text-gray-600 mb-2 '>{project4.tool}</p>
            <a className=' cursor-pointer' href="#Home"><p className='px-2 py-1 bg-white rounded-lg'>see more</p></a>
          </div>
          </div>
    </div>
  )
}

export default ProjectItem