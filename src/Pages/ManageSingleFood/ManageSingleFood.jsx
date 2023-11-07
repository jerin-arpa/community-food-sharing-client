import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { FaGripfire } from 'react-icons/fa';
import image from '../../assets/images/about1.png';


const ManageSingleFood = () => {
    return (
        <div>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Food Sharing | Manage Food | Manage Single Food</title>
            </Helmet>


            <div>
                <div className="hero" style={{ backgroundImage: `url(${image})` }}>
                    <div className="hero-overlay bg-opacity-60 bg-white"></div>
                    <div
                        data-aos="fade-up" data-aos-duration="3000" className='container mx-auto px-5  py-32'>
                        <div className='mb-10'>
                            <div className="flex justify-center gap-3">
                                <div>
                                    <FaGripfire className="text-2xl text-[#23ad0e]"></FaGripfire>
                                </div>
                                <p className="mb-6 text-xl text-[#23ad0e]">Food Sharing</p>
                            </div>
                            <div>
                                <h1 className="mb-5 text-3xl lg:text-6xl font-bold text-black text-center">MANAGE A<span className="text-[#23ad0e]"> SINGLE FOOD </span></h1>


                                <p className="font-bold text-xl text-center">At our community food-sharing website, we believe in the power of sharing, and we have made it even easier with our Add Food in a Card feature. It is like sending a delicious gift to your neighbors and fellow food enthusiasts.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>



        </div>
    );
};

ManageSingleFood.propTypes = {

};

export default ManageSingleFood;