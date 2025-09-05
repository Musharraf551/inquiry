import React, { useState } from 'react';
import plastic from "../assets/plastic.png";

const Home = () => {
  const [isExpanded, setIsExpanded] = useState(false); // State to control expanded text

  const handleToggle = () => {
    setIsExpanded(!isExpanded); // Toggle the expanded state
  };

  return (
    <div className='Home bg-primary py-12' id='Home'>
      {/* Centered h1 with 3 lines */}
      <h1 className='font-serif text-3xl sm:text-5xl md:text-6xl text-center text-orange-400 py-8'>
        Trading Materials
        <span className='block sm:inline p-1'>{/* Just to break into a new line if necessary */}</span>
            With a
        <span className='block sm:inline p-1'>{/* Just to break into a new line if necessary */}</span>
            Passion
      </h1>

      {/* Flex for Text and Image */}
      <div className='flex flex-col sm:flex-row items-center justify-center gap-8 sm:gap-12 px-4 sm:px-12 m-5'>
        {/* Text Block */}
        <div className='flex flex-col gap-4 max-w-lg text-center sm:text-left'>
          <p className='font-semibold text-lg sm:text-xl text-white'>
            SR Enterprises is dedicated to serving its clients and customers with excellence, always striving to provide the best service in a professional and friendly manner. We provide and supply high-quality used plastics for recycling and reuse, helping industries reduce waste and support sustainable practices.
            {/* This is the initial part of the text */}
            {isExpanded && (
              <span>
                We operate in trading raw materials as well as scrap products worldwide. We also work as a broker between parties for trading materials. Want to sell and buy materials? Then please contact us.
              </span>
            )}
          </p>
        </div>

        {/* Image Block */}
        <div className='w-full sm:w-1/2'>
          <img src={plastic} alt="plastic" className='w-full h-auto object-contain rounded-lg shadow-lg transition-transform duration-300 transform hover:scale-105' />
        </div>
      </div>

      {/* Learn More Button */}
      <div className='flex justify-center mt-6'>
        <button 
          onClick={handleToggle} 
          className='bg-gradient-to-r from-primary to-secondary text-white py-2 px-6 rounded-full transition-all duration-200 transform hover:scale-105'>
          {isExpanded ? "Show Less" : "Learn More"}
        </button>
      </div>
    </div>
  );
};

export default Home;




