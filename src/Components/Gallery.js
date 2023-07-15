import React from 'react';

const Gallery = () => {
  const galleryPhotos = [
    'https://quantumtourandtravels.com/static/media/gallery-02.9acd7c84d293f45ac15e.jpg',
    'https://quantumtourandtravels.com/static/media/gallery-04.66c107edd159054ae8cf.jpg',
    'https://quantumtourandtravels.com/static/media/gallery-06.4c0ac04026db9075b42b.jpg',
    'https://quantumtourandtravels.com/static/media/gallery-03.b327cf60ba18a59db408.jpg',
    'https://quantumtourandtravels.com/static/media/gallery-05.45ab035583b65864c53a.jpg',
    'https://img.freepik.com/premium-photo/happy-family-winter-holiday_256588-572.jpg?w=996',
   
  ];

  return (
    <div className='py-10'>
        <div className='flex justify-center items-center '>
  <h1 className='font-serif text-4xl text-gray-500'>CUSTOMER GALLERY</h1>
</div>
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
      {galleryPhotos.map((photo, index) => (
        <div key={index} className="bg-gray-200 rounded-lg overflow-hidden">
          <img src={photo} alt={`Photo ${index + 1}`} className="w-full h-full object-cover" />
        </div>
      ))}
    </div>
    </div>
  );
};

export default Gallery;
