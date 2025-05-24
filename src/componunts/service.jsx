import React, { useState } from 'react';
import aboutBG from '../images/bg3.jpg'
import { Link, useLocation } from 'react-router-dom';
import gridLeftImg from '../images/G-left.jpg';
import bg from '../images/BG-2.png';

const serviceList = [
    { id: 1, img: gridLeftImg, Title: "Custom Men’s Garment Manufacturing", SubTitle: "Crafting precision-tailored apparel for every men’s fashion need.", Content: "We specialize in manufacturing a wide variety of men’s clothing including formal shirts, casual wear, and corporate uniforms. Every garment is produced with attention to detail, ensuring excellent fit, durability, and premium finish." },
    { id: 2, img: gridLeftImg, Title: "Private Label Production", SubTitle: "our brand, our craftsmanship.", Content: "We offer full-service private label manufacturing for brands looking to establish or grow their identity. From fabric selection to custom labeling and packaging, we ensure your brand stands out in the market." },
    { id: 3, img: gridLeftImg, Title: "Sample Development & Prototyping", SubTitle: "Your vision, visualized to perfection.", Content: "Before going into mass production, we help you create precise samples that match your design specifications. Our prototyping process allows for testing, fitting, and adjustments to ensure everything is perfect." },
    { id: 4, img: gridLeftImg, Title: "Bulk Order Production", SubTitle: "Scalable solutions with uncompromised quality.", Content: "We efficiently manage large-scale garment production while maintaining top-notch quality control. Whether it's a small batch or thousands of units, we deliver consistent results on time." },
    { id: 5, img: gridLeftImg, Title: "Global Shipping & Export Management", SubTitle: "From our factory floor to your global doorstep.", Content: "Our export operations follow international shipping standards and compliance protocols. We handle all logistics, packaging, and documentation — ensuring smooth delivery to your destination." },
];

export default function Service() {
    const [selectedItem, setSelectedItem] = useState(serviceList[0]); // default first item selected
    const location = useLocation();
    const isHome = location.pathname === "/";

    const handleView = (id) => {
        const found = serviceList.find(item => item.id === id);
        if (found) setSelectedItem(found);
    };

    const [openId, setOpenId] = useState(null);
    const [isOpen, setIsOpen] = useState(false);
    const toggleContent = (id) => {
        if (openId === id) {
            setOpenId(null); // close if clicked again
        } else {
            setOpenId(id); // open clicked item
        }
        setIsOpen(openId == id);
    };
    return (
        <div>
            {isHome ? (
                <section
                    className="text-gray-600 body-font max-w-[1440px] m-auto"
                    style={{
                        backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.8), rgba(255, 255, 255, 0.8)), url(${bg})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        backgroundAttachment: "fixed",
                        backgroundRepeat: 'no-repeat',
                    }}
                >
                    <div className="container px-5 py-24 mx-auto">
                        <div className="flex flex-wrap -m-4 gap-y-[100px]">
                            <div className="xl:w-1/3 md:w-1/2 p-4">
                                <div className="homeService p-6 rounded-lg">
                                    <h3 className="tracking-widest text-[#f97316] text-2xl font-semibold pl-[100px] mb-4 title-font relative titleNames">Our Service</h3>
                                    <h2 className="text-4xl text-gray-900 font-medium title-font mb-6">Our Core Services</h2>
                                    <p className="leading-relaxed text-base mb-8">At Girish Exports, we take pride in delivering high-quality, customized men’s garments to clients across the globe. Our core services are designed to provide end-to-end solutions — from initial concept to final shipment — ensuring your brand receives the perfect product every time.</p>
                                    <button type="button" className="text-lg text-[#eb866b] hover:text-white border border-[#eb866b] focus:ring-4 focus:outline-none focus:ring-[#eb866b] font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-[#eb866b] dark:text-[#eb866b] dark:hover:text-white dark:hover:bg-[#eb866b] dark:focus:ring-[#eb866b]">
                                        <Link to="/services">All Service</Link>
                                    </button>
                                </div>
                            </div>
                            {serviceList.map((e) => (
                                <div key={e.id} className="homeServiceCard xl:w-1/3 md:w-1/2 p-6">
                                    <div
                                        className="card_Container relative p-4 max-h-[450px] min-h-[400px]"
                                        style={{
                                            backgroundImage: `url(${e.img})`,
                                            backgroundSize: "cover",
                                            backgroundPosition: "center",
                                            borderRadius: "250px 250px 0 0 "
                                        }}
                                    >
                                        <div className="serviceContainers hover:bg-[#f97316] transition-colors duration-500 hover:text-white absolute p-6 text-center rounded-lg bg-[#fff] shadow-md w-[80%] bottom-[-50px] left-[10%]">
                                            <h2 className="text-lg text-center font-medium title-font mb-4">{e.Title}</h2>
                                            <p className="leading-relaxed text-base mb-4">{e.Content}</p>
                                            {!isHome && (
                                                <span
                                                    onClick={() => handleView(e.id)}
                                                    className="cursor-pointer text-indigo-600 hover:underline"
                                                >
                                                    Read More
                                                </span>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
                // )}
            ) : (
                <div>
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
                            <div className="justify-center left-0 absolute flex mb-16 md:mb-0 items-center w-full">
                                <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">Services</h1>
                            </div>
                        </div>
                    </section>


                    <section className="text-gray-600 body-font " style={{
                        backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.8), rgba(255, 255, 255, 0.8)), url(${bg})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        backgroundAttachment: "fixed",
                        backgroundRepeat: 'no-repeat',
                    }}>
                        <div className="container px-5 py-24 mx-auto flex flex-wrap max-w-[1200px]">
                            <div className="flex flex-wrap justify-around w-full relative items-center">
                                <div className="lg:w-[40%] md:w-1/2 md:pr-10 md:py-6 relative">
                                    {serviceList.map((e) => (
                                        <div
                                            key={e.id}
                                            className={`flex bg-white pt-2 relative pb-12 cursor-pointer ${selectedItem.id === e.id ? 'serviceActive rounded' : ''}`}
                                            onClick={() => handleView(e.id)}
                                        >
                                            <div className="h-full w-10 absolute inset-0 flex items-center justify-center">
                                                <div className="h-full w-1 bg-gray-200 pointer-events-none"></div>
                                            </div>
                                            <div className="flex-shrink-0 w-10 h-10 rounded-full bg-indigo-500 inline-flex items-center justify-center text-white relative z-10">
                                                <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                                                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                                                </svg>
                                            </div>
                                            <div className="flex-grow pl-4">
                                                <h2 className="font-medium title-font text-xl mb-1 tracking-wider">{e.Title}</h2>
                                                <p className="leading-relaxed text-lg">{selectedItem.id === e.id && e.SubTitle}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                                <div className="lg:w-[60%] relative md:w-1/2 md:py-6 md:px-6 rounded">
                                    <div className='shadow-lg p-8 rounded-lg sticky top-[100px]'>
                                        <h1 className='text-3xl mb-8'>{selectedItem.Title}</h1>
                                        <div>
                                            <div><img src={selectedItem.img} alt="" /></div>
                                            <h2 className='mt-4 mb-6 font-semibold text-2xl '>{selectedItem.SubTitle}</h2>
                                            <p className=''>{selectedItem.Content}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section class="text-gray-600 body-font" 
                        style={{
                        backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.8), rgba(255, 255, 255, 0.8)), url(${bg})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        backgroundAttachment: "fixed",
                        backgroundRepeat: 'no-repeat',
                    }}
                    >
                        <div class="container border border-[#000] mb-5 w-3/4 rounded-xl mx-auto flex flex-wrap">

                            {serviceList.map((e) => (
                                <div class="flex relative py-3 sm:items-center w-full mx-auto "style={{borderBottom:"1px solid"}}>
                                    <div class="flex-grow md:pl-8 pl-6 flex items-flex-start flex-col sm:flex-row">
                                        <div class="flex-grow sm:pl-6 mt-6 sm:mt-0" onClick={(() => toggleContent(e.id))}>
                                            <h2 class="font-medium title-font text-gray-900 mb-1 text-2xl" 
                                            style={{
                                                color : isOpen ? "#" : "#",
                                            }}
                                            >{e.Title}</h2>
                                            <h3 class="leading-relaxed text-xl font-medium mb-3">{e.SubTitle}</h3>
                                            <p>{openId === e.id && e.Content}</p>
                                        </div>
                                    </div>
                                </div>

                            ))}
                        </div>
                    </section>
                </div>
            )}
        </div>
    );
}
