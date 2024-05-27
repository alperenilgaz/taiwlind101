import React from 'react'
import logo from "../../assets/logo.png"
const Responsive = () => {
  return (
    
// Breakpoint prefix	Minimum width	CSS
// sm	640px	@media (min-width: 640px) { ... }
// md	768px	@media (min-width: 768px) { ... }
// lg	1024px	@media (min-width: 1024px) { ... }
// xl	1280px	@media (min-width: 1280px) { ... }
// 2xl	1536px	@media (min-width: 1536px) { ... }

    <>
        <img className='w-1/4 md:w-2/5 lg:w-96 xl:w-1/2' src={logo} alt="" />
        <div className="container mt-5 flex flex-col md:flex-row ">
          <div className="  w-full bg-gray-500">
              first
          </div>
          <div className="w-full bg-green-500">
              first
          </div>
          <div className=" w-full bg-blue-500">
              first
          </div>

        </div>
        
        <h2 className='text-lg mt-5'>Responsive Card Design</h2>
        <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
            <div className="flex flex-row md:flex-col">
              <div className="md:shrink-0"></div>
              <img className='h-16 flex  w-32 object-contain md:h-full md:w-48' src={logo} alt="" />
           
            <div className="p-8">
             <div className='uppercase tracking-wide text-sm text-indigo-500 font-semibold'>
              Company retreats
             </div>
             <a className='block mt-1 text-lg leading-tight font-medium text-black  hover:underline' href="#">Incredible accommodation for your team</a>
             <p className='mt-2 text-slate-500'>Looking to take your team away on a retreat to enjoy awesome food and take in some sunshine? We have a list of places to do just that.</p>
            </div>
        </div>
        </div>
    </>
  )
}

export default Responsive