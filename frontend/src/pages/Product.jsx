import React, { useState } from 'react';
import alum from "../assets/alum.png";
import iron from "../assets/iron.png";
import pll from "../assets/pll.png";

const Product = () => {
  const [isExpanded, setIsExpanded] = useState(false); // State to control expanded text

  const handleToggle = () => {
    setIsExpanded(!isExpanded); // Toggle the expanded state
  };

  return (
    <div className='Product bg-white pb-12' id='Product'>
      <h1 className='font-serif text-4xl sm:text-6xl text-center text-green-700 py-8'>
        Our Products
      </h1>

      {/* Section 1 */}
      <div className='flex flex-col sm:flex-row items-center justify-between gap-8 px-6 sm:px-12 m-5'>
        {/* Image First */}
        <div className='w-full sm:w-1/2'>
          <img 
            src={alum} 
            alt="alum" 
            className='w-full h-auto object-contain rounded-lg shadow-xl transition-transform duration-300 transform hover:scale-105' 
          />
          {/* Text Below Image */}
          <p className="text-2xl text-blue-700 sm:text-lg md:text-xl lg:text-2xl text-center pt-2 pb-1 font-bold">
            Aluminium
          </p>
        </div>

        {/* Text Below */}
        <div className='flex flex-col gap-0 max-w-lg text-center sm:text-left'>
          <p className='font-serif text-lg sm:text-xl text-gray-800 '>
            We specialize in the trade of high-quality aluminium scraps, offering a sustainable solution for recycling and reuse in various industries. We focus on sustainability, offering cost-effective solutions to meet your needs.
          </p>
        </div>
      </div>

      {/* Section 2 */}
      <div className='flex flex-col sm:flex-row-reverse items-center justify-between gap-8 px-6 sm:px-12 m-5'>
        {/* Image First */}
        <div className='w-full sm:w-1/2'>
          <img 
            src={iron} 
            alt="iron" 
            className='w-full h-auto object-contain rounded-lg shadow-xl transition-transform duration-300 transform hover:scale-105' 
          />
         {/* Text Below Image */}
         <p className="text-2xl text-blue-700 sm:text-lg md:text-xl lg:text-2xl text-center pt-2 pb-1 font-bold">
            Iron
          </p>
        </div>

        {/* Text Below */}
        <div className='flex flex-col gap-4 max-w-lg text-center sm:text-left'>
          <p className='font-serif text-lg sm:text-xl text-gray-800'>
            We are a trusted provider of iron scraps, offering a vital resource for industries worldwide. Our iron scrap is sourced responsibly and processed to meet the specific needs of manufacturing, construction, and recycling sectors.
          </p>
        </div>
      </div>

      {/* Section 3 */}
      <div className='flex flex-col sm:flex-row items-center justify-between gap-8 px-6 sm:px-12 m-5'>
        {/* Image First */}
        <div className='w-full sm:w-1/2'>
          <img 
            src={pll} 
            alt="plastic scrap" 
            className='w-full h-auto object-contain rounded-lg shadow-xl transition-transform duration-300 transform hover:scale-105' 
          />
         {/* Text Below Image */}
         <p className="text-2xl text-blue-700 sm:text-lg md:text-xl lg:text-2xl text-center pt-2 pb-1 font-bold">
            Plastic
          </p>
        </div>

        {/* Text Below */}
        <div className='flex flex-col gap-4 max-w-lg text-center sm:text-left'>
          <p className='font-family: Roboto, sans-serif text-lg sm:text-xl text-gray-800'>
            In addition to metal scraps, we are also a trusted supplier of good-quality plastic scrap, providing a sustainable solution for businesses looking to reduce waste and improve their environmental footprint. Our plastic scrap is sourced from places and processed to meet specific material needs. 
          </p>
        </div>
      </div>
    </div>
  );
};

export default Product;







