import React from 'react'

export default function Testimonials() {
  return (
    <div id="testimonials" className="max-w-6xl mx-auto my-10 p-5">
        <h2 className="mb-10 lg:mb-15 text-center text-xl lg:text-3xl font-bold text-gray-700">Testimonials ⭐</h2>
        <div className="md:flex md:space-x-4 space-y-4 items-center justify-center"> 
            <img src="/fiverrReview.jpg" alt="review" className="w-full md:w-1/2 object-contain shadow-md rounded-lg"/>
            <img src="/twitter.jpg" alt="review" className="w-full md:w-1/2 object-contain shadow-md rounded-lg"/>
        </div>
    </div>
  )
}
