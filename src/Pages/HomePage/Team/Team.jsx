/* eslint-disable react/no-unescaped-entities */
import { motion } from "framer-motion";
import { FaGripfire } from "react-icons/fa";
import { SocialIcon } from 'react-social-icons'
import vol1 from '../../../assets/images/vol1.jpg';
import vol2 from '../../../assets/images/vol2.jpg';
import vol3 from '../../../assets/images/vol3.jpg';
import vol4 from '../../../assets/images/vol4.jpg';


const Team = () => {
    return (
        <div>
            <div className="container mx-auto px-5 py-20">
                <div>
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
                            <h1 className="mb-5 text-3xl lg:text-6xl font-bold text-center">OUR <span className='text-[#23ad0e]'>VOLUNTEERS</span></h1>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 1, delay: 0.5 }}
                            className="flex justify-center"
                        >
                            <p className="mb-5 text-center lg:w-1/2">Join our community of food enthusiasts to share delicious meals, build connections, and spread happiness one plate at a time.</p>
                        </motion.div>

                        <div className="flex justify-center">
                            <hr className="w-1/3 lg:w-1/6 h-2 rounded-full bg-[#23ad0e]" />
                        </div>
                    </div>
                </div>


                <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-14">
                    <div>
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 1, delay: 0.5 }}
                            className="flex-1 relative">
                            <div className="">
                                <img className="w-full" src={vol1} alt="" />
                            </div>

                            <div className="flex flex-col gap-2 absolute right-2 top-2">
                                <SocialIcon url="https://twitter.com"></SocialIcon>
                                <SocialIcon url="https://www.facebook.com/"></SocialIcon>
                                <SocialIcon url="https://instagram.com"></SocialIcon>
                                <SocialIcon url="https://www.linkedin.com/"></SocialIcon>
                            </div>
                        </motion.div>
                        <div>
                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 1, delay: 0.5 }}
                            >
                                <p className="mt-5 text-3xl font-bold">David Martinez</p>
                            </motion.div>
                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 1, delay: 0.5 }}
                            >
                                <p className="my-3 font-bold text-[#23ad0e]">Volunteers</p>
                            </motion.div>
                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 1, delay: 0.5 }}
                            >
                                <p>David, our Community Ambassador, connects local businesses with our food sharing platform to reduce food waste and build community unity</p>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 1, delay: 0.5 }}
                                className="flex justify-center mt-5"
                            >
                                <button className="btn w-full bg-[#23ad0e] border-[#23ad0e] text-white hover:bg-white hover:text-[#23ad0e] hover:border-[#23ad0e]">Read More</button>
                            </motion.div>
                        </div>
                    </div>

                    <div>
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 1, delay: 0.5 }}
                            className="flex-1 relative">
                            <div className="">
                                <img className="w-full" src={vol2} alt="" />
                            </div>

                            <div className="flex flex-col gap-2 absolute right-2 top-2">
                                <SocialIcon url="https://twitter.com"></SocialIcon>
                                <SocialIcon url="https://www.facebook.com/"></SocialIcon>
                                <SocialIcon url="https://instagram.com"></SocialIcon>
                                <SocialIcon url="https://www.linkedin.com/"></SocialIcon>
                            </div>
                        </motion.div>
                        <div>
                            <motion.div
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 1, delay: 0.5 }}
                            >
                                <p className="mt-5 text-3xl font-bold">Alice Johnson</p>
                            </motion.div>
                            <motion.div
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 1, delay: 0.5 }}
                            >
                                <p className="my-3 font-bold text-[#23ad0e]">Volunteers</p>
                            </motion.div>
                            <motion.div
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 1, delay: 0.5 }}
                            >
                                <p>Alice, our Community Ambassador, connects local businesses with our food sharing platform to reduce food waste and build community unity</p>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 1, delay: 0.5 }}
                                className="flex justify-center mt-5"
                            >
                                <button className="btn w-full bg-[#23ad0e] border-[#23ad0e] text-white hover:bg-white hover:text-[#23ad0e] hover:border-[#23ad0e]">Read More</button>
                            </motion.div>
                        </div>
                    </div>

                    <div>
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 1, delay: 0.5 }}
                            className="flex-1 relative">
                            <div className="">
                                <img className="w-full" src={vol3} alt="" />
                            </div>

                            <div className="flex flex-col gap-2 absolute right-2 top-2">
                                <SocialIcon url="https://twitter.com"></SocialIcon>
                                <SocialIcon url="https://www.facebook.com/"></SocialIcon>
                                <SocialIcon url="https://instagram.com"></SocialIcon>
                                <SocialIcon url="https://www.linkedin.com/"></SocialIcon>
                            </div>
                        </motion.div>
                        <div>
                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 1, delay: 0.5 }}
                            >
                                <p className="mt-5 text-3xl font-bold">Sarah Williams</p>
                            </motion.div>
                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 1, delay: 0.5 }}
                            >
                                <p className="my-3 font-bold text-[#23ad0e]">Volunteers</p>
                            </motion.div>
                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 1, delay: 0.5 }}
                            >
                                <p>Sarah, our Content Creator, shares compelling stories that inspire others to join our mission and showcase our community's impact.</p>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 1, delay: 0.5 }}
                                className="flex justify-center mt-5"
                            >
                                <button className="btn w-full bg-[#23ad0e] border-[#23ad0e] text-white hover:bg-white hover:text-[#23ad0e] hover:border-[#23ad0e]">Read More</button>
                            </motion.div>
                        </div>
                    </div>

                    <div>
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 1, delay: 0.5 }}
                            className="flex-1 relative">
                            <div className="">
                                <img className="w-full" src={vol4} alt="" />
                            </div>

                            <div className="flex flex-col gap-2 absolute right-2 top-2">
                                <SocialIcon url="https://twitter.com"></SocialIcon>
                                <SocialIcon url="https://www.facebook.com/"></SocialIcon>
                                <SocialIcon url="https://instagram.com"></SocialIcon>
                                <SocialIcon url="https://www.linkedin.com/"></SocialIcon>
                            </div>
                        </motion.div>
                        <div>
                            <motion.div
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 1, delay: 0.5 }}
                            >
                                <p className="mt-5 text-3xl font-bold">Michael Chen</p>
                            </motion.div>
                            <motion.div
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 1, delay: 0.5 }}
                            >
                                <p className="my-3 font-bold text-[#23ad0e]">Volunteers</p>
                            </motion.div>
                            <motion.div
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 1, delay: 0.5 }}
                            >
                                <p>Michael, our Food Safety Officer, safeguards the health and well-being of our community by ensuring food shared on our platform.</p>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 1, delay: 0.5 }}
                                className="flex justify-center mt-5"
                            >
                                <button className="btn w-full bg-[#23ad0e] border-[#23ad0e] text-white hover:bg-white hover:text-[#23ad0e] hover:border-[#23ad0e]">Read More</button>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Team;