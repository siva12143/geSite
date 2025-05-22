import React, { useState } from 'react';
import aboutBG from '../images/bg3.jpg'
import { Link, useLocation } from 'react-router-dom';
import gridLeftImg from '../images/G-left.jpg';
import bg from '../images/BG-2.png';

const serviceList = [
    { id: 1, img: gridLeftImg, Title: "SUBTITLE 1", SubTitle: "Colosseum Roma 1", Content: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cum hic a excepturi facilis voluptas ipsam perferendis ipsum, neque, labore necessitatibus pariatur? Deleniti blanditiis rem repellendus reiciendis atque, et maiores laboriosam              Similique eaque fuga necessitatibus laboriosam aliquam ad enim exercitationem magni est dolore ullam quam quas, itaque odio voluptatem. Iste natus atque quis debitis ratione dignissimos explicabo ad eligendi ut facilis.               Error vel eveniet doloremque necessitatibus sequi. Consequatur similique recusandae molestiae dolorum neque cumque minima vero explicabo, corrupti veritatis, dignissimos laborum doloremque tempora sapiente maxime fuga voluptatibus molestias placeat? Vero, dolorum. Repudiandae esse adipisci sequi recusandae ipsam fugiat facere amet quaerat. Quasi incidunt dolorem dolores neque libero totam harum beatae, saepe nam iure omnis, nisi voluptatum rem? Quia ab perferendis officia. Doloremque facilis soluta veritatis inventore necessitatibus vel molestias. Consequuntur provident, sint vero facere excepturi nihil labore quam tenetur aliquam possimus nisi ea aperiam, perspiciatis nam. Velit incidunt assumenda ea nihil. 11" },
    { id: 2, img: gridLeftImg, Title: "SUBTITLE 2", SubTitle: "Colosseum Roma 2", Content: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cum hic a excepturi facilis voluptas ipsam perferendis ipsum, neque, labore necessitatibus pariatur? Deleniti blanditiis rem repellendus reiciendis atque, et maiores laboriosam              Similique eaque fuga necessitatibus laboriosam aliquam ad enim exercitationem magni est dolore ullam quam quas, itaque odio voluptatem. Iste natus atque quis debitis ratione dignissimos explicabo ad eligendi ut facilis.               Error vel eveniet doloremque necessitatibus sequi. Consequatur similique recusandae molestiae dolorum neque cumque minima vero explicabo, corrupti veritatis, dignissimos laborum doloremque tempora sapiente maxime fuga voluptatibus molestias placeat? Vero, dolorum. Repudiandae esse adipisci sequi recusandae ipsam fugiat facere amet quaerat. Quasi incidunt dolorem dolores neque libero totam harum beatae, saepe nam iure omnis, nisi voluptatum rem? Quia ab perferendis officia. Doloremque facilis soluta veritatis inventore necessitatibus vel molestias. Consequuntur provident, sint vero facere excepturi nihil labore quam tenetur aliquam possimus nisi ea aperiam, perspiciatis nam. Velit incidunt assumenda ea nihil. 22" },
    { id: 3, img: gridLeftImg, Title: "SUBTITLE 3", SubTitle: "Colosseum Roma 3", Content: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cum hic a excepturi facilis voluptas ipsam perferendis ipsum, neque, labore necessitatibus pariatur? Deleniti blanditiis rem repellendus reiciendis atque, et maiores laboriosam              Similique eaque fuga necessitatibus laboriosam aliquam ad enim exercitationem magni est dolore ullam quam quas, itaque odio voluptatem. Iste natus atque quis debitis ratione dignissimos explicabo ad eligendi ut facilis.               Error vel eveniet doloremque necessitatibus sequi. Consequatur similique recusandae molestiae dolorum neque cumque minima vero explicabo, corrupti veritatis, dignissimos laborum doloremque tempora sapiente maxime fuga voluptatibus molestias placeat? Vero, dolorum. Repudiandae esse adipisci sequi recusandae ipsam fugiat facere amet quaerat. Quasi incidunt dolorem dolores neque libero totam harum beatae, saepe nam iure omnis, nisi voluptatum rem? Quia ab perferendis officia. Doloremque facilis soluta veritatis inventore necessitatibus vel molestias. Consequuntur provident, sint vero facere excepturi nihil labore quam tenetur aliquam possimus nisi ea aperiam, perspiciatis nam. Velit incidunt assumenda ea nihil. 33" },
    { id: 4, img: gridLeftImg, Title: "SUBTITLE 4", SubTitle: "Colosseum Roma 4", Content: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cum hic a excepturi facilis voluptas ipsam perferendis ipsum, neque, labore necessitatibus pariatur? Deleniti blanditiis rem repellendus reiciendis atque, et maiores laboriosam              Similique eaque fuga necessitatibus laboriosam aliquam ad enim exercitationem magni est dolore ullam quam quas, itaque odio voluptatem. Iste natus atque quis debitis ratione dignissimos explicabo ad eligendi ut facilis.               Error vel eveniet doloremque necessitatibus sequi. Consequatur similique recusandae molestiae dolorum neque cumque minima vero explicabo, corrupti veritatis, dignissimos laborum doloremque tempora sapiente maxime fuga voluptatibus molestias placeat? Vero, dolorum. Repudiandae esse adipisci sequi recusandae ipsam fugiat facere amet quaerat. Quasi incidunt dolorem dolores neque libero totam harum beatae, saepe nam iure omnis, nisi voluptatum rem? Quia ab perferendis officia. Doloremque facilis soluta veritatis inventore necessitatibus vel molestias. Consequuntur provident, sint vero facere excepturi nihil labore quam tenetur aliquam possimus nisi ea aperiam, perspiciatis nam. Velit incidunt assumenda ea nihil. 44" },
    { id: 5, img: gridLeftImg, Title: "SUBTITLE 5", SubTitle: "Colosseum Roma 5", Content: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cum hic a excepturi facilis voluptas ipsam perferendis ipsum, neque, labore necessitatibus pariatur? Deleniti blanditiis rem repellendus reiciendis atque, et maiores laboriosam              Similique eaque fuga necessitatibus laboriosam aliquam ad enim exercitationem magni est dolore ullam quam quas, itaque odio voluptatem. Iste natus atque quis debitis ratione dignissimos explicabo ad eligendi ut facilis.Error vel eveniet doloremque necessitatibus sequi. Consequatur similique recusandae molestiae dolorum neque cumque minima vero explicabo, corrupti veritatis, dignissimos laborum doloremque tempora sapiente maxime fuga voluptatibus molestias placeat? Vero, dolorum. Repudiandae esse adipisci sequi recusandae ipsam fugiat facere amet quaerat. Quasi incidunt dolorem dolores neque libero totam harum beatae, saepe nam iure omnis, nisi voluptatum rem? Quia ab perferendis officia. Doloremque facilis soluta veritatis inventore necessitatibus vel molestias. Consequuntur provident, sint vero facere excepturi nihil labore quam tenetur aliquam possimus nisi ea aperiam, perspiciatis nam. Velit incidunt assumenda ea nihil. 55 Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cum hic a excepturi facilis voluptas ipsam perferendis ipsum, neque, labore necessitatibus pariatur? Deleniti blanditiis rem repellendus reiciendis atque, et maiores laboriosam              Similique eaque fuga necessitatibus laboriosam aliquam ad enim exercitationem magni est dolore ullam quam quas, itaque odio voluptatem. Iste natus atque quis debitis ratione dignissimos explicabo ad eligendi ut facilis.Error vel eveniet doloremque necessitatibus sequi. Consequatur similique recusandae molestiae dolorum neque cumque minima vero explicabo, corrupti veritatis, dignissimos laborum doloremque tempora sapiente maxime fuga voluptatibus molestias placeat? Vero, dolorum. Repudiandae esse adipisci sequi recusandae ipsam fugiat facere amet quaerat. Quasi incidunt dolorem dolores neque libero totam harum beatae, saepe nam iure omnis, nisi voluptatum rem? Quia ab perferendis officia. Doloremque facilis soluta veritatis inventore necessitatibus vel molestias. Consequuntur provident, sint vero facere excepturi nihil labore quam tenetur aliquam possimus nisi ea aperiam, perspiciatis nam. Velit incidunt assumenda ea nihil. 55" },
];

export default function Service() {
    const [selectedItem, setSelectedItem] = useState(serviceList[0]); // default first item selected
    const location = useLocation();
    const isHome = location.pathname === "/";

    const handleView = (id) => {
        const found = serviceList.find(item => item.id === id);
        if (found) setSelectedItem(found);
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
                                <div className="p-6 rounded-lg">
                                    <h3 className="tracking-widest text-[#f97316] text-3xl font-semibold pl-[100px] mb-4 title-font relative titleNames">Our Service</h3>
                                    <h2 className="text-4xl text-gray-900 font-medium title-font mb-6">Lorem ipsum dolor</h2>
                                    <p className="leading-relaxed text-base mb-8">Lorem ipsum dolor sit amet, consectetur adipisicing elit...</p>
                                    <button type="button" className="text-lg text-[#eb866b] hover:text-white border border-[#eb866b] focus:ring-4 focus:outline-none focus:ring-[#eb866b] font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-[#eb866b] dark:text-[#eb866b] dark:hover:text-white dark:hover:bg-[#eb866b] dark:focus:ring-[#eb866b]">
                                        <Link to="/service">All Service</Link>
                                    </button>
                                </div>
                            </div>
                            {serviceList.map((e) => (
                                <div key={e.id} className="xl:w-1/3 md:w-1/2 p-6">
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
                                            <h2 className="text-lg text-center font-medium title-font mb-4">{e.SubTitle}</h2>
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
                            <div className="lg:w-2/3 lg:pl-[150px] absolute md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                                <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">Services</h1>
                                <p className="mb-8 leading-relaxed w-1/2">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Blanditiis quo ipsam fugiat. Architecto magnam, ut atque odio, minus corrupti maiores accusamus exercitationem et nam quas cupiditate voluptates asperiores dolor dolore!</p>
                            </div>
                        </div>
                    </section>
                    <section className="text-gray-600 body-font " style={{
                        backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.8), rgba(255, 255, 255, 0.8)), url(${bg})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        backgroundAttachment: "fixed",
                        backgroundRepeat: 'no-repeat',
                    }} s>
                        <div className="container px-5 py-24 mx-auto flex flex-wrap max-w-[1200px]">
                            <div className="flex flex-wrap justify-around w-full items-baseline">
                                <div className="lg:w-1/3 md:w-1/2 md:pr-10 md:py-6">
                                    {serviceList.map((e) => (
                                        <div
                                            key={e.id}
                                            className={`flex relative pb-12 cursor-pointer ${selectedItem.id === e.id ? 'serviceActive rounded' : ''}`}
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
                                                <p className="leading-relaxed text-lg">{e.SubTitle}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                                <div className="lg:w-2/3 relative md:w-1/2 md:py-6 md:px-6 rounded shadow-lg">
                                    <h2 className='mb-6 font-semibold text-3xl'>{selectedItem.SubTitle}</h2>
                                    <p className=''>{selectedItem.Content}</p>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            )}
        </div>
    );
}
