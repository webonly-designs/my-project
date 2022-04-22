import React from 'react'
import { FaInstagram, FaGithub, FaLinkedin, FaWhatsapp } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="text-gray-600 body-font max-w-6xl mx-auto">
        <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
            <div className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
                <img src="/logo.png" className="inline-flex items-center w-36" alt="Webonly Logo" />
            </div>
            <p className="text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">© 2020 Akshay —
            <a href="https://www.instagram.com/03akshay/" className="text-gray-600 ml-1" rel="noopener noreferrer" target="_blank">@akshay03</a>
            </p>
            <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
            <a className="text-gray-500 text-lg cursor-pointer" href='https://www.instagram.com/03akshay/'>
                <FaInstagram />
            </a>
            <a className="ml-3 text-gray-500 text-lg cursor-pointer" href='https://github.com/webonly-designs'>
                <FaGithub />
            </a>
            <a className="ml-3 text-gray-500 text-lg cursor-pointer" href="https://www.linkedin.com/in/akshay-agarwal-065274123/">
                <FaLinkedin />
            </a>
            <a className="ml-3 text-gray-500 text-lg cursor-pointer" href="https://wa.me/12048698510">
                <FaWhatsapp />
            </a>
            </span>
        </div>
    </footer>
  )
}
