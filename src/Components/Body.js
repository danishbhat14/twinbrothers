import React from 'react';
import { data } from './Constants';

const Body = () => {
    return (
        <div className='mt-10'>
         
    
          <h1 className="text-center p-2 text-3xl font-serif">OUR FEATURED PACKAGES</h1>
          <div className="flex flex-wrap">
            {data.map((item) => (
              <div
                className="w-96 shadow-lg p-4 m-4 xl:mx-14 md:mx-3 lg:mx-6 border-slate-500 hover:scale-110 hover:z-10 transition-all duration-500 ease-in-out"
                key={item.id}
              >
                <img alt="nature" className="rounded-md h-56 w-screen" src={item.image} />
                <h2 className="font-bold font-serif text-gray-500">{item.name}</h2>
                <hr />
    
                <h2 className="text-red-600">{item.price}</h2>
                <h2 className="font-serif text-green-500">{item.duration}</h2>
    
                <h1 className="p-3 bg-orange-400 text-center text-zinc-50 font-bold rounded-md">
                   View Details 
                </h1>
              </div>
            ))}
          </div>
        </div>
      );
    };

export default Body
