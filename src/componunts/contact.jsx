import React from 'react'
import aboutBG from '../images/bg3.jpg'
export default function Contact() {
  return (
    <div className="">
      <section className="text-white body-font relative mb-[50px] w-full" style={{
        backgroundImage: ` url(${aboutBG})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "500px",
        transition: "background-image 1s ease-in-out",
      }}>
        <div className="overlay absolute w-full h-full z-0" style={{
          opacity: "0.92",
          backgroundColor: "#241405ba",
          transition: "background 0.3s, border-radius 0.3s, opacity 0.3s"
        }}></div>
        <div className="h-full w-full max-w-[1440px] container a mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div className="lg:w-2/3 lg:pl-[150px] absolute left-[35%] md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center mx-auto">
            <h1 className="text-center title-font sm:text-5xl text-4xl mb-4 font-medium text-white">Contact</h1>
          </div>
        </div>
      </section>
      <section class="text-gray-600 body-font max-w-[1440]">
        <div class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div class="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">Get In Touch
            </h1>
            <p class="mb-8 leading-relaxed">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veritatis cumque quam ducimus cum fuga doloremque qui molestias ipsa</p>
            <div class="flex justify-center gap-5 items-center mb-6">
              <div className=''>
                <i class="fa fa-phone text-5xl" aria-hidden="true"></i>
              </div>
              <div className=''>
                <h3 className='text-3xl'>Phone</h3>
                <p className='text-lg'>+91 1234567890</p>
              </div>
            </div>
            <div class="flex justify-center gap-5 items-center mb-6">
              <div className=''>
                <i class="fa fa-phone text-5xl" aria-hidden="true"></i>
              </div>
              <div className=''>
                <h3 className='text-3xl'>Email</h3>
                <p className='text-lg'>text@text.com</p>
              </div>
            </div>
            <div class="flex justify-center gap-5 items-center">
              <div className=''>
                <i class="fa fa-envelope text-5xl" aria-hidden="true"></i>
              </div>
              <div className=''>
                <h3 className='text-3xl'>Address</h3>
                <p className='text-lg'>+91 1234567890</p>
              </div>
            </div>
          </div>
          <div class=" lg:w-1/2 md:w-1/2 w-5/6">
            <img class="object-cover object-center rounded" alt="hero" src="https://dummyimage.com/720x600" />
          </div>
        </div>
      </section>
    </div>
  )
}
