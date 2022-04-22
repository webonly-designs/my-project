import emailjs from "@emailjs/browser";
import React, { useRef } from 'react';

export default function Contact() {

    const form = useRef();

    function sendEmail(e) {
        e.preventDefault();

        emailjs.sendForm('service_ea25o9o', 'template_bf8yuas', e.target, process.env.NEXT_PUBLIC_EMAIL_USER_ID)
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
            e.target.reset()
    }

    return(
        <section id="contact" className="text-gray-600 body-font relative max-w-6xl mx-auto">
            <div className="container px-5 py-10 mx-auto flex sm:flex-nowrap flex-wrap">
                <div className="lg:w-2/3 md:w-1/2 bg-gray-300 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
                    <iframe width="100%" height="100%" className="absolute inset-0" frameBorder="0" title="map" marginHeight="0" marginWidth="0" scrolling="no" src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d2575.099081450321!2d-97.2199486!3d49.8030049!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x52ea75506bd804d3%3A0x43ce81687834bc69!2s189%20Vineland%20Crescent%2C%20Winnipeg%2C%20MB!5e0!3m2!1sen!2sca!4v1649531307445!5m2!1sen!2sca"></iframe>
                    <div className="bg-white relative flex flex-wrap py-6 rounded shadow-md">
                        <div className="lg:w-1/2 px-6">
                                <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">ADDRESS</h2>
                                <p className="mt-1">198 Vineland Crescent, Winnipeg</p>
                            </div>
                            <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
                                <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">EMAIL</h2>
                                <p className="text-indigo-500 leading-relaxed">agarwal.akshay003@gmail.com</p>
                                <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs mt-4">PHONE</h2>
                                <p className="leading-relaxed">204-869-8510</p>
                        </div>
                    </div>
                </div>
                <form className="lg:w-1/3 md:w-1/2 bg-white flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0" onSubmit={sendEmail}>
                    <h2 className="mb-2 lg:mb-4 text-center text-xl lg:text-3xl font-bold text-gray-700">Contact Me 📱</h2>
                    <p className="leading-relaxed mb-5 text-gray-600">Get in touch with me today. Feel free to ask me anything.</p>
                    <div className="relative mb-4">
                        <label htmlFor="name" className="leading-7 text-sm text-gray-600">Name</label>
                        <input type="text" id="name" name="name" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
                    </div>
                    <div className="relative mb-4">
                        <label htmlFor="email" className="leading-7 text-sm text-gray-600">Email</label>
                        <input type="email" id="email" name="email" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
                    </div>
                    <div className="relative mb-4">
                        <label htmlFor="subject" className="leading-7 text-sm text-gray-600">Subject</label>
                        <input type="subject" id="subject" name="subject" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
                    </div>
                    <div className="relative mb-4">
                        <label htmlFor="message" className="leading-7 text-sm text-gray-600">Message</label>
                        <textarea id="message" name="message" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
                    </div>
                    <button className="text-sm md:text-base text-gray-800 font-semibold px-4 py-2 rounded-lg shadow bg-gradient-to-r hover:from-blue-700 hover:to-purple-500 hover:text-white">🤙 Get in Touch</button>
                </form>
            </div>
        </section>
    )
}