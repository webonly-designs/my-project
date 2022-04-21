import React from 'react'
import { urlFor } from '../lib/Sanity'
import Link from "next/link";

function Work({ works }) {
  return (
    <div id="work" className="max-w-6xl mx-auto my-10 p-5">
      <h2 className="mb-10 lg:mb-15 text-center text-xl lg:text-3xl font-bold text-gray-700">Work 🚀</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-6 p-2 md:p-6">
        {
          works.map(work => (
            <Link key={work._id} href={`/work/${work.slug.current}`}>
              <div className="rounded-lg group cursor-pointer overflow-hidden shadow-md group bg-gradient-to-r hover:from-blue-50 hover:to-purple-200">
                 <img 
                  className="h-60 w-full object-cover group-hover:scale-105 transition-transform duration-200 ease-in-out"
                  src={urlFor(work.imgUrl).url()}
                  alt="img"
                 />
                 <div className="p-5 flex items-center justify-between">
                  <h5 className="font-bold text-gray-600">{work.title}</h5>
                  <p className="px-4 py-2 bg-gray-100 rounded-full inline-block text-gray-700 text-sm">{work.tag}</p>
                 </div>
              </div>
            </Link>
          ))
        }
      </div>
    </div>
  )
}

export default Work