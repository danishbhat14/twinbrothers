import React from 'react'
import { data } from './Hoteldata'
import Gallery from './Gallery'
import { Link } from 'react-router-dom'

const Hotels = () => {
  return (
    <div className='pt-10'>
<div className='flex justify-center items-center '>
  <h1 className='font-serif text-4xl text-gray-500'>OUR HOTELS</h1>
</div>
    <div className="flex flex-wrap">
       
            {data.map((item) => (
              <div
                className="w-96 shadow-lg p-4 m-4 xl:mx-14 md:mx-3 lg:mx-6 border-slate-500 hover:scale-110 hover:z-10 transition-all duration-500 ease-in-out"
                key={item.id}
              >
                <img alt="nature" className="rounded-md h-56 w-screen" src={item.image} />
                <h2 className="font-bold font-serif text-gray-500">{item.name}</h2>
                <hr />
    
                <h2 className="text-red-600 font-serif">{item.price}</h2>
                <h2 className="font-serif text-gray-500">{item.location}</h2>
                <h2 className="font-serif text-gray-500">{item.Rating}</h2>
    
    
                <h1 className="p-3 bg-orange-400 text-center text-zinc-50 font-bold rounded-md">
                <Link to={"/Hoteldetails/"+item.id}>  View Details</Link>
                </h1>
              </div>
            ))}
             <Gallery/>
          </div>
         
          </div>
  )
}

export default Hotels
