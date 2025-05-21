import aboutBG from '../images/bg3.jpg'
import test from '../images/side-view-female-tailor-measuring-male-clients-shirt.jpg';
import test2 from '../images/G-right.jpg'
export default function About() {
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
        </div>
    )
}