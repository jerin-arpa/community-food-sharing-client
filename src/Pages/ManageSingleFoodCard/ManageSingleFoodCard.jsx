import PropTypes from 'prop-types';
import { FaUserCircle } from 'react-icons/fa';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";
import { MdEmail } from 'react-icons/md';


const ManageSingleFoodCard = ({ food, handlePending }) => {

    useEffect(() => {
        AOS.init();
    }, []);

    const { _id, userName, userImage, userEmail, requestDate, donationMoney } = food;
    console.log(food);


    return (
        <div data-aos="fade-up" data-aos-duration="3000" >
            <div className='shadow-xl border rounded-xl p-10'>

                <div className='flex gap-3 h-14'>
                    <div>
                        {
                            userImage ? (
                                <div className='w-14'>
                                    <img className="w-14  rounded-full" src={userImage} alt="" />
                                </div>
                            ) : (
                                <FaUserCircle className="text-5xl">
                                </FaUserCircle>
                            )
                        }
                    </div>
                    <div className='flex items-center'>
                        <div>
                            <h2 className='font-bold text-xl'>{userName}</h2>
                        </div>
                    </div>
                </div>

                <div className='my-3'>
                    <div className='flex gap-2 text-lg font-bold'>
                        <div className=' text-[#23ad0e]'>
                            <MdEmail className='text-2xl'></MdEmail>
                        </div>
                        <div className="flex items-center">
                            <p className='text-sm mb-3'> {userEmail}</p>
                        </div>
                    </div>
                    <p className='mb-2'><span className='font-bold text-xl'>Request Time & Date: </span> {requestDate}</p>

                    <p><span className='font-bold text-xl'>Donated Money: </span>{donationMoney} TK</p>
                </div>


                <div className='flex justify-center mt-4'>
                    {
                        food.status === 'Delivered' ?
                            <button className="btn w-full bg-[#23ad0e] border-[#23ad0e] hover:text-[#23ad0e] text-white font-bold ">Delivered</button>
                            :
                            <button onClick={() => handlePending(_id, food.food._id)} className="btn w-full bg-warning border-warning hover:bg-white hover:text-warning text-white font-bold hover:border-warning">Approved</button>
                    }
                </div>
            </div>
        </div>
    );
};

ManageSingleFoodCard.propTypes = {
    food: PropTypes.object,
    handlePending: PropTypes.func,
};

export default ManageSingleFoodCard;