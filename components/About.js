import React from 'react'
import Link from 'next/link'

function About() {
  return (
    <div id="about" className="max-w-6xl mx-auto my-10 p-5 items-center lg:flex lg:justify-between">
        <div className="hidden lg:flex mr-20">
            <img src="/about.png" className="w-full" />
        </div>
        <div className="items-center justify-center lg:flex-1">
            <h2 className="mb-2 lg:mb-4 text-center text-xl lg:text-3xl font-bold text-gray-700">About Me 💁</h2>
            <p className="mb-2 lg:mb-3 text-center text-gray-600 text-sm md:text-base">
                Hello! My name is Akshay, I'm graduate from The University of Manitoba with a Bachelor in Computer Sicence. 
                I have worked on various projects like course registration backend system, a recipe related android app as assignments at The University.
                Currently, I am working as a Freelancer building websites and web apps for small businesses.
                My intrests include full stack web applications design and development using the latest technologies.
                Some of the latest technologies that I am using in my projects and lerning are React, NextJs, TailwindCss, GraphQl, Sanity and AWS.
                I will also be appearing for an AWS Developer Associate exam in summer of 2022.
            </p>
            <div className="flex justify-center">
                <Link href='https://www.linkedin.com/in/akshay-agarwal-065274123/'>
                    <a className="text-sm lg:text-lg text-gray-700 font-semibold px-4 py-2 rounded-lg shadow bg-gradient-to-r hover:from-blue-700 hover:to-purple-500 hover:text-white">
                        👉 Check my Linkedin
                    </a>
                </Link>
            </div>
        </div>
    </div>
  )
}

export default About