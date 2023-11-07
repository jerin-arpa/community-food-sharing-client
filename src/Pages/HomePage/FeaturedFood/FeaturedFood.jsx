import { motion } from "framer-motion";
import { FaGripfire } from "react-icons/fa";
import { Link, useLoaderData } from "react-router-dom";
import FoodCard from "../../FoodCard/FoodCard";

const FeaturedFood = () => {

    const foods = useLoaderData();
    console.log(foods);

    return (
        <div className="container mx-auto px-5 py-10">
            <div>
                <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1, delay: 0.5 }}
                    className="flex justify-center">
                    <div className="flex ">
                        <div>
                            <FaGripfire className="text-2xl text-[#23ad0e]"></FaGripfire>
                        </div>
                        <p className="mb-4 text-xl text-center">Food Sharing</p>
                    </div>
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1, delay: 0.5 }}
                >
                    <h1 className="mb-5 text-3xl lg:text-6xl font-bold text-center"><span className='text-[#23ad0e]'>FEATURED </span>FOOD</h1>
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1, delay: 0.5 }}
                    className="flex justify-center"
                >
                    <p className="mb-5 text-center lg:w-1/2">At our community food sharing website, each item brimming with the potential to make a difference in someones life. Together, we are building a more nourished and connected world, one meal at a time.</p>
                </motion.div>

                <div className="flex justify-center">
                    <hr className="w-1/3 lg:w-1/6 h-2 rounded-full bg-[#23ad0e]" />
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 my-14">
                {
                    foods.slice(0, 6).map(food => <FoodCard
                        key={food._id}
                        food={food}
                    ></FoodCard>)
                }
            </div>

            <div className='flex justify-center mt-4'>
                <Link className='w-1/3' to='/availableFoods'>
                    <button className="btn w-full bg-[#23ad0e] border-[#23ad0e] hover:bg-white hover:text-[#23ad0e] text-white hover:border-[#23ad0e]">Show All</button>
                </Link>
            </div>
        </div>
    );
};

export default FeaturedFood;