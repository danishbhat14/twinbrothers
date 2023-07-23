import React, { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Slider = () => {
  const images = [
    'https://images.unsplash.com/photo-1568889753852-196c487a536e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1176&q=80',
    'https://media.gettyimages.com/id/571129063/photo/anchored-shikara-boats.jpg?s=1024x1024&w=gi&k=20&c=get6cylZB4OXSuZuBox1s7ah6KJa-MCcRcUqhoN5ttA=',
    'https://img.freepik.com/free-photo/sunrise-dal-lake-kashmir-india_1232-4765.jpg?w=900&t=st=1688369871~exp=1688370471~hmac=0c8f7cf1d4de48e40a07f5b7f4c0ebbef383fccf7dab9b1e36b7d0267caea704',
    'https://img.freepik.com/premium-photo/2-men-unrecognisable-faces-sats-bench-surrounded-by-nature_750831-527.jpg?w=996'
  ];

  const [currentImage, setCurrentImage] = useState(0);
  const [enquiryData, setEnquiryData] = useState({
    name: '',
    email: '',
    selectedDate: '',
    message: '',
  });

  const handleButton = () => {
    alert('Thanks for contacting us! We will reach you soon.', {
      position: toast.POSITION.TOP_CENTER,
      autoClose: 3000,
      hideProgressBar: true,
      closeOnClick: true,
      draggable: false,
    });
  };

  const handlePrevImage = () => {
    setCurrentImage((prevImage) => (prevImage === 0 ? images.length - 1 : prevImage - 1));
  };

  const handleNextImage = () => {
    setCurrentImage((prevImage) => (prevImage === images.length - 1 ? 0 : prevImage + 1));
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage === images.length - 1 ? 0 : prevImage + 1));
    }, 4000); // 4 seconds

    return () => clearInterval(interval);
  }, [images.length]);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setEnquiryData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <div className="relative">
      <div className="w-full h-96 relative overflow-hidden pt-1">
        <img
          className="w-full h-full object-cover absolute top-0 left-0"
          src={images[currentImage]}
          alt={`Image ${currentImage + 1}`}
        />

        <div className="absolute top-0 left-0 flex items-center justify-between w-full h-full">
          <button
            className="text-white text-2xl bg-black bg-opacity-50 p-2 rounded-l"
            onClick={handlePrevImage}
          >
            &lt;
          </button>

          <button
            className="text-white text-2xl bg-black bg-opacity-50 p-2 rounded-r"
            onClick={handleNextImage}
          >
            &gt;
          </button>
        </div>
      </div>

      <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
        <div className="bg-white bg-opacity-75 p-6 rounded shadow-lg flex flex-col space-y-4 md:flex-row md:space-y-0 md:space-x-4">
          {/* First group of fields (Name and Email) */}
          <div className="flex flex-col space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 ">Name</label>
              <input
                type="text"
                name="name"
                className="px-2 py-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                placeholder="Enter your name"
                value={enquiryData.name}
                onChange={handleInputChange}
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 ">Email</label>
              <input
                type="email"
                name="email"
                className="px-2 py-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                placeholder="Enter your email"
                value={enquiryData.email}
                onChange={handleInputChange}
              />
            </div>
          </div>

          {/* Second group of fields (Date and Message) */}
          <div className="flex flex-col space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 ">Date</label>
              <input
                type="date"
                name="selectedDate"
                className="px-2 py-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                value={enquiryData.selectedDate}
                onChange={handleInputChange}
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 ">Message</label>
              <textarea
                name="message"
                className="px-2 py-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                rows="4"
                placeholder="Enter your message"
                value={enquiryData.message}
                onChange={handleInputChange}
              />
            </div>
          </div>
        </div>
      </div>

      <button
        onClick={handleButton}
        className="absolute bottom-4 right-4 px-2 py-2 bg-green-500 font-serif text-white rounded-md hover:bg-blue-600 transition-colors duration-300"
      >
        Post Enquiry
      </button>
    </div>
  );
};

export default Slider;
