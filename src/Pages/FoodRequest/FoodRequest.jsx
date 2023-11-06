import { useContext, useState } from "react";
import { Helmet } from "react-helmet";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import { FaGripfire } from "react-icons/fa";
import { BsFillEmojiSmileFill } from "react-icons/bs";
import FoodRequestCard from "../FoodRequestCard/FoodRequestCard";

const FoodRequest = () => {

    const { user } = useContext(AuthContext);
    const foods = useLoaderData();
    console.log(foods);
    const userFoodRequest = foods.filter(item => item.userEmail.toLowerCase() === user?.email.toLowerCase());
    const [myFoodRequest, setMyFoodRequest] = useState(userFoodRequest);

    return (
        <div>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Food Sharing | Food Request</title>
            </Helmet>

            <div>
                <div className='mt-10'>
                    <div className="flex justify-center gap-3">
                        <div className="flex">
                            <FaGripfire className="text-2xl text-[#23ad0e]"></FaGripfire>
                        </div>
                        <p className="mb-4 text-xl">My Request</p>
                    </div>
                    <div className="flex justify-center">
                        <h1 className="mb-5 text-3xl lg:text-5xl font-bold text-center w-2/3">My Food Request Collections</h1>
                    </div>
                </div>
                <div className='container mx-auto px-5 mt-5'>
                    <hr />
                </div>

                <div className="container mx-auto px-5">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 my-14">
                        {
                            myFoodRequest.length === 0 ? <div className="col-span-3 flex justify-center">
                                <div>
                                    <div className="flex justify-center">
                                        <BsFillEmojiSmileFill className="text-9xl text-[#ffcc33] mb-5"></BsFillEmojiSmileFill>
                                    </div>
                                    <h2 className="
                         text-4xl font-bold text-[#23ad0e] text-center"> There are currently <br /> no products added to the cart. </h2>
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