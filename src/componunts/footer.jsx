import React from 'react'
import { Link } from 'react-router-dom'

export default function Footer() {
    return (
        <div className='bg-[#271606]'>
            <footer class=" text-white body-font max-w-[1440px] m-auto">
                <div class="container px-5 py-24 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col" >
                    <div class="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left">
                        <a class="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full" viewBox="0 0 24 24">
                                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
                            </svg>
                            <span class="ml-3 text-xl">Tailblocks</span>
                        </a>
                        <p class="mt-2 text-sm text-gray-500">Air plant banjo lyft occupy retro adaptogen indego</p>
                    </div>
                    <div class="flex-grow justify-end flex flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left text-center">
                        <div class="lg:w-1/4 md:w-1/4 w-full px-4">
                            <h2 class="title-font font-medium text-white tracking-widest text-sm mb-3">Page</h2>
                            <nav class="list-none mb-10">
                                <li>
                                    <Link to="/" class="text-[#A7A7A7]">Home</Link>
                                </li>
                                <li>
                                    <Link to="/about" class="text-[#A7A7A7]">About Us</Link>
                                </li>
                                <li>
                                    <Link to="/services" class="text-[#A7A7A7]">Services</Link>
                                </li>
                                <li>
                                    <Link to="/contact" class="text-[#A7A7A7]">Contact Us</Link>
                                </li>
                            </nav>
                        </div>
                        <div class="lg:w-1/4 md:w-1/2 w-full px-4">
                            <h2 class="title-font font-medium text-white tracking-widest text-sm mb-3">Contact</h2>
                            <nav class="list-none mb-10">
                                <li>
                                    <a class="text-[#A7A7A7]">Phone: +91 1234567890</a>
                                </li>
                                <li>
                                    <a class="text-[#A7A7A7]">Email : test@test.com</a>
                                </li>
                            </nav>
                        </div>
                    </div>
                </div>
                
            </footer>
            <div class="bg-[#190E04]">
                    <div class="container justify-center mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
                        <p class="text-[#A7A7A7]  text-lg text-center sm:text-left">Copyright © 2025 - 
                            <a href="https://twitter.com/knyttneve" rel="noopener noreferrer" class="text-white ml-1" target="_blank">Girish Exports</a>
                        </p>
                    </div>
                </div>            
        </div>
    )
}
