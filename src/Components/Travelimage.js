import React from 'react';

const TravelImage = () => {
  return (
    <div
     className="bg-cover bg-center h-screen flex items-center ml-10 mr-10 rounded"
      style={{
        backgroundImage: `url('https://img.freepik.com/free-photo/front-view-young-woman-holding-tickets-preparing-vacation-blue-background-journey-sea-vacation-travel-plane-voyage_140725-92704.jpg?w=996&t=st=1685774500~exp=1685775100~hmac=2caf3c04515eaeb37be3cbae324d79f8946a5dfaf6122a7b93f194c8516e560d')`,
      }}
    >
      <div className="ml-8 text-white">
        <div className="text-white">
          <h1 className="text-6xl font-serif mb-4">EXPLORE THE WORLD WITH US!</h1>
          <p className="text-lg text-orange-500 font-light italic">"Take only memories, leave only footprints."</p>
        </div>
        <div className="mt-8">
          <h1 className="text-white text-4xl font-bold mb-2">WHY SHOULD YOU TRAVEL WITH US?</h1>
          <p className="text-orange-500 font-serif text-2xl">1000+ successful trips</p>
          <p className="text-orange-500 font-serif text-2xl">500+ active clients</p>
          <p className="text-orange-500 font-serif text-2xl">Years of experience: 5</p>
        </div>
      </div>
    </div>
  );
};

export default TravelImage;
