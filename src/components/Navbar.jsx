import React, { useState } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className='flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-white'>
      <a href="#"className='w-full text-3xl font-bold text-[#19E4FF]'>DataSense.</a>
      <ul className='hidden md:flex'>
        <li className='p-4'><a href="#" className="text-white-500 hover:text-[#19E4FF] hover:underline">
        Home
    </a></li>
    <li className='p-4'><a href="#" className="text-white-500 hover:text-[#19E4FF] hover:underline">
        Company
    </a></li>
    <li className='p-4'><a href="#" className="text-white-500 hover:text-[#19E4FF] hover:underline">
        Resources
    </a></li>
    <li className='p-4'><a href="#" className="text-white-500 hover:text-[#19E4FF] hover:underline">
        About
    </a></li>
    <li className='p-4'><a href="#" className="text-white-500 hover:text-[#19E4FF] hover:underline">
        Contact
    </a></li>
      </ul>
      <div onClick={handleNav} className='block md:hidden'>
          {nav ? <AiOutlineClose size={20}/> : <AiOutlineMenu size={20} />}
      </div>
      <ul className={nav ? 'fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500' : 'ease-in-out duration-500 fixed left-[-100%]'}>
      <a href="#"className='w-full text-3xl font-bold text-[#19E4FF]'>DataSense.</a>
          <li className='p-4 border-b border-gray-600'><a href="#" className="text-white-500 hover:text-[#19E4FF] hover:underline">
        Home
    </a></li>
          <li className='p-4 border-b border-gray-600'><a href="#" className="text-white-500 hover:text-[#19E4FF] hover:underline">
        Company
    </a></li>
          <li className='p-4 border-b border-gray-600'><a href="#" className="text-white-500 hover:text-[#19E4FF] hover:underline">
        Resources
    </a></li>
          <li className='p-4 border-b border-gray-600'><a href="#" className="text-white-500 hover:text-[#19E4FF] hover:underline">
        About
    </a></li>
          <li className='p-4'><a href="#" className="text-white-500 hover:text-[#19E4FF] hover:underline">
        Contact
    </a></li>
      </ul>
    </div>
  );
};

export default Navbar;
