import { useEffect, useState } from "react";
import bgImg1 from '../images/bg1.jpg';
import bgImg2 from '../images/bg2.jpg';
import bgImg3 from '../images/bg3.jpg';
import arrow from '../images/arrow.png';
import meeting from '../images/talk.png';
import gridLeftImg from '../images/G-left.jpg'
import gridRightImg from '../images/G-right.jpg'
import Service from "./service";
import Slider from "react-slick";
// 
import parkavenue from '../images/clients/logo_parkavenue.webp';
import raymond from '../images/clients/logo_raymond.png';
import uspa from '../images/clients/logo_uspa.png';
import arrow_logo from '../images/clients/Logo_Arrow.webp';
import dhg from '../images/clients/logo_dhg.png';
import { Link } from "react-router-dom";

const headingColor = "#eb866b";
const Images = [bgImg1, bgImg2, bgImg3];
const clientImg = [parkavenue, raymond, uspa, arrow_logo, dhg];
export default function Home() {
    const [currentSlide, setCurrentSlide] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentSlide((indexVal) =>
                indexVal === Images.length - 1 ? 0 : indexVal + 1
            );
        }, 5000);

        return () => clearInterval(timer); // clean up
    }, []);

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4, // show 5 images at a time
        slidesToScroll: 1, // scroll one by one
        autoplay: true,            // ✅ enable auto slide
        autoplaySpeed: 1000,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                },
            },
            {
                breakpoint: 640,
                settings: {
                    slidesToShow: 2,
                },
            },
        ],
    };

    return (
        <div classNameName="mt-[100px] ">
            <section className="text-white body-font mb-[50px]"
                    style={{
                        backgroundImage: `url(${Images[currentSlide]})`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        height: "700px",
                        transition: "background-image 1s ease-in-out",
                    }}
                    >
                <div className="h-full w-full container max-w-[1440px] mx-auto flex px-5 py-24 md:flex-row flex-col items-center"
                    >
                    <div className="lg:w-2/3 md:w-1/2 lg:pr-24 md:pr-16 lg:pl-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                        <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">Before they sold out
                            <br className="hidden lg:inline-block" />readymade gluten
                        </h1>
                        <p className="mb-8 leading-relaxed">Copper mug try-hard pitchfork pour-over freegan heirloom neutra air plant cold-pressed tacos poke beard tote bag. Heirloom echo park mlkshk tote bag selvage hot chicken authentic tumeric truffaut hexagon try-hard chambray.</p>
                        <div className="flex justify-center">
                            <button className="inline-flex text-white bg-red-500 border-0 py-2 px-6 focus:outline-none hover:bg-red-600 rounded text-lg">Button</button>
                            <button className="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">Button</button>
                        </div>
                    </div>

                </div>
            </section>

            {/* <section className="text-gray-600 body-font">
                <div className="container px-5 py-24 mx-auto">
                    <div className="flex flex-wrap -m-4">
                        <div className="p-4 md:w-1/3">
                            <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                                <img className="lg:h-48 md:h-36 w-full object-cover object-center" src="https://dummyimage.com/720x400" alt="blog" />
                                <div className="p-6">
                                    <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">Title</h2>
                                    <h1 className="title-font text-lg font-medium text-gray-900 mb-3">The Name</h1>
                                    <p className="leading-relaxed mb-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis sapiente pariatur, nihil fugiat accusamus illum officia nostrum fuga maxime suscipit. Nulla debitis neque officia</p>
                                    <div className="flex items-center justify-center flex-wrap ">
                                        <a className="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0">Learn More
                                            <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                                <path d="M5 12h14"></path>
                                                <path d="M12 5l7 7-7 7"></path>
                                            </svg>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="p-4 md:w-1/3">
                            <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                                <img className="lg:h-48 md:h-36 w-full object-cover object-center" src="https://dummyimage.com/720x400" alt="blog" />
                                <div className="p-6">
                                    <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">Title</h2>
                                    <h1 className="title-font text-lg font-medium text-gray-900 mb-3">The Name</h1>
                                    <p className="leading-relaxed mb-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis sapiente pariatur, nihil fugiat accusamus illum officia nostrum fuga maxime suscipit. Nulla debitis neque officia</p>
                                    <div className="flex items-center justify-center flex-wrap ">
                                        <a className="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0">Learn More
                                            <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                                <path d="M5 12h14"></path>
                                                <path d="M12 5l7 7-7 7"></path>
                                            </svg>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="p-4 md:w-1/3">
                            <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                                <img className="lg:h-48 md:h-36 w-full object-cover object-center" src="https://dummyimage.com/720x400" alt="blog" />
                                <div className="p-6">
                                    <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">Title</h2>
                                    <h1 className="title-font text-lg font-medium text-gray-900 mb-3">The Name</h1>
                                    <p className="leading-relaxed mb-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis sapiente pariatur, nihil fugiat accusamus illum officia nostrum fuga maxime suscipit. Nulla debitis neque officia</p>
                                    <div className="flex items-center justify-center flex-wrap ">
                                        <a className="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0">Learn More
                                            <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                                <path d="M5 12h14"></path>
                                                <path d="M12 5l7 7-7 7"></path>
                                            </svg>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section> */}

            <div className="max-w-7xl mx-auto px-4 py-12 grid md:grid-cols-2 gap-16 items-center mb-24 max-width-[1440px]">
                {/* <!-- Left Side --> */}
                <div>
                    <p className="text-orange-600 font-semibold mb-2">About Fashly</p>
                    <h2 className="text-3xl font-bold mb-4">We Have 15 Years Of Experiences In Fashion Designer Service</h2>
                    <p className="text-gray-600 mb-6">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.
                    </p>
                    <div className="relative">
                        <img src={gridLeftImg} alt="Team working" className="rounded-xl w-full p- object-cover" />
                        <div className="relative max-w-lg m-auto">
                            <div style={{

                            }} className=" absolute bottom-[-30px] left-[] bg-white shadow-lg rounded-lg p-4 pl-6  max-w-lg">
                                <p className="gridBefore text-sm italic text-gray-600 pl-4 mb-4 ;    ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa architecto, autem quia asperiores temporibus amet harum. Perferendis dolore nam autem quo repudiandae delectus quas? cumque nesciunt facere.</p>
                                <p className="text-sm font-medium text-gray-800">Gracie Potts</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* <!-- Right Side --> */}
                <div>
                    <div className="p-6">
                        <img src={gridRightImg} alt="Fashion Sketching" className="rounded-xl mb-6 w-full object-cover" />
                    </div>
                    <div className="flex items-center gap-6 mb-6">
                        <div>
                            <h3 className="text-2xl font-bold text-red-500">1,485+</h3>
                            <p className="text-sm text-gray-600">Satisfied Clients</p>
                        </div>
                        <div className="border-l pl-6">
                            <p className="text-gray-600 text-sm">Accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum.</p>
                        </div>
                    </div>
                    <div className="flex items-center gap-6 mb-6">
                        <div>
                            <h3 className="text-2xl font-bold text-orange-500">2,560+</h3>
                            <p className="text-sm text-gray-600">Projects Completed</p>
                        </div>
                        <div className="border-l pl-6">
                            <p className="text-gray-600 text-sm">Perspiciatis unde omnis iste natus error voluptatem accusantium doloremque laudantium.</p>
                        </div>
                    </div>
                    <div className="flex items-center gap-4">
                        <button type="button" class="text-lg text-[#eb866b] hover:text-white border border-[#eb866b] hover:[#eb866b] focus:ring-4 focus:outline-none focus:ring-[#eb866b] font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-[#eb866b] dark:text-[#eb866b] dark:hover:text-white dark:hover:bg-[#eb866b] dark:focus:[#eb866b]">
                            <Link to="/about" >More About Us</Link>
                            </button>

                    </div>
                </div>
            </div>

            <Service />
            <div className="bg-[#f8f9fb]">
                <section class="text-gray-600 py-8 body-font mt-[50px] max-w-[1440px] m-auto" >
                    <div class="flex flex-col text-center w-full mb-6">
                        <h2 class="text-md text-[#f97316] howwework tracking-widest font-medium title-font mb-4">
                            <span className="relative text-2xl left-[30px]">Our process</span>
                        </h2>
                        <h1 class="text-5xl font-medium title-font mb-6 text-gray-900">How We Works</h1>
                        <p class="lg:w-2/3 mx-auto leading-relaxed text-lg">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Qui corrupti temporibus esse tenetur consequatur voluptatibus perferendis voluptatum, illum voluptas distinctio, quam iste dignissimos veritatis at illo? Assumenda, sed? Pariatur, labore.</p>
                    </div>
                    <div class="container px-5 py-16 mx-auto max-width-[1440px]">
                        <div class="flex flex-wrap -mx-4 -mb-10 justify-around relative text-center">
                            <div class="sm:w-1/4 mb-10 px-4">
                                <div class="rounded-lg serviceIcon inline-block overflow-hidden p-8 shadow-2xl bg-[#f97316]">
                                    <i class="fa fa-calendar" style={{ fontSize: "45px", color: "white" }} aria-hidden="true"></i>
                                </div>
                                <h2 class="title-font text-2xl font-medium text-gray-900 mt-6 mb-3">Make Appointment</h2>
                                <p class="leading-relaxed text-base">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eligendi, veniam! Tempora repudiandae provident quidem ab iste.</p>
                            </div>
                            <div className="arrow1 arrow absolute w-[200px] left-[26%] top-[20px]">
                                <img src={arrow} alt="" />
                            </div>
                            <div class="sm:w-1/4 mb-10 px-4">
                                <div class="rounded-lg inline-block overflow-hidden p-6 shadow-2xl">
                                    <img src={meeting} style={{ width: "50px" }} alt="" />
                                </div>
                                <h2 class="title-font text-2xl font-medium text-gray-900 mt-6 mb-3">Meeting</h2>
                                <p class="leading-relaxed text-base">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eligendi, veniam! Tempora repudiandae provident quidem ab iste.</p>
                            </div>
                            <div className="arrow2 arrow absolute w-[200px] left-[60%] top-[20px]" >
                                <img src={arrow} alt="" />
                            </div>
                            <div class="sm:w-1/4 mb-10 px-4">
                                <div class="rounded-lg serviceIcon inline-block overflow-hidden p-8 shadow-2xl bg-[#f97316]">
                                    <i class="fa fa-check" style={{ fontSize: "45px", color: "white" }} aria-hidden="true"></i>
                                </div>
                                <h2 class="title-font text-2xl font-medium text-gray-900 mt-6 mb-3">Enjoy Your Fashon</h2>
                                <p class="leading-relaxed text-base">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eligendi, veniam! Tempora repudiandae provident quidem ab iste.</p>
                            </div>
                        </div>
                    </div>
                </section>
            </div>

            <section class="text-gray-600 body-font bg-[#e7e8e9] p-8">
                <div class="flex flex-col text-center w-full">
                    <h2 class="text-md text-[#f97316] howwework tracking-widest font-medium title-font mb-4">
                        <span className="relative text-2xl left-[30px]">Our Clients</span>
                    </h2>
                </div>
                <div class="container px-5 py-2 mb-20 mx-auto">
                    <Slider {...settings}>
                        {clientImg.map((img, index) => (
                            <div key={index} className="p-4">
                                <div className="rounded overflow-hidden">
                                    <img src={img} alt={`carousel-${index}`} className="w-full h-auto object-cover rounded" />
                                </div>
                            </div>
                        ))}
                    </Slider>
                </div>
            </section>
        </div>

    )
}