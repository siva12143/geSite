import aboutBG from '../images/bg3.jpg'
import test from '../images/side-view-female-tailor-measuring-male-clients-shirt.jpg';
import test2 from '../images/G-right.jpg'
import gridLeftImg from '../images/G-left.jpg'
import gridRightImg from '../images/G-right.jpg'
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';
import { Link } from 'react-router-dom';
import team1 from '../images/team1.webp'
import team2 from '../images/team2.jpg'
import team3 from '../images/team3.jpg'

import bg from '../images/BG-2.png';

export default function About() {
    const { ref, inView } = useInView({
        triggerOnce: true, // only animate once
        threshold: 0.5,     // 50% of the element is visible
    })
    return (
        <div className="">
            {/* banner */}
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
                    <div className="lg:w-full left-0 absolute flex  md:items-start md:text-left mb-16 md:mb-0 items-center justify-center" >
                        <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">About Us</h1>
                    </div>
                </div>
            </section>

            {/* about us */}
            <div className="aboutPageabout max-w-7xl mx-auto px-4 py-12 grid md:grid-cols-2 gap-16 items-center mb-24 max-width-[1440px]">
                {/* <!-- Left Side --> */}
                <div>
                    <p className="text-orange-600 font-semibold mb-2">About Fashly</p>
                    <h2 className="text-3xl font-bold mb-4">We Have 15+ Years of Experience in the Garment Industry</h2>
                    <p className="text-gray-600 mb-6">
                        At Girish Exports, we bring over 15 years of dedicated experience in men’s garment manufacturing. Our journey has been defined by a commitment to quality, craftsmanship, and continuous innovation in the apparel industry.
                    </p>
                    <div className="relative homeAbout">
                        <img src={gridLeftImg} alt="Team working" className="rounded-xl w-full p- object-cover" />
                        <div className="relative max-w-lg m-auto">
                            <div className="content absolute bottom-[-30px] left-[] bg-white shadow-lg rounded-lg p-4 pl-6  max-w-lg">
                                <p className="gridBefore text-sm italic text-gray-600 pl-4 mb-4 ;">With a fully equipped facility and a team of skilled professionals, we produce a wide range of men’s wear that meets international standards. We cater to businesses of all sizes, ensuring each product reflects style, comfort, and reliability.</p>
                                <p className="text-sm font-medium text-gray-800">Girish Exports</p>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <!-- Right Side --> */}
                <div>
                    <div className="p-6">
                        <img src={gridRightImg} alt="Fashion Sketching" className="rounded-xl mb-6 w-full object-cover" />
                    </div>
                    <div className="flex homeAboutRight items-center gap-6 mb-6">
                        <div>
                            <h3 className="text-2xl font-bold text-red-500">1,485+</h3>
                            <p className="text-sm text-gray-600">Satisfied Clients</p>
                        </div>
                        <div className="border-l pl-6">
                            <p className="text-gray-600 text-sm">We’ve earned the trust of clients worldwide through our consistent quality, attention to detail, and on-time delivery.</p>
                        </div>
                    </div>
                    <div className="flex homeAboutRight items-center gap-6 mb-6">
                        <div>
                            <h3 className="text-2xl font-bold text-orange-500">2,560+</h3>
                            <p className="text-sm text-gray-600">Projects Completed</p>
                        </div>
                        <div className="border-l pl-6">
                            <p className="text-gray-600 text-sm">From custom styles to large-scale production, our proven track record showcases our capability to handle diverse and demanding orders with precision.</p>
                        </div>
                    </div>
                </div>
            </div>
            {/* Crafting */}
            <section class="crafting text-gray-600 body-font m-auto mb-[150px]">
                <h1 class="title-font hidden text-center sm:text-4xl text-3xl mb-8 font-medium text-gray-900">Crafting Quality with Every Stitch</h1>

                <div class="container mx-auto flex px-16 py-24 md:flex-row flex-col max-w-[1440px] items-center">
                    <div class="lg:w-1/2 md:w-1/2 flex flex-col md:items-start md:text-left items-center text-center">
                        <h1 class="title-font text-center hidden lg:block  md:block sm:block sm:text-4xl text-3xl mb-8 font-medium text-gray-900">Crafting Quality with Every Stitch</h1>
                        <p class="mb-8 leading-relaxed text-lg">At Girish Exports, we’ve been turning fabric into fashion for over 15 years. Our journey started with a simple goal — to deliver high-quality men’s garments that blend comfort, durability, and timeless style. Every design begins with creativity, backed by deep industry knowledge and a passion for precision. From detailed sketches to final fittings, we ensure excellence in every step of production. Because for us, it’s not just clothing — it’s craftsmanship with purpose.</p>
                    </div>
                    <div class=" p-8 lg:w-1/2 md:w-1/2 w-5/6 mb-10 md:mb-0">

                        <div className="aboutRightImg relative flex justify-end items-center">
                            <div className='w-[350px] h-[450px]'><img src={test} className='w-full h-full rounded-xl' alt="" /></div>
                            <div className='absolute left-[20px] rounded-lg bg-white border border-[#fff] border-[20px] w-[300px] h-[300px]'><img src={test2} style={{ objectFit: 'cover' }} className='rounded-lg w-full h-full' alt="" /></div>
                        </div>

                    </div>
                </div>
            </section>
            {/* Mission & Vision */}
            <section class="text-gray-600 body-font bg-[#261606] mt-24 mb-6">
                <div className='max-w-[1440px] py-16 relative m-auto'>
                    <div class="flex flex-wrap missionVision absolute top-[-130px] -m-4 p-4 px-10 w-[100%] left-[0%] m-auto ">
                        <div class="p-4  md:w-1/3 w-full">
                            <div class="h-full aboutBoxContainer flex bg-white p-4 rounded items-start ">
                                <div className='w-1/6 p-2 pt-3'>
                                    <i class="fa fa-bullseye text-5xl text-[#eb866b]" aria-hidden="true"></i>
                                </div>
                                <div className='w-5/6'>
                                    <h2 className="text-2xl mb-2 font-semibold text-black">Our Vision</h2>
                                    <p className="leading-relaxed text-md mb-2">To be a globally recognized brand in men’s garment manufacturing, known for trust and quality.</p>
                                </div>
                            </div>
                        </div>
                        <div class="p-4 md:w-1/3 w-full">
                            <div class="h-full flex bg-[#eb866b] aboutBoxContainer2 shadow-xl p-4 rounded items-start ">
                                <div className='w-1/6 p-2 pt-3'>
                                    <i class="fa fa-bullseye text-white text-5xl" aria-hidden="true"></i>
                                </div>
                                <div className='w-5/6'>
                                    <h2 className="text-2xl mb-2 text-white font-bold">Our Mission</h2>
                                    <p className="leading-relaxed mb-2 text-white">To deliver premium-quality men’s garments that combine comfort, craftsmanship, and style.</p>
                                </div>
                            </div>
                        </div>
                        <div class="p-4  md:w-1/3 w-full">
                            <div class="h-full aboutBoxContainer flex bg-white p-4 rounded items-start ">
                                <div className='w-1/6 p-2 pt-3'>
                                    <i class="fa fa-bullseye text-5xl text-[#eb866b]" aria-hidden="true"></i>
                                </div>
                                <div className='w-5/6'>
                                    <h2 className="text-2xl mb-2 font-semibold text-black">Our Goal</h2>
                                    <p className="leading-relaxed text-md mb-2">To grow through innovation, meet evolving fashion needs, and build lasting client partnerships.</p>
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
                                        {inView ? <CountUp end={15} duration={3} /> : '0'}
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
            {/* Team */}
            <section class="text-gray-600 body-font" style={{
                backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.8), rgba(255, 255, 255, 0.8)), url(${bg})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundAttachment: "fixed",
                backgroundRepeat: 'no-repeat',
            }}>
                <div class="container px-5 py-24 mx-auto">
                    <div class="flex flex-col text-center w-full mb-20">
                        <h1 class="text-2xl font-medium title-font howwework  mb-4 text-gray-900 relative">
                            <span className='relative text-[#f97316]'>OUR TEAM</span>
                        </h1>
                        <p class="lg:w-2/3 mx-auto leading-relaxed text-base">Behind every well-crafted garment is a team of skilled professionals dedicated to excellence. From designers and tailors to quality controllers and coordinators, our team works with passion, precision, and a shared goal — to deliver the best in men’s fashion, every time.</p>
                    </div>
                    <div class="flex flex-wrap teamCardParent gap-5 justify-around -m-4">
                        <div class="teamCard p-4 lg:w-1/4 md:w-1/2">
                            <div class="h-full flex flex-wrap items-center relative text-center">
                                <div className='TeamImgCont relative w-full border border-[1px] border-[red] h-[400px] rounded-xl'>
                                    <img alt="team" class="flex-shrink-0 rounded-xl w-[100%] bottom-[20px] left-[30px] h-[100%] absolute left-[20px]  object-cover object-center mb-4" src={team1} />
                                </div>
                                <div class="w-full py-2 my-2 rounded-xl bottom-[30px] bg-white ">
                                    <h2 class="title-font font-medium text-2xl text-gray-900">Kumar</h2>
                                    <h3 class="text-[red] text-lg">Founder</h3>
                                </div>
                            </div>
                        </div>
                        <div class="teamCard p-4 lg:w-1/4 md:w-1/2">
                            <div class="h-full flex flex-wrap items-center relative text-center">
                                <div className='TeamImgCont relative w-full border border-[1px] border-[red] h-[400px] rounded-xl'>
                                    <img alt="team" class="flex-shrink-0 rounded-xl w-[100%] bottom-[20px] left-[30px] h-[100%] absolute left-[20px]  object-cover object-center mb-4" src={team2} />
                                </div>
                                <div class="w-full py-2 my-2 rounded-xl bottom-[30px] bg-white ">
                                    <h2 class="title-font font-medium text-2xl text-gray-900">Manikandan</h2>
                                    <h3 class="text-[red] text-lg">Manager</h3>
                                </div>
                            </div>
                        </div>
                        <div class="teamCard p-4 lg:w-1/4 md:w-1/2">
                            <div class="h-full flex flex-wrap justfy-center items-center relative text-center">
                                <div className='TeamImgCont relative w-full border border-[1px] border-[red] h-[400px] rounded-xl'>
                                    <img alt="team" class="flex-shrink-0 rounded-xl w-[100%] bottom-[20px] left-[30px] h-[100%] absolute left-[20px]  object-cover object-center mb-4" src={team3} />
                                </div>
                                <div class=" w-full py-2 my-2 rounded-xl bottom-[30px] bg-white ">
                                    <h2 class="title-font font-medium text-2xl text-gray-900">Manu</h2>
                                    <h3 class="text-[red] text-lg">Accounts</h3>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        </div>
    )
}