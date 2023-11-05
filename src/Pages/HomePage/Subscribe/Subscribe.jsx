import { FaGripfire } from "react-icons/fa";
import image from '../../../assets/images/about2.png';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";


const Subscribe = () => {

    useEffect(() => {
        AOS.init();
    }, []);


    return (
        <div>
            <div className="hero py-32" style={{ backgroundImage: `url(${image})` }}>
                <div className="hero-overlay bg-opacity-60 bg-[#23ad0e]"></div>
                <div className='container mx-auto px-5 py-16'>
                    <div className='mb-10'>
                        <div>
                            <div data-aos="zoom-in"
                                data-aos-duration="2000" className="flex justify-center gap-3">
                                <div>
                                    <FaGripfire className="text-2xl text-white"></FaGripfire>
                                </div>
                                <p className="mb-6 text-xl text-white">Food Sharing</p>
                            </div>
                            <div data-aos="zoom-in"
                                data-aos-duration="2000">
                                <h1 className="mb-5 text-3xl lg:text-6xl font-bold text-black text-center">Don’t miss out on the Latest News</h1>

                                <p className="text-white font-bold text-3xl text-center">We won’t spam you and we respect your privacy.</p>


                                <div className="flex justify-start md:justify-center mt-10 md:ml-0">
                                    <div className="relative">
                                        <input type="email" placeholder="Your Email" className="input input-bordered w-36 md:w-full rounded-r-none" />
                                        <button className="btn bg-black border-black hover:bg-white hover:text-black text-white absolute rounded-l-none hover:border-black">Subscribe</button>
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

export default Subscribe;