import PropTypes from 'prop-types';
import { FaUserCircle } from 'react-icons/fa';
import { BsFillCalendar2DateFill } from 'react-icons/bs';
import { FaLocationDot } from 'react-icons/fa6';
import { MdProductionQuantityLimits } from 'react-icons/md';


const FoodCard = ({ food }) => {

    const { foodName, quantity, pickUpLocation, foodImage, date, note, donatorImage, donatorName } = food;

    return (
        <div className='rounded-xl shadow-xl'>
            <img data-aos="fade-down" data-aos-duration="3000" src={foodImage} alt="" />
            <div data-aos="fade-up" data-aos-duration="3000" className='p-5 pb-8'>
                <div>
                    <h2 className='text-2xl font-bold mb-2'>{foodName}</h2>
                    <div className='flex gap-2 text-lg'>
                        <div className='flex items-center text-[#23ad0e]'>
                            <MdProductionQuantityLimits></MdProductionQuantityLimits>
                        </div>
                        <p><span className='font-bold'>Quantity:</span> {quantity}</p>
                    </div>
                    <div className='flex gap-2 text-lg'>
                        <div className='flex items-center text-[#23ad0e]'>
                            <FaLocationDot></FaLocationDot>
                        </div>
                        <p><span className='font-bold'>Pickup Location: </span>{pickUpLocation}</p>
                    </div>
                    <div className='flex gap-2 text-lg'>
                        <div className='flex items-center text-[#23ad0e]'>
                            <BsFillCalendar2DateFill></BsFillCalendar2DateFill>
                        </div>
                        <p><span className='font-bold'>Expire Date:</span> {date}</p>
                    </div>
                    <p className='mt-2'>{note}</p>

                </div>
                <hr className='my-4' />

                <div className='flex gap-2'>
                    {
                        donatorImage ? (
                            <img className="w-14 rounded-full" src={donatorImage} alt="" />
                        ) : (
                            <FaUserCircle className="text-4xl">
                            </FaUserCircle>
                        )
                    }
                    <div className='flex items-center'>
                        <h2 className='text-lg font-bold uppercase'>{donatorName}</h2>
                    </div>
                </div>

                <div className='flex justify-center mt-4'>
                    <button className="btn w-full bg-[#23ad0e] border-[#23ad0e] hover:bg-white hover:text-[#23ad0e] text-white hover:border-[#23ad0e]">View Details</button>
                </div>
            </div>
        </div>
    );
};

FoodCard.propTypes = {
    food: PropTypes.object,
};

export default FoodCard;