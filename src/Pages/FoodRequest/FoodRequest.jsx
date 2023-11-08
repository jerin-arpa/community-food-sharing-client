import { useContext, useState } from "react";
import { Helmet } from "react-helmet";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import { FaGripfire } from "react-icons/fa";
import { BsFillEmojiSmileFill } from "react-icons/bs";
import FoodRequestCard from "../FoodRequestCard/FoodRequestCard";
import image from '../../assets/images/about4.png';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";

const FoodRequest = () => {

    useEffect(() => {
        AOS.init();
    }, []);

    const { user } = useContext(AuthContext);
    const foods = useLoaderData();
    const userFoodRequest = foods.filter(item => item.userEmail.toLowerCase() === user?.email.toLowerCase());
    const [myFoodRequest, setMyFoodRequest] = useState(userFoodRequest);

    return (
        <div>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Food Sharing | Food Request</title>
            </Helmet>

            <div>
                <div className="hero" style={{ backgroundImage: `url(${image})` }}>
                    <div className="hero-overlay bg-opacity-60 bg-white"></div>
                    <div
                        data-aos="fade-down" data-aos-duration="3000" className='container mx-auto px-5 py-32'>
                        <div className='mb-10'>
                            <div className="flex justify-center gap-3">
                                <div>
                                    <FaGripfire className="text-2xl text-[#23ad0e]"></FaGripfire>
                                </div>
                                <p className="mb-6 text-xl text-[#23ad0e]">Food Sharing</p>
                            </div>
                            <div>
                                <h1 className="mb-5 text-3xl lg:text-6xl font-bold text-black text-center">MY  <span className="text-[#23ad0e]"> FOOD REQUEST </span>COLLECTIONS</h1>


                                <div className="flex justify-center">
                                    <p className="font-bold text-xl text-center text-black w-full lg:w-3/4 " >In our community food-sharing website, we understand that sometimes,. That is why we have introduced the Food Request feature, a unique way to satisfy your cravings and connect with our passionate culinary community.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div>
                <div className="container mx-auto px-5 my-10">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 my-14">
                        {
                            myFoodRequest.length === 0 ? <div className="col-span-3 flex justify-center">
                                <div>
                                    <div className="flex justify-center">
                                        <BsFillEmojiSmileFill className="text-9xl text-[#ffcc33] mb-5"></BsFillEmojiSmileFill>
                                    </div>
                                    <h2 className="
                         text-4xl font-bold text-[#23ad0e] text-center"> As of now, there are no <br /> food requests  initiated by you</h2>
                                </div>
                            </div>
                                :
                                myFoodRequest.map(foodRequest => <FoodRequestCard
                                    key={foodRequest._id}
                                    foodRequest={foodRequest}
                                    myFoodRequest={myFoodRequest}
                                    setMyFoodRequest={setMyFoodRequest}
                                ></FoodRequestCard>)
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FoodRequest;