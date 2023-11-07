import { Helmet } from "react-helmet";
import { FaGripfire } from "react-icons/fa";
import image from '../../assets/images/about2.png';
import { useLoaderData } from "react-router-dom";
import FoodCard from "../FoodCard/FoodCard";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";

const AvailableFood = () => {

    const foods = useLoaderData();
    useEffect(() => {
        AOS.init();
    }, []);

    return (
        <div>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Food Sharing | Available Food</title>
            </Helmet>

            <div>
                <div className="hero" style={{ backgroundImage: `url(${image})` }}>
                    <div className="hero-overlay bg-opacity-60 bg-white"></div>
                    <div
                        data-aos="fade-down" data-aos-duration="3000" className='container mx-auto px-5  py-32'>
                        <div className='mb-10'>
                            <div className="flex justify-center gap-3">
                                <div>
                                    <FaGripfire className="text-2xl text-[#23ad0e]"></FaGripfire>
                                </div>
                                <p className="mb-6 text-xl text-[#23ad0e]">Food Sharing</p>
                            </div>
                            <div>
                                <h1 className="mb-5 text-3xl lg:text-6xl font-bold text-black text-center">OUR <span className="text-[#23ad0e]"> AVAILABLE </span>FOOD</h1>


                                <p className="font-bold text-xl text-center text-black">Step into our Available Food section and experience a delightful feast for all your senses</p>

                                <div className="flex justify-center my-10">
                                    <button className="btn w-1/4 bg-[#23ad0e] border-[#23ad0e] hover:bg-white hover:text-[#23ad0e] text-white hover:border-[#23ad0e]">Sort By Date</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <div className="my-10 container mx-auto px-5 mb-20">
                <div data-aos="fade-right" data-aos-duration="3000" >
                    <div className="flex justify-start  my-10 md:ml-0">
                        <div className="relative w-1/3">
                            <input type="email" placeholder="Search" className="input input-bordered w-20 md:w-full rounded-r-none" />
                            <button className="btn bg-[#23ad0e] border-[#23ad0e] hover:bg-white hover:text-[#23ad0e] text-white absolute rounded-l-none hover:border-[#23ad0e]">Search</button>
                        </div>
                    </div>
                </div>


                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                    {
                        foods.map(food => <FoodCard
                            key={food._id}
                            food={food}
                        ></FoodCard>)
                    }
                </div>
            </div>
        </div>
    );
};

export default AvailableFood;