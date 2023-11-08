import { Helmet } from "react-helmet";
import { FaGripfire } from "react-icons/fa";
import image from '../../assets/images/about3.png';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useContext, useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { BsFillEmojiSmileFill } from "react-icons/bs";
import ManageFoodCard from "../ManageFoodCard/ManageFoodCard";
import { AuthContext } from "../../Provider/AuthProvider";


const ManageFood = () => {

    useEffect(() => {
        AOS.init();
    }, []);

    const { user } = useContext(AuthContext);

    const foods = useLoaderData();
    const userFoods = foods.filter(item => item.email.toLowerCase() === user.email.toLowerCase());
    const [myFood, setMyFood] = useState(userFoods);

    return (
        <div>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Food Sharing | Manage Food</title>
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
                                <h1 className="mb-5 text-3xl lg:text-6xl font-bold text-black text-center">TAKE CONTROL OF <span className="text-[#23ad0e]"> YOUR ADDED FOOD </span></h1>


                                <div className="flex justify-center">
                                    <p className="font-bold text-xl text-center text-black w-full lg:w-3/4 ">Welcome to the heart of our community food sharing website. Whether you are a home chef, a food lover, or an organizer of local food events, our comprehensive management tools put you in charge.</p>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <div className='container mx-auto px-5 my-10'>
                {
                    myFood.length === 0 ? <div className="col-span-2 flex justify-center">
                        <div>
                            <div className="flex justify-center">
                                <BsFillEmojiSmileFill className="text-9xl text-[#ffcc33] mb-5"></BsFillEmojiSmileFill>
                            </div>
                            <h2 className="
                         text-4xl font-bold text-[#23ad0e] text-center"> There are currently <br /> no food added by you. </h2>
                        </div>
                    </div>
                        :
                        <ManageFoodCard
                            myFood={myFood}
                            setMyFood={setMyFood}
                        ></ManageFoodCard>
                }
            </div>
        </div>
    );
};

export default ManageFood;
