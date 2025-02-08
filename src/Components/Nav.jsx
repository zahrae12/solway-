import React, { useState } from 'react'


import { navLinks } from '../constants';
const Nav = () => {
  const [isMenuOpen,setIsMenuOpen]=useState(false)
  return (
   <header className='padding-x py-8 absolute z-10 w-full '>
   <nav className='flex justify-between items-center max-container'>
    <a href="/">
    <img src="src\assets\images\image 4.png" alt="logo" width={130} height={29}/></a>
    <ul className='flex-1 flex ml-6 items-center gap-16 max-lg:hidden'>
          {navLinks.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                className='font-medium leading-normal text-lg text-gray-500'
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
        <div>
            <img src="src\assets\icons\hamburger.svg" width={25} height={25}
                className='hidden max-lg:block'
                onClick={() => setIsMenuOpen(!isMenuOpen)} />
        </div>
   </nav>

   <ul
        className={`lg:hidden flex flex-col items-center gap-6 absolute top-20 left-40 w-full bg-white py-5  transition-all duration-300 ${
          isMenuOpen ? 'block' : 'hidden'
        }`}
      >
        {navLinks.map((item) => (
          <li key={item.label}>
            <a
              href={item.href}
              className='font-montserrat text-lg text-gray-900'
              onClick={() => setIsMenuOpen(false)} 
            >
              {item.label}
            </a>
          </li>
        ))}
      </ul>
   </header>
  )
}

export default Nav