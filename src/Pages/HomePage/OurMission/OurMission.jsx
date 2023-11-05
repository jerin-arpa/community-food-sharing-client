/* eslint-disable react/no-unescaped-entities */
import { FaBowlFood, FaPersonShelter } from "react-icons/fa6";
import { FaGripfire, FaTshirt } from "react-icons/fa";
import { BsBookHalf, BsFillHeartPulseFill } from "react-icons/bs";
import { IoWater } from "react-icons/io5";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";


const OurMission = () => {

    useEffect(() => {
        AOS.init();
    }, []);

    return (
        <div className="container mx-auto px-5 py-10 pb-28">
            <div>
                <div>
                    <div className="flex justify-center">
                        <div className="flex ">
                            <div>
                                <FaGripfire className="text-2xl text-[#23ad0e]"></FaGripfire>
                            </div>
                            <p className="mb-4 text-xl text-center">Food Sharing</p>
                        </div>
                    </div>
                    <div>
                        <h1 className="mb-5 text-3xl lg:text-6xl font-bold text-center">OUR <span className='text-[#23ad0e]'>MISSION</span></h1>
                    </div>
                    <div className="flex justify-center">
                        <p className="mb-5 text-center lg:w-1/2">Your Attention Is Changed The Part Of World.Give a helping hand to those who need it!</p>
                    </div>

                    <div className="flex justify-center">
                        <hr className="w-1/3 lg:w-1/6 h-2 rounded-full bg-[#23ad0e]" />
                    </div>
                </div>
            </div>


            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 mt-20">
                <div className="border border-[#23ad0e] p-10 relative">
                    <div data-aos="fade-down" data-aos-duration="3000" className="flex justify-center absolute -top-8 left-24 md:left-32 lg:left-48">
                        <FaBowlFood className="text-7xl bg-[#23ad0e] text-white p-2"></FaBowlFood>
                    </div>

                    <h2 data-aos="fade-down" data-aos-duration="3000" className="text-2xl font-bold text-center my-5 mt-8">Charity For Food</h2>

                    <p data-aos="fade-down" data-aos-duration="3000" className="text-center">Focused on eradicating hunger, this charity strives to provide nutritious meals to underprivileged individuals and families, ensuring no one goes to bed hungry.</p>
                </div>


                <div className="border border-[#23ad0e] p-10 relative">
                    <div className="flex justify-center absolute -top-8 left-24 md:left-32 lg:left-48" data-aos="fade-down" data-aos-duration="3000">
                        <FaTshirt className="text-7xl bg-[#23ad0e] text-white p-2"></FaTshirt>
                    </div>

                    <h2 data-aos="fade-down" data-aos-duration="3000" className="text-2xl font-bold text-center my-5 mt-8">Charity For Cloth</h2>

                    <p data-aos="fade-down" data-aos-duration="3000" className="text-center">This charity's mission is to clothe the less fortunate, offering warmth, dignity, and protection from the elements, fostering self-esteem and comfort.</p>
                </div>



                <div className="border border-[#23ad0e] p-10 relative">
                    <div data-aos="fade-down" data-aos-duration="3000" className="flex justify-center absolute -top-8 left-24 md:left-32 lg:left-48">
                        <BsBookHalf className="text-7xl bg-[#23ad0e] text-white p-2"></BsBookHalf>
                    </div>

                    <h2 data-aos="fade-down" data-aos-duration="3000" className="text-2xl font-bold text-center my-5 mt-8">Charity For Education</h2>

                    <p data-aos="fade-down" data-aos-duration="3000" className="text-center">Committed to empowering the next generation, this charity supports educational initiatives that open doors to knowledge and opportunities.</p>
                </div>


                <div className="border border-[#23ad0e] p-10 relative">
                    <div data-aos="fade-up" data-aos-duration="3000" className="flex justify-center absolute -top-8 left-24 md:left-32 lg:left-48">
                        <BsFillHeartPulseFill className="text-7xl bg-[#23ad0e] text-white p-2"></BsFillHeartPulseFill>
                    </div>

                    <h2 data-aos="fade-up" data-aos-duration="3000" className="text-2xl font-bold text-center my-5 mt-8">Charity For Health</h2>

                    <p data-aos="fade-up" data-aos-duration="3000" className="text-center"> Providing healthcare services and resources to those in need, this charity aims to improve physical and mental well-being.</p>
                </div>


                <div className="border border-[#23ad0e] p-10 relative">
                    <div data-aos="fade-up" data-aos-duration="3000" className="flex justify-center absolute -top-8 left-24 md:left-32 lg:left-48">
                        <FaPersonShelter className="text-7xl bg-[#23ad0e] text-white p-2"></FaPersonShelter>
                    </div>

                    <h2 data-aos="fade-up" data-aos-duration="3000" className="text-2xl font-bold text-center my-5 mt-8">Charity For Shelter</h2>

                    <p data-aos="fade-up" data-aos-duration="3000" className="text-center">Focused on housing the homeless and vulnerable, this charity ensures a safe and  offering a chance for individuals to rebuild their lives.</p>
                </div>


                <div className="border border-[#23ad0e] p-10 relative">
                    <div data-aos="fade-up" data-aos-duration="3000" className="flex justify-center absolute -top-8 left-24 md:left-32 lg:left-48">
                        <IoWater className="text-7xl bg-[#23ad0e] text-white p-2"></IoWater>
                    </div>

                    <h2 data-aos="fade-up" data-aos-duration="3000" className="text-2xl font-bold text-center my-5 mt-8">Charity For Clean Water</h2>

                    <p data-aos="fade-up" data-aos-duration="3000" className="text-center">Dedicated to securing access to clean and safe drinking water, improving health and overall living conditions in impoverished regions.</p>
                </div>
            </div>
        </div >
    );
};

export default OurMission;