/* eslint-disable react/no-unescaped-entities */
import { EffectCoverflow, Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { RxAvatar } from 'react-icons/rx';
import Rating from 'react-rating';
import { motion } from "framer-motion";
import { BiSolidQuoteRight } from 'react-icons/bi';
import { FaGripfire } from 'react-icons/fa';


const Review = () => {
    return (
        <div className="container mx-auto px-5 my-20">
            <div className='mb-10'>
                <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1, delay: 0.5 }}
                    className="flex justify-center">
                    <div className="flex ">
                        <div>
                            <FaGripfire className="text-2xl text-[#23ad0e]"></FaGripfire>
                        </div>
                        <p className="mb-4 text-xl text-center">Testimonial</p>
                    </div>
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1, delay: 0.5 }}
                >
                    <h1 className="mb-5 text-3xl lg:text-6xl font-bold text-center">WHAT <span className='text-[#23ad0e]'>CUSTOMERS </span>SAYS</h1>
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1, delay: 0.5 }}
                    className="flex justify-center"
                >
                    <p className="mb-5 text-center lg:w-1/2">The majority have suffered alteration in some form, by injected humour, or randomised words which do not look even slightly believable.</p>
                </motion.div>

                <div className="flex justify-center">
                    <hr className="w-1/3 lg:w-1/6 h-2 rounded-full bg-[#23ad0e]" />
                </div>
            </div>


            <div className='w-[250px] md:w-full'>
                <Swiper
                    breakpoints={{
                        320: {
                            width: 320,
                            slidesPerView: 1,
                        },
                        768: {
                            width: 768,
                            slidesPerView: 1.5,
                        },
                    }}
                    // install Swiper modules
                    effect={'coverflow'}
                    grabCursor={true}
                    centeredSlides={true}
                    loop={true}
                    slidesPerView={'auto'}
                    coverflowEffect={{
                        rotate: 0,
                        stretch: 0,
                        depth: 100,
                        modifier: 2.5,
                    }}
                    pagination={{ el: '.swiper-pagination', clickable: true }}
                    navigation={{
                        nextEl: '.swiper-button-next',
                        prevEl: '.swiper-button-prev',
                        clickable: true,
                    }}
                    modules={[EffectCoverflow, Pagination, Navigation]}
                    className="swiper_container"
                >
                    <SwiperSlide>
                        <div className='bg-base-100 border p-10 m-5'>
                            <div className='flex justify-between'>
                                <div className='flex gap-4'>
                                    <div>
                                        <RxAvatar className='text-5xl'></RxAvatar>
                                    </div>
                                    <div>
                                        <h2 className='text-3xl font-bold text-[#23ad0e]'>Jane Doe</h2>
                                        <p className='text-xl'>Businessman</p>
                                    </div>
                                </div>
                                <div className='mb-5'>
                                    <BiSolidQuoteRight className='text-6xl'></BiSolidQuoteRight>
                                </div>
                            </div>

                            <div className='mt-3'>
                                <p>CommunitySharePlate has changed my life! I've been able to connect with neighbors and share my excess garden produce. It's not just about food; it's about building connections and making our community stronger.  </p>
                            </div>


                            <div className='mt-5'>
                                <Rating
                                    emptySymbol={
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            strokeWidth={1.5}
                                            stroke="orange"
                                            className="w-8 h-8"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
                                            />
                                        </svg>
                                    }
                                    fullSymbol={
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 24 24"
                                            fill="orange"
                                            className="w-8 h-8"
                                        >
                                            <path
                                                fillRule="evenodd"
                                                d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                                                clipRule="evenodd"
                                            />
                                        </svg>
                                    }
                                    initialRating={5}
                                    readonly
                                />
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='bg-base-100 border p-10 m-5'>
                            <div className='flex justify-between'>
                                <div className='flex gap-4'>
                                    <div>
                                        <RxAvatar className='text-5xl'></RxAvatar>
                                    </div>
                                    <div>
                                        <h2 className='text-3xl font-bold text-[#23ad0e]'>John Smith</h2>
                                        <p className='text-xl'>Engineer</p>
                                    </div>
                                </div>
                                <div className='mb-5'>
                                    <BiSolidQuoteRight className='text-6xl'></BiSolidQuoteRight>
                                </div>
                            </div>

                            <div className='mt-3'>
                                <p>I've found some incredible meals through CommunitySharePlate. It's a fantastic initiative that brings people together and reduces food waste. The platform is easy to use, and I'm proud to be a part of it. </p>
                            </div>


                            <div className='mt-5'>
                                <Rating
                                    emptySymbol={
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            strokeWidth={1.5}
                                            stroke="orange"
                                            className="w-8 h-8"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
                                            />
                                        </svg>
                                    }
                                    fullSymbol={
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 24 24"
                                            fill="orange"
                                            className="w-8 h-8"
                                        >
                                            <path
                                                fillRule="evenodd"
                                                d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                                                clipRule="evenodd"
                                            />
                                        </svg>
                                    }
                                    initialRating={4}
                                    readonly
                                />
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='bg-base-100 border p-10 m-5'>
                            <div className='flex justify-between'>
                                <div className='flex gap-4'>
                                    <div>
                                        <RxAvatar className='text-5xl'></RxAvatar>
                                    </div>
                                    <div>
                                        <h2 className='text-3xl font-bold text-[#23ad0e]'>Lisa Brown</h2>
                                        <p className='text-xl'>Teacher</p>
                                    </div>
                                </div>
                                <div className='mb-5'>
                                    <BiSolidQuoteRight className='text-6xl'></BiSolidQuoteRight>
                                </div>
                            </div>

                            <div className='mt-3'>
                                <p>The impact of this website is simply heartwarming. Not only do we get to enjoy delicious home-cooked meals, but we also know we're helping others. I've made new friends and strengthened the sense of community in my area. </p>
                            </div>


                            <div className='mt-5'>
                                <Rating
                                    emptySymbol={
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            strokeWidth={1.5}
                                            stroke="orange"
                                            className="w-8 h-8"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
                                            />
                                        </svg>
                                    }
                                    fullSymbol={
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 24 24"
                                            fill="orange"
                                            className="w-8 h-8"
                                        >
                                            <path
                                                fillRule="evenodd"
                                                d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                                                clipRule="evenodd"
                                            />
                                        </svg>
                                    }
                                    initialRating={5}
                                    readonly
                                />
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='bg-base-100 border p-10 m-5'>
                            <div className='flex justify-between'>
                                <div className='flex gap-4'>
                                    <div>
                                        <RxAvatar className='text-5xl'></RxAvatar>
                                    </div>
                                    <div>
                                        <h2 className='text-3xl font-bold text-[#23ad0e]'>David Johnson</h2>
                                        <p className='text-xl'>Businessman</p>
                                    </div>
                                </div>
                                <div className='mb-5'>
                                    <BiSolidQuoteRight className='text-6xl'></BiSolidQuoteRight>
                                </div>
                            </div>

                            <div className='mt-3'>
                                <p>CommunitySharePlate is a game-changer. It's not just a website; it's a movement. The platform's simplicity and effectiveness in bringing people together for a common cause is admirable. I've never been prouder to be part of a community. </p>
                            </div>


                            <div className='mt-5'>
                                <Rating
                                    emptySymbol={
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            strokeWidth={1.5}
                                            stroke="orange"
                                            className="w-8 h-8"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
                                            />
                                        </svg>
                                    }
                                    fullSymbol={
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 24 24"
                                            fill="orange"
                                            className="w-8 h-8"
                                        >
                                            <path
                                                fillRule="evenodd"
                                                d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                                                clipRule="evenodd"
                                            />
                                        </svg>
                                    }
                                    initialRating={4}
                                    readonly
                                />
                            </div>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
        </div>
    );
};

export default Review;