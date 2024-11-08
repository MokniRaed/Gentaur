'use client'
import React, { useState } from 'react';

const MenuItem = ({ name, subMenus }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleMouseEnter = () => setIsOpen(true);
  const handleMouseLeave = () => setIsOpen(false);

  return (
    <div 
      className='relative p-2 z-[998]' 
      onMouseEnter={handleMouseEnter} 
      onMouseLeave={handleMouseLeave}
    >
      <p className='cursor-pointer text-secondary font-medium border-b-2 border-transparent hover:border-secondary transition-all duration-300 ease-in-out '>{name}</p>

      {isOpen && subMenus.length > 0 && (
        <div className='absolute left-0 mt-2 w-48 p-4 bg-secondary shadow-lg  flex flex-col'>
          {subMenus.map((subMenu, index) => (
            <a 
              key={index} 
              href={subMenu.url} 
              className='relative p-2 text-white text-sm hover:text-white'
              onClick={() => setIsOpen(false)} // Optional: Close on click
            >
              <span className='absolute left-0 right-0 bottom-1 mx-auto ml-2 border-b-2 border-transparent hover:border-white transition-all duration-300 ease-in-out'>
                &nbsp;
              </span>
              {subMenu.name}
            </a>
          ))}
        </div>
      )}
    </div>
  );
};

export default MenuItem;
