import { FaGripfire } from 'react-icons/fa6';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import banner1 from '../../../assets/images/banner1.png';
import banner2 from '../../../assets/images/banner2.png';
import banner3 from '../../../assets/images/banner3.png';
import banner4 from '../../../assets/images/banner4.png';
import { motion } from "framer-motion";



const Banner = () => {
    return (
        <div>
            <div>
                <Swiper
                    spaceBetween={10}
                    slidesPerView={1}
                    onSlideChange={() => console.log('slide change')}
                    onSwiper={(swiper) => console.log(swiper)}
                >
                    <SwiperSlide>
                        <div className="hero">
                            <div className="hero-overlay bg-opacity-0"></div>
                            <div className='container mx-auto px-5 py-28 md:py-44 flex flex-col lg:flex-row gap-10'>
                                <div className='flex-1'>
                                    <div>
                                        <motion.div
                                            initial={{ opacity: 0, x: 20 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            transition={{ duration: 1, delay: 0.5 }}
                                            className="flex gap-3">
                                            <div className="flex">
                                                <FaGripfire className="text-2xl text-[#23ad0e]"></FaGripfire>
                                            </div>
                                            <p className="mb-4 text-xl">Food Sharing</p>
                                        </motion.div>
                                        <motion.div
                                            initial={{ opacity: 0, x: -20 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            transition={{ duration: 1, delay: 0.5 }}
                                        >
                                            <h1 className="mb-5 text-3xl lg:text-6xl font-bold">Share a Meal, <br /> Share a <span className='text-[#23ad0e]'>Smile with</span> everyone</h1>
                                        </motion.div>
                                        <motion.div
                                            initial={{ opacity: 0, x: 20 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            transition={{ duration: 1, delay: 0.5 }}
                                        >
                                            <p className="mb-5">Join our community of food enthusiasts to share delicious meals, build connections, and spread happiness one plate at a time.</p>
                                        </motion.div>
                                        <motion.div
                                            initial={{ opacity: 0, x: -20 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            transition={{ duration: 1, delay: 0.5 }}
                                        >
                                            <button className="btn bg-[#23ad0e] border-[#23ad0e] text-white hover:bg-white hover:text-[#23ad0e] hover:border-[#23ad0e] px-14">Get Started</button>
                                        </motion.div>
                                    </div>
                                </div>

                                <motion.div
                                    animate={{
                                        scale: [1, 0, 1, 1, 1],
                                    }}
                                    className='flex-1'>
                                    <img className='w-full' src={banner1} alt="" />
                                </motion.div>
                            </div>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide>
                        <div className="hero">
                            <div className="hero-overlay bg-opacity-0"></div>
                            <div className='container mx-auto px-5 py-28 md:py-44 flex flex-col lg:flex-row gap-10'>
                                <div className='flex-1'>
                                    <div>
                                        <motion.div
                                            initial={{ opacity: 0, x: 20 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            transition={{ duration: 1, delay: 0.5 }}
                                            className="flex gap-3">
                                            <div className="flex">
                                                <FaGripfire className="text-2xl text-[#23ad0e]"></FaGripfire>
                                            </div>
                                            <p className="mb-4 text-xl">Food Sharing</p>
                                        </motion.div>
                                        <motion.div
                                            initial={{ opacity: 0, x: -20 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            transition={{ duration: 1, delay: 0.5 }}
                                        >
                                            <h1 className="mb-5 text-3xl lg:text-6xl font-bold">Savor the Flavors of <span className='text-[#23ad0e]'>Togetherness</span></h1>
                                        </motion.div>
                                        <motion.div
                                            initial={{ opacity: 0, x: 20 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            transition={{ duration: 1, delay: 0.5 }}
                                        >
                                            <p className="mb-5">Discover the magic of shared meals – a place where diverse flavors, cultures, and stories unite in the spirit of togetherness.</p>
                                        </motion.div>
                                        <motion.div
                                            initial={{ opacity: 0, x: -20 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            transition={{ duration: 1, delay: 0.5 }}
                                        >
                                            <button className="btn bg-[#23ad0e] border-[#23ad0e] text-white hover:bg-white hover:text-[#23ad0e] hover:border-[#23ad0e] px-14">Get Started</button>
                                        </motion.div>
                                    </div>
                                </div>

                                <motion.div
                                    animate={{
                                        scale: [1, 0, 1, 1, 1],
                                    }}
                                    className='flex-1'>
                                    <img className='w-full' src={banner2} alt="" />
                                </motion.div>
                            </div>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide>
                        <div className="hero">
                            <div className="hero-overlay bg-opacity-0"></div>
                            <div className='container mx-auto px-5 py-28 md:py-44 flex flex-col lg:flex-row gap-10'>
                                <div className='flex-1'>
                                    <div>
                                        <motion.div
                                            initial={{ opacity: 0, x: 20 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            transition={{ duration: 1, delay: 0.5 }}
                                            className="flex gap-3">
                                            <div className="flex">
                                                <FaGripfire className="text-2xl text-[#23ad0e]"></FaGripfire>
                                            </div>
                                            <p className="mb-4 text-xl">Food Sharing</p>
                                        </motion.div>

                                        <motion.div
                                            initial={{ opacity: 0, x: -20 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            transition={{ duration: 1, delay: 0.5 }}
                                        >
                                            <h1 className="mb-5 text-3xl lg:text-6xl font-bold">From<span className='text-[#23ad0e]'> Our Table</span> to Yours</h1>
                                        </motion.div>
                                        <motion.div
                                            initial={{ opacity: 0, x: 20 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            transition={{ duration: 1, delay: 0.5 }}
                                        >
                                            <p className="mb-5">Connect with fellow food lovers in your community and share the warmth of homemade meals. Embrace the joy of giving and receiving delicious food.</p>
                                        </motion.div>

                                        <motion.div
                                            initial={{ opacity: 0, x: -20 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            transition={{ duration: 1, delay: 0.5 }}
                                        >
                                            <button className="btn bg-[#23ad0e] border-[#23ad0e] text-white hover:bg-white hover:text-[#23ad0e] hover:border-[#23ad0e] px-14">Get Started</button>
                                        </motion.div>
                                    </div>
                                </div>

                                <motion.div
                                    animate={{
                                        scale: [1, 0, 1, 1, 1],
                                    }}
                                    className='flex-1'>
                                    <img className='w-full' src={banner3} alt="" />
                                </motion.div>
                            </div>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide>
                        <div className="hero">
                            <div className="hero-overlay bg-opacity-0"></div>
                            <div className='container mx-auto px-5 py-28 md:py-44 flex flex-col lg:flex-row gap-10'>
                                <div className='flex-1'>
                                    <div>
                                        <motion.div
                                            initial={{ opacity: 0, x: 20 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            transition={{ duration: 1, delay: 0.5 }}
                                            className="flex gap-3">
                                            <div className="flex">
                                                <FaGripfire className="text-2xl text-[#23ad0e]"></FaGripfire>
                                            </div>
                                            <p className="mb-4 text-xl">Food Sharing</p>
                                        </motion.div>

                                        <motion.div
                                            initial={{ opacity: 0, x: -20 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            transition={{ duration: 1, delay: 0.5 }}
                                        >
                                            <h1 className="mb-5 text-3xl lg:text-6xl font-bold">Neighbors Feeding <span className='text-[#23ad0e]'>Neighbors</span></h1>
                                        </motion.div>
                                        <motion.div
                                            initial={{ opacity: 0, x: 20 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            transition={{ duration: 1, delay: 0.5 }}
                                        >
                                            <p className="mb-5">Experience the joy of Food Sharing as neighbors come together to share homemade dishes, foster friendships, and support one another.</p>
                                        </motion.div>

                                        <motion.div
                                            initial={{ opacity: 0, x: -20 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            transition={{ duration: 1, delay: 0.5 }}
                                        >
                                            <button className="btn bg-[#23ad0e] border-[#23ad0e] text-white hover:bg-white hover:text-[#23ad0e] hover:border-[#23ad0e] px-14">Get Started</button>
                                        </motion.div>
                                    </div>
                                </div>

                                <motion.div
                                    animate={{
                                        scale: [1, 0, 1, 1, 1],
                                    }}
                                    className='flex-1'>
                                    <img className='w-full' src={banner4} alt="" />
                                </motion.div>
                            </div>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
        </div>
    );
};

export default Banner;