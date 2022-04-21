import React from 'react'

function Skills() {
  return (
    <div id="skills" className="max-w-6xl mx-auto my-10 p-5">
        <h2 className="mb-10 lg:mb-15 text-center text-xl lg:text-3xl font-bold text-gray-700">Skills 👨‍💻</h2>
        <div className="grid grid-cols-3 lg:grid-cols-6 items-center justify-center gap-3">
            <div className="flex-cols items-center justify-center mx-auto group">
                <img src="/figma-icon.png" className="w-24 h-24 object-contain bg-gray-50 p-3 rounded-full mb-1 group-hover:scale-105 transition-transform duration-200 ease-in-out"/>
                <p className="text-center text-sm md:text-base text-gray-500">Figma</p>
            </div>
            <div className="flex-cols items-center justify-center mx-auto group">
                <img src="/wix-icon.png" className="w-24 h-24 object-contain bg-gray-50 p-3 rounded-full mb-1 group-hover:scale-105 transition-transform duration-200 ease-in-out"/>
                <p className="text-center text-sm md:text-base text-gray-500">Wix</p>
            </div>
            <div className="flex-cols items-center justify-center mx-auto group">
                <img src="/wordpress-icon.png" className="w-24 h-24 object-contain bg-gray-50 p-3 rounded-full mb-1 group-hover:scale-105 transition-transform duration-200 ease-in-out"/>
                <p className="text-center text-sm md:text-base text-gray-500">Wordpress</p>
            </div>
            <div className="flex-cols items-center justify-center mx-auto group">
                <img src="/react-icon.png" className="w-24 h-24 object-contain bg-gray-50 p-3 rounded-full mb-1 group-hover:scale-105 transition-transform duration-200 ease-in-out"/>
                <p className="text-center text-sm md:text-base text-gray-500 text-bold">React</p>
            </div>
            <div className="flex-cols items-center justify-center mx-auto group">
                <img src="/tailwind-css-icon.png" className="w-24 h-24 object-contain bg-gray-50 p-3 rounded-full mb-1 group-hover:scale-105 transition-transform duration-200 ease-in-out"/>
                <p className="text-center text-sm md:text-base text-gray-500">Tailwind CSS</p>
            </div>
            <div className="flex-cols items-center justify-center mx-auto group">
                <img src="/java-icon.png" className="w-24 h-24 object-contain bg-gray-50 p-3 rounded-full mb-1 group-hover:scale-105 transition-transform duration-200 ease-in-out"/>
                <p className="text-center text-sm md:text-base text-gray-500">Java</p>
            </div>
        </div>
    </div>
  )
}

export default Skills