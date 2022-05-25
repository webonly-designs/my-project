import React from 'react'
import { useState } from 'react';
import { Link } from "react-scroll"


function Navbar() {
    const [active, setActive] = useState(false);

    const handleClick = () => {
        setActive(!active);
    };

  return (
    <nav className="bg-white sticky top-0 z-50 shadow-md">

       <div className='flex items-center flex-wrap max-w-6xl mx-7 lg:mx-auto py-2'>

            <Link to="header" spy={true} smooth={true} offset={-200} duration={500}>
                <img src="/logo.png" className="inline-flex items-center w-36" alt="Webonly Logo" />
            </Link>

            <button
                className=' inline-flex p-3 bg-gradient-to-r hover:from-blue-700 hover:to-purple-500 rounded lg:hidden text-black ml-auto hover:text-white outline-none'
                onClick={handleClick}
            >

                <svg
                    className='w-6 h-6'
                    fill='none'
                    stroke='currentColor'
                    viewBox='0 0 24 24'
                    xmlns='http://www.w3.org/2000/svg'
                >
                    <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M4 6h16M4 12h16M4 18h16'
                    />
                </svg>

            </button>

            {/*Note that in this div we will use a ternary operator to decide whether or not to display the content of the div  */}

            <div className={`${active ? '' : 'hidden'} w-full lg:inline-flex lg:flex-grow lg:w-auto`} >

                <div className='lg:inline-flex lg:flex-row lg:ml-auto lg:w-auto w-full lg:items-center items-start flex flex-col lg:h-auto lg:space-x-6'>

                    <Link to="header" spy={true} smooth={true} offset={-250} duration={700} onClick={handleClick} className='lg:inline-flex lg:w-auto w-full px-4 py-2 rounded text-gray-600 text-sm md:text-base  items-center justify-center bg-gradient-to-r hover:from-blue-700 hover:to-purple-500 hover:text-white'>
                        Home
                    </Link>

                    <Link to="about" spy={true} smooth={true} offset={-250} duration={700} onClick={handleClick} className='lg:inline-flex lg:w-auto w-full px-4 py-2 rounded text-gray-600 text-sm md:text-base items-center justify-center bg-gradient-to-r hover:from-blue-700 hover:to-purple-500 hover:text-white'>
                        About 
                    </Link>

                    <Link to="skills" spy={true} smooth={true} offset={-250} duration={700} onClick={handleClick} className='lg:inline-flex lg:w-auto w-full px-4 py-2 rounded text-gray-600 text-sm md:text-base items-center justify-center bg-gradient-to-r hover:from-blue-700 hover:to-purple-500 hover:text-white'>
                        Skills
                    </Link>

                    <Link to="work" spy={true} smooth={true} offset={-250} duration={700} onClick={handleClick} className='lg:inline-flex lg:w-auto w-full px-4 py-2 rounded text-gray-600 text-sm md:text-base items-center justify-center bg-gradient-to-r hover:from-blue-700 hover:to-purple-500 hover:text-white'>
                        Work
                    </Link>

                    <Link to="contact" spy={true} smooth={true} offset={-100} duration={700} onClick={handleClick} className='lg:inline-flex lg:w-auto w-full px-4 py-2 rounded text-sm md:text-base items-center justify-center bg-gradient-to-r hover:from-blue-700 hover:to-purple-500 text-blue-600 hover:text-white'>
                        Say Hi!!
                    </Link>
                </div>

            </div>

        </div>

    </nav>
  )
}

export default Navbar