import { Helmet } from "react-helmet";
import { FaGripfire } from "react-icons/fa";
import image from '../../assets/images/about2.png';

const AvailableFood = () => {
    return (
        <div>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Food Sharing | Available Food</title>
            </Helmet>

            <div>
                <div className="hero" style={{ backgroundImage: `url(${image})` }}>
                    <div className="hero-overlay bg-opacity-60 bg-white"></div>
                    <div className='container mx-auto px-5  py-32'>
                        <div className='mb-10'>
                            <div>
                                <div data-aos="zoom-in"
                                    data-aos-duration="2000" className="flex justify-center gap-3">
                                    <div>
                                        <FaGripfire className="text-2xl text-[#23ad0e]"></FaGripfire>
                                    </div>
                                    <p className="mb-6 text-xl text-[#23ad0e]">Food Sharing</p>
                                </div>
                                <div data-aos="zoom-in"
                                    data-aos-duration="2000">
                                    <h1 className="mb-5 text-3xl lg:text-6xl font-bold text-black text-center">OUR <span className="text-[#23ad0e]"> AVAILABLE </span>FOOD</h1>


                                    <p className="font-bold text-xl text-center">Step into our Available Food section and experience a delightful feast for all your senses</p>

                                    <div className="flex justify-start md:justify-center mt-10 md:ml-0">
                                        <div className="relative w-1/3">
                                            <input type="email" placeholder="Your Email" className="input input-bordered w-36 md:w-full rounded-r-none" />
                                            <button className="btn bg-[#23ad0e] border-[#23ad0e] hover:bg-white hover:text-[#23ad0e] text-white absolute rounded-l-none hover:border-[#23ad0e]">Search</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AvailableFood;