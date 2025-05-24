import React from 'react'

import aboutBG from '../images/bg3.jpg'

import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png',
  iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
});


export default function Contact() {
  const position = [12.871441, 77.443466]; // Coordinates for your location  
  return (
    <div className="">
      <section className="text-white body-font relative w-full" style={{
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
          <div className="w-full absolute left-0 justify-center flex md:items-start md:text-left mb-16 md:mb-0 items-center text-center mx-auto">
            <h1 className="text-center title-font sm:text-5xl text-4xl mb-4 font-medium text-white">Contact</h1>
          </div>
        </div>
      </section>
      <section class="text-gray-600 body-font max-w-[1440] bg-[#effdfa]">
        <div class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div class="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">Get In Touch
            </h1>
            <p class="mb-8 leading-relaxed">We’d love to hear from you! Whether you have a question, need a quote, or want to discuss your next garment order, our team is here to help. Reach out to us anytime — and we’ll get back to you as soon as possible.</p>
            <div class="flex justify-center gap-6  items-center mb-6">
              <div className=''>
                <i class="fa fa-phone text-5xl text-[#eb866b]" aria-hidden="true"></i>
              </div>
              <div className=''>
                <h3 className='text-3xl'>Phone</h3>
                <p className='text-lg'>+91 1234567890</p>
              </div>
            </div>
            <div class="flex justify-center gap-6 items-center mb-6">
              <div className=''>
                <i class="fa fa-envelope text-4xl text-[#eb866b]" aria-hidden="true"></i>
              </div>
              <div className=''>
                <h3 className='text-3xl'>Email</h3>
                <p className='text-lg'>text@text.com</p>
              </div>
            </div>
            <div class="flex justify-center gap-6 items-center">
              <div className=''>
                <i class="fa fa-map-marker text-5xl text-[#eb866b]" aria-hidden="true"></i>
              </div>
              <div className=''>
                <h3 className='text-3xl'>Address</h3>
                <p className='text-lg'>NO. 20 KIADB INDUSTREAL AREA 1ST CROSS 1ST PHASE, Kumbalgodu Industrial Area, Kengeri Hobli, Bengaluru, Karnataka 560060</p>
              </div>
            </div>
          </div>
          <div class=" lg:w-1/2 md:w-1/2 w-5/6">
            <div style={{ height: '500px', width: '100%' }}>
              <MapContainer center={position} zoom={16} scrollWheelZoom={false} style={{ height: '100%', width: '100%' }}>
                <TileLayer
                  attribution='&copy; <a href="https://carto.com/">CartoDB</a> contributors'
                  url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png"
                />
                <Marker position={position}>
                  <Popup>
                    No 20-B, 1st Cross, 1st Phase, KIADB Industrial Area, Kumbalagudu, 560074
                  </Popup>
                </Marker>
              </MapContainer>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
