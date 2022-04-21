import React from 'react'
import Link from "next/link"

export default function Nav() 
{
  return (
    <nav className="bg-white sticky top-0 z-50 shadow-md">
      <div className='flex items-center justify-between max-w-6xl mx-7 lg:mx-auto py-2'>
        <Link href="/">
          <img
            className="w-36 object-contain cursor-pointer"
            src="/logo.png"
            alt=""
          />
        </Link>
        <Link href="/">
          <p className="cursor-pointer text-sm md:text-base text-blue-600 px-4 py-2 rounded-lg bg-gradient-to-r hover:from-blue-700 hover:to-purple-500 hover:text-white">Back to Home</p>
        </Link>
      </div>
    </nav>
  )
}