import React from 'react'
import gridLeftImg from '../images/G-left.jpg';
import bg from '../images/BG-2.png'; 

const serviceList = [
    { img: gridLeftImg, Title: "SUBTITLE", SubTitle: "Colosseum Roma 1", Content: "Fingerstache flexitarian street art 8-bit waistcoat. Distillery hexagon disrupt edison bulbche 1." },
    { img: gridLeftImg, Title: "SUBTITLE", SubTitle: "Colosseum Roma 2", Content: "Fingerstache flexitarian street art 8-bit waistcoat. Distillery hexagon disrupt edison bulbche 2." },
    { img: gridLeftImg, Title: "SUBTITLE", SubTitle: "Colosseum Roma 3", Content: "Fingerstache flexitarian street art 8-bit waistcoat. Distillery hexagon disrupt edison bulbche 3." },
    { img: gridLeftImg, Title: "SUBTITLE", SubTitle: "Colosseum Roma 4", Content: "Fingerstache flexitarian street art 8-bit waistcoat. Distillery hexagon disrupt edison bulbche 4." },
    { img: gridLeftImg, Title: "SUBTITLE", SubTitle: "Colosseum Roma 5", Content: "Fingerstache flexitarian street art 8-bit waistcoat. Distillery hexagon disrupt edison bulbche 5." },

]

export default function Service() {
    return (
        <div >
            <section className="text-gray-600 body-font max-w-[1440px] m-auto" style={{
            backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.8), rgba(255, 255, 255, 0.8)), url(${bg})`,
            backgroundSize: 'cover', 
            backgroundPosition: 'center', 
            backgroundAttachment:"fixed",
            backgroundRepeat:'no-repeat',
            }}>
                <div className="container px-5 py-24 mx-auto">
                    <div className="flex flex-wrap -m-4 gap-y-[100px]">
                        <div className="xl:w-1/3 md:w-1/2 p-4">
                            <div className=" p-6 rounded-lg">
                                <h3 className="tracking-widest text-[#f97316] text-3xl font-semibold pl-[100px] mb-4 title-font  relative titleNames">Our Service</h3>
                                <h2 className="text-5xl text-gray-900 font-medium title-font mb-6">Lorem ipsum dolor sit adipisicing </h2>
                                <p className="leading-relaxed text-base">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis praesentium numquam in, fugiat, odio vel nemo maiores iusto ipsam maxime, odit delectus neque saepe! Aliquam at accusantium assumenda quasi exercitationem!</p>
                            </div>
                        </div>
                        {serviceList.map((e, index) => (
                            <div key={index} className="xl:w-1/3 md:w-1/2 p-6 ">
                                <div className="card_Container relative p-4 max-h-[450px] min-h-[400px]"
                                style={{
                                    backgroundImage: `url(${e.img})`,
                                    backgroundSize: "cover",
                                    backgroundPosition: "center",
                                    borderRadius: "250px 250px 0 0 "
                                }}>
                                <div className=" hover:bg-[#f97316] transition-colors duration-500 hover:text-white absolute p-6 text-center rounded-lg bg-[#fff] shadow-md w-[80%] bottom-[-50px] left-[10%]">
                                    <h2 className="text-lg tect-center font-medium title-font mb-4">{e.SubTitle}</h2>
                                    <p className="leading-relaxed text-base">{e.Content}</p>
                                </div>
                            </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    )
}
