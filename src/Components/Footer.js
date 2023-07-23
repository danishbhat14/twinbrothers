const Footer = () => {
  return (
    <div className="bg-orange-500 text-black h-auto sm:h-96 shadow-lg">
      <div className="flex flex-col sm:flex-row justify-around pt-16 font-serif text-black text-lg">
        <ul className="space-y-6 text-black">
          <h1 className=" text-white">Contact Information</h1>
          <hr className="text-2xl text-white" />
          <li className="text-white">Email Address: twinbholidays@gmail.com</li>
          <li className=" text-white">Mobile No: 60052 42675</li>
          <hr className="text-2xl" />
          <li className=" text-white">
            Physical Address: Main-Market Gulmarg Road Chandilora <br />
            Tehsil: Tangmarg, Dist: Baramulla
            <hr className="text-2xl" />
          </li>
        </ul>
        <ul className="space-y-6 text-black">
          <li className=" text-white">CopyRight Information</li>
          <li className=" text-white">Privacy And Policy</li>
          <li className=" text-white">Refund Policy</li>
          <li className=" text-white">Terms and Conditions</li>
          <hr className="text-2xl" />
        </ul>
        <ul className="space-y-6  text-white">
          <li className="">Home</li>
          <li className="">About Us</li>
          <li className="">Contact Us</li>
          <li className="">Blogs</li>
          <hr className="text-2xl" />
        </ul>
      </div>
      <div className="flex justify-center bg-orange-500 items-center mt-8 sm:mt-16">
        <div className="flex space-x-4">
          <a href="https://www.facebook.com/profile.php?id=100089244964617" target="_blank" rel="noopener noreferrer">
            <img
              src="https://cdn-icons-png.flaticon.com/512/1384/1384053.png"
              alt="Facebook icon"
              className="w-6 h-6 mr-4"
            />
          </a>
          <a href="https://www.instagram.com/twinbrothersholidays/" target="_blank" rel="noopener noreferrer">
            <img
              src="https://cdn-icons-png.flaticon.com/512/3955/3955024.png"
              alt="Instagram icon"
              className="w-6 h-6"
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
