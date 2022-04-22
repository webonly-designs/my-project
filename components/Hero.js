import React from 'react'
import { Link } from "react-scroll"

function Hero() {
  return (
    <div id="header" className="max-w-6xl mx-auto my-5 p-5 items-center lg:flex lg:justify-between">

        <div className="text-center lg:text-left p-5">

            <div className="flex space-x-2 mb-3 lg:mb-4 items-center justify-center">
                <p className="text-2xl lg:text-5xl font-extrabold text-gray-700">👋 Hello, I am</p>
                <h1 className="text-2xl lg:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-blue-700 to-purple-400">Akshay</h1>
            </div>
            <p className="mb-1 lg:mb-2 lg:text-xl text-gray-600 font-semibold">Front-End Developer ➕ Freelancer 👨‍💻</p>
            <p className="mb-1 lg:mb-2 lg:text-xl text-gray-600 font-semibold">I design and build websites and web apps</p>
            <h3 className="mb-1 lg:mb-2 lg:text-xl text-gray-700 font-bold">Popular technologies</h3>
            <div className="mb-2 lg:mb-4 flex items-center justify-center lg:justify-start space-x-1">
                <img src="/figma-icon.png" className="w-6 h-6 lg:w-8 lg:h-8" alt="Figma icon"/>
                <img src="/react-icon.png" className="w-6 h-6 lg:w-8 lg:h-8" alt="react icon"/>
                <img src="/wix-icon.png" className="w-6 h-6 lg:w-8 lg:h-8" alt="wix icon"/>
                <img src="/wordpress-icon.png" className="w-6 h-6 lg:w-8 lg:h-8" alt="wordpress icon"/>
            </div>
            <Link to="contact" spy={true} smooth={true} offset={-50} duration={500} className="cursor-pointer text-sm lg:text-lg text-gray-700 font-semibold px-4 py-2 rounded-lg shadow bg-gradient-to-r hover:from-blue-700 hover:to-purple-500 hover:text-white">🤙 Get in Touch</Link>

        </div>

        <div className="items-center justify-center">
           <img src="/hero.png" alt="Profile" className="mx-auto w-1/2 lg:w-full p-5"/>
        </div>
        
    </div>
  )
}

export default Hero