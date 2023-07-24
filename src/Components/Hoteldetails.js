import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { data } from "./Hoteldata";

const Hoteldetails = () => {
  const { id } = useParams();

  // Find the product object with the matching id
  const product = data.find(item => item.id === parseInt(id));

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // State to manage showing more images on small devices
  const isSmallScreen = window.innerWidth <= 768; // Set the breakpoint for small screens
  const [showMore, setShowMore] = useState(!isSmallScreen);

  // Function to toggle showing more images
  const toggleShowMore = () => {
    setShowMore(!showMore);
  };

  return (
    <div className={`mt-4 grid grid-cols-1 ${isSmallScreen ? '' : 'md:grid-cols-2'} gap-4`}>
      {/* Image section */}
      <div className='flex flex-col'>
        <div>
          <img
            className='text-black h-80 text-s md:w-96 font-serif max-w-full m-2'
            src={product.image}
            alt={product.name}
          />
        </div>
        {showMore && (
          <div className='flex flex-col'>
            {product.imagedata.map((image, index) => (
              <img
                key={index}
                className='text-black h-80 text-s md:w-96 font-serif max-w-full m-2'
                src={image}
                alt={`Image ${index + 1}`}
              />
            ))}
          </div>
        )}
        {/* Show/Hide Button */}
        {product.imagedata.length > 1 && isSmallScreen && (
          <button
            className='text-white bg-blue-500 px-4 py-2 rounded-md font-semibold mt-2'
            onClick={toggleShowMore}
          >
            {showMore ? 'Hide photos' : 'Show More photos'}
          </button>
        )}
      </div>

      {/* Details section */}
      <div className='flex flex-col justify-start items-center'>
        <div className='text-center mt-4'>
          <h1 className='text-5xl text-orange-600 font-serif'>{product.name}</h1>
          <h1 className='font-serif text-xl m-2'>{product.Discription}</h1>
        </div>
        <h1 className='font-serif text-2xl mt-8'>{product.h_name}</h1>
        <a className='font-serif text-2xl text-blue-500' href={product.h_link}>{product.text}</a>
        {/* Show/Hide Button */}
        {product.imagedata.length > 1 && !isSmallScreen && (
          <button
            className='text-white bg-blue-500 px-4 py-2 rounded-md font-semibold mt-2 mb-2'
            onClick={toggleShowMore}
          >
            {showMore ? 'Hide photos' : 'Show More photos'}
          </button>
        )}
      </div>
    </div>
  );
}

export default Hoteldetails;
