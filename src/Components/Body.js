import React from 'react';
import { data } from './Constants';
import TravelImage from './Travelimage';
import Hotels from './Hotels';
import { Link } from 'react-router-dom';

const Body = () => {
  const ownerWhatsAppNumber = '+916005242675'; // Replace with the actual WhatsApp number

  const handleWhatsAppClick = () => {
    const isMobileDevice = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
      navigator.userAgent
    );
  
    let formattedWhatsAppNumber = ownerWhatsAppNumber;
    if (isMobileDevice && ownerWhatsAppNumber.length === 9) {
      formattedWhatsAppNumber =
        ownerWhatsAppNumber.substring(0, 2) +
        '0' +
        ownerWhatsAppNumber.substring(2);
    }
  
    const url = `https://wa.me/${formattedWhatsAppNumber}`;
    window.open(url, '_blank');
  };
  
  return (
    <>
      <div className="mt-10 relative">
        <div className="fixed bottom-4 right-4 z-50">
          <button onClick={handleWhatsAppClick}>
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" // Replace with the actual path to your WhatsApp logo image
              alt="WhatsApp Logo"
              className="h-12 w-12 rounded-full"
            />
          </button>
        </div>

        <h1 className="text-center p-2 text-3xl font-serif">Best Tour Packages To Kashmir</h1>
        <div className="flex flex-wrap">
          {data.map((item) => (
            <div
              className="w-96 shadow-lg p-4 m-4 xl:mx-14 md:mx-3 lg:mx-6 border-slate-500 hover:scale-110 hover:z-10 transition-all duration-500 ease-in-out"
              key={item.id}
            >
              <img alt="nature" className="rounded-md h-56 w-screen" src={item.image} />
              <h2 className="font-bold font-serif text-gray-500">{item.name}</h2>
              <hr />

              <div className="flex justify-between items-center">
                <div>
                  <h2 className="font-serif text-gray-600">{item.locations}</h2>
                  <h2 className="font-serif text-gray-600">{item.duration}</h2>
                  <h2 className="font-serif text-gray-600">{item.things}</h2>
                 
                </div>
                <vr/>
                <div>
                  <h2 className="font-serif text-gray-600">{item.visitplaces}</h2>
                  <h2 className="font-serif text-orange-600">{item.price}</h2>
                  
                </div>
              </div>
              <hr />
              

              <h1 className="p-3 bg-orange-600 text-center text-zinc-50 font-bold rounded-full">
                <Link to={"/Packagedetails/"+item.id}>  View Details</Link>
              </h1> 
            </div>
          ))}
        </div>
      </div>
      <TravelImage />
      <Hotels />
    </>
  );
};

export default Body;
