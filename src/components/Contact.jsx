import React from 'react'

const Contact = () => {
  return (
    <div id='Contact'  className=' pt-10 max-w-[1100px]  px-7 max-[1200px]:mx-12 max-md:ml-0 max-md:mr-0 m-auto pb-5 '>
     <div className=' text-center font-bold text-blue-950 text-3xl '>Contact</div>
     <div>
     <form  className='flex flex-col gap-3 justify-between w-full' >
      <div className='grid grid-cols-2 w-full gap-3 max-sm:grid-cols-1'>
       <div>
       <label className=' text-sm font-semibold uppercase text-gray-600'>name</label>
       <input type="text"  className=' flex rounded-lg p-2 border border-gray-300 w-full'/>
       </div>
       <div>
       <label className=' text-sm font-semibold uppercase text-gray-600'>phone</label>
       <input type="text"  className=' flex rounded-lg p-2 border border-gray-300 w-full' />
       </div>
      </div>
      <div>
       <label className=' text-sm font-semibold uppercase text-gray-600' >email</label>
       <input type="email"  className=' flex rounded-lg p-2 border border-gray-300 w-full' />
      </div>
      <div>
       <label className=' text-sm font-semibold uppercase text-gray-600'>subject</label>
       <input type="text"  className=' flex rounded-lg p-2 border border-gray-300 w-full' />
      </div>
      <div>
       <label className=' text-sm font-semibold uppercase text-gray-600 '>message</label>
       <textarea className=' flex rounded-lg p-2 border border-gray-300 w-full' rows="10"></textarea>
      </div>
      <input type="submit" value="SUBMITE" className=' cursor-pointer flex rounded-lg p-2 border bg-blue-950 text-white w-full items-center justify-center' />
     </form>
    </div>
    </div>
  )
}

export default Contact