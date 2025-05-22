import aboutBG from '../images/bg3.jpg'
import test from '../images/side-view-female-tailor-measuring-male-clients-shirt.jpg';
import test2 from '../images/G-right.jpg'

import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';

import bg from '../images/BG-2.png'; 

export default function About() {
    const { ref, inView } = useInView({
        triggerOnce: true, // only animate once
        threshold: 0.5,     // 50% of the element is visible
    })
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
                    <div className="lg:w-2/3  absolute md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                        <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">About Us</h1>
                        <p className="mb-8 leading-relaxed w-1/2">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Blanditiis quo ipsam fugiat. Architecto magnam, ut atque odio, minus corrupti maiores accusamus exercitationem et nam quas cupiditate voluptates asperiores dolor dolore!</p>
                    </div>
                </div>
            </section>

            <section class="text-gray-600 body-font max-w-[1440px] m-auto">
                <div class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
                    <div class="lg:w-1/2 md:w-1/2 flex flex-col md:items-start md:text-left items-center text-center">
                        <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">Before they sold out
                        </h1>
                        <p class="mb-8 leading-relaxed">Copper mug try-hard pitchfork pour-over freegan heirloom neutra air plant cold-pressed tacos poke beard tote bag. Heirloom echo park mlkshk tote bag selvage hot chicken authentic tumeric truffaut hexagon try-hard chambray.</p>
                        <div class="flex justify-center">
                            <button class="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Button</button>
                            <button class="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">Button</button>
                        </div>
                    </div>
                    <div class=" p-8 lg:w-1/2 md:w-1/2 w-5/6 mb-10 md:mb-0">
                        <div className="grid grid-cols-2 grid-rows-3 gap-6 ">
                            <div className='row-span-2'><img src={test} className='w-full h-full rounded-xl' alt="" /></div>
                            <div className='row-span-1 row-start-3 col-start-1'><img src={test2} className='rounded-xl w-full h-full' alt="" /></div>
                            <div className='row-span-1 row-start-1 col-start-2'><img src={test2} className='rounded-xl w-full h-full' alt="" /></div>
                            <div className='row-span-2 row-start-2 col-start-2'><img src={test} className='w-full rounded-xl h-full' alt="" /></div>
                        </div>

                    </div>
                </div>
            </section>

            <section class="text-gray-600 body-font bg-[#261606] mt-16 mb-6">
                <div className='max-w-[1440px] py-16 relative m-auto'>
                    <div class="flex flex-wrap  absolute top-[-130px] -m-4 p-4 px-10 w-[90%] left-[5%] m-auto ">
                        <div class="p-4 px-6 md:w-1/2 w-full">
                            <div class="h-full aboutBoxContainer flex bg-white p-4 rounded items-start ">
                                <div className='w-1/6 p-2 pt-3'>
                                    <i class="fa fa-bullseye text-5xl text-[#eb866b]" aria-hidden="true"></i>
                                </div>
                                <div className='w-5/6'>
                                    <h2 className="text-2xl mb-2 font-semibold text-black">Our Vision & Mission</h2>
                                    <p className="leading-relaxed text-md mb-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum rem quisquam doloremque, labore incidunt provident nobis ipsam, reiciendis atque quibusdam nulla officia culpa tempore</p>
                                </div>
                            </div>
                        </div>
                        <div class="p-4 px-6 md:w-1/2 w-full">
                            <div class="h-full flex bg-[#eb866b] aboutBoxContainer2 shadow-xl p-4 rounded items-start ">
                                <div className='w-1/6 p-2 pt-3'>
                                    <i class="fa fa-bullseye text-white text-5xl" aria-hidden="true"></i>
                                </div>
                                <div className='w-5/6'>
                                    <h2 className="text-2xl mb-2 text-white font-bold">Our Goals</h2>
                                    <p className="leading-relaxed mb-2 text-white">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id velit explicabo quae sunt veniam, iusto perferendis consectetur veritatis ipsa qui laudantium.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="container px-5 py-24 mx-auto">
                        <div class="flex flex-wrap justify-center -m-4 text-center">
                            <div class="p-4 sm:w-1/4 w-1/2 ">
                                <div className='flex gap-1 justify-center items-center'>
                                    <h2 ref={ref} class="title-font font-medium sm:text-4xl text-3xl inline-block text-white mb-1">
                                        {inView ? <CountUp end={1800} duration={2} /> : '0'}
                                    </h2>
                                    <span className='text-2xl font-medium text-[#eb866b]'>+</span>
                                </div>
                                <p class="leading-relaxed text-white">Project Completed</p>
                            </div>
                            <div class="p-4 sm:w-1/4 w-1/2">
                                <div className='flex gap-1 justify-center items-center'>
                                    <h2 class="title-font font-medium sm:text-4xl text-3xl inline-block text-white mb-1">
                                        {inView ? <CountUp end={16} duration={3} /> : '0'}
                                    </h2>
                                    <span className='text-2xl font-medium text-[#eb866b]'>+</span>
                                </div>
                                <p class="leading-relaxed text-white">Years Of Experience</p>
                            </div>
                            <div class="p-4 sm:w-1/4 w-1/2">
                                <div className='flex gap-1 justify-center items-center'>
                                    <h2 class="title-font font-medium sm:text-4xl text-3xl inline-block text-white mb-1">
                                        {inView ? <CountUp end={10} duration={2} /> : '0'}
                                    </h2>
                                    <span className='text-2xl font-medium text-[#eb866b]'>+</span>
                                </div>
                                <p class="leading-relaxed text-white">Desigers</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section class="text-gray-600 body-font" style={{
            backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.8), rgba(255, 255, 255, 0.8)), url(${bg})`,
            backgroundSize: 'cover', 
            backgroundPosition: 'center', 
            backgroundAttachment:"fixed",
            backgroundRepeat:'no-repeat',
            }}>
                <div class="container px-5 py-24 mx-auto">
                    <div class="flex flex-col text-center w-full mb-20">
                        <h1 class="text-2xl font-medium title-font howwework  mb-4 text-gray-900 relative">
                            <span className='relative text-[#f97316]'>OUR TEAM</span>
                            </h1>
                        <p class="lg:w-2/3 mx-auto leading-relaxed text-base">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellat, magnam esse sit distinctio nesciunt suscipit.</p>
                    </div>
                    <div class="flex flex-wrap -m-4">
                        <div class="p-4 lg:w-1/4 md:w-1/2">
                            <div class="h-full flex flex-col items-center relative text-center">
                                <img alt="team" class="flex-shrink-0 rounded-lg w-full h-[400px] object-cover object-center mb-4" src="https://dummyimage.com/200x400"/>
                                    <div class="w-[80%] left-[10%] py-2 mb-2 rounded-xl absolute bottom-[30px] bg-white ">
                                        <h2 class="title-font font-medium text-lg text-gray-900">Kumar</h2>
                                        <h3 class="text-gray-500 ">Founder</h3>
                                        <div className='overlay'></div>
                                    </div>
                            </div>
                        </div>
                        <div class="p-4 lg:w-1/4 md:w-1/2">
                            <div class="h-full flex flex-col items-center relative text-center">
                                <img alt="team" class="flex-shrink-0 rounded-lg w-full h-[400px] object-cover object-center mb-4" src="https://dummyimage.com/200x400"/>
                                    <div class="w-[80%] left-[10%] py-2 mb-2 rounded-xl absolute bottom-[30px] bg-white ">
                                        <h2 class="title-font font-medium text-lg text-gray-900">Manikandan</h2>
                                        <h3 class="text-gray-500 ">Manager</h3>
                                        <div className='overlay'></div>
                                    </div>
                            </div>
                        </div>
                        <div class="p-4 lg:w-1/4 md:w-1/2">
                            <div class="h-full flex flex-col items-center relative text-center">
                                <img alt="team" class="flex-shrink-0 rounded-lg w-full h-[400px] object-cover object-center mb-4" src="https://dummyimage.com/200x400"/>
                                    <div class="w-[80%] left-[10%] py-2 mb-2 rounded-xl absolute bottom-[30px] bg-white ">
                                        <h2 class="title-font font-medium text-lg text-gray-900">Manu</h2>
                                        <h3 class="text-gray-500 ">Accounts</h3>
                                        <div className='overlay'></div>
                                    </div>
                            </div>
                        </div>
                        <div class="p-4 lg:w-1/4 md:w-1/2">
                            <div class="h-full flex flex-col items-center relative text-center">
                                <img alt="team" class="flex-shrink-0 rounded-lg w-full h-[400px] object-cover object-center mb-4" src="https://dummyimage.com/200x400"/>
                                    <div class="w-[80%] left-[10%] py-2 mb-2 rounded-xl absolute bottom-[30px] bg-white ">
                                        <h2 class="title-font font-medium text-lg text-gray-900">Sunil Kumar</h2>
                                        <h3 class="text-gray-500 ">Mercandiser</h3>
                                        <div className='overlay'></div>
                                    </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}