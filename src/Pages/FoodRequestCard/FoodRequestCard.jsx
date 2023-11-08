import PropTypes from 'prop-types';
import { BsCalendarDate, BsFillCalendar2DateFill } from 'react-icons/bs';
import { FaDonate } from 'react-icons/fa';
import { FaLocationDot } from 'react-icons/fa6';
import { MdOutlineEventAvailable } from 'react-icons/md';
// import { AiOutlineDeliveredProcedure } from 'react-icons/ai';
import Swal from 'sweetalert2';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";


const FoodRequestCard = ({ foodRequest, myFoodRequest, setMyFoodRequest }) => {

    useEffect(() => {
        AOS.init();
    }, []);

    const { food, status, donationMoney, requestDate } = foodRequest;
    const { _id } = foodRequest;

    const handleDelete = _id => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        })
            .then((result) => {
                if (result.isConfirmed) {
                    fetch(`https://community-food-sharing-server-six.vercel.app/requestFood/${_id}`, {
                        method: 'DELETE',
                    })
                        .then(res => res.json())
                        .then(data => {
                            console.log(data);
                            if (data.deletedCount > 0) {
                                Swal.fire(
                                    'Deleted!',
                                    'Your food request has been canceled.',
                                    'success'
                                )
                                const remaining = myFoodRequest.filter(request => request._id !== _id)
                                setMyFoodRequest(remaining);
                            }
                        })
                }
            })
    }

    return (
        <div data-aos="fade-up" data-aos-duration="3000" className='border border-[#23ad0e] p-5 rounded-xl'>

            <div className='flex gap-3'>
                <div>
                    <img className='w-20 h-20 rounded-full' src={food.foodImage} alt="" />
                </div>
                <div className='flex items-center'>
                    <div>
                        <h2 className='font-bold text-[28px]'>{food.foodName}</h2>

                        <div className='flex gap-2 text-lg font-bold'>
                            <div className='flex items-center text-[#23ad0e]'>
                                <MdOutlineEventAvailable></MdOutlineEventAvailable>
                            </div>
                            <div className="flex items-center">
                                <p> {status}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <h2 className='mt-3'><span className='font-bold text-xl'>Donator:</span> <span className='text-xl font-bold uppercase'>{food.donatorName}</span></h2>

            <h2 className='my-2'><span className='font-bold text-xl py-2'>Email:</span> <span className='text-xl'>{food.email}</span></h2>

            <div>
                <hr className='my-6' />
            </div>

            <div>
                <div className='flex gap-2 text-lg'>
                    <div className='flex items-center text-[#23ad0e]'>
                        <FaLocationDot></FaLocationDot>
                    </div>
                    <p><span className='font-bold'>Pickup Location: </span>{food.pickUpLocation}</p>
                </div>

                <div className='flex gap-2 text-lg mb-1'>
                    <div className='flex items-center text-[#23ad0e]'>
                        <BsFillCalendar2DateFill></BsFillCalendar2DateFill>
                    </div>
                    <p><span className='font-bold'>Expired Date: </span>{food.date}</p>
                </div>

                <div className='flex gap-2 text-lg mb-1'>
                    <div className='flex items-center text-[#23ad0e]'>
                        <BsCalendarDate></BsCalendarDate>
                    </div>
                    <p><span className='font-bold'>Request Date:</span> {requestDate}</p>
                </div>

                <div className='flex gap-2 text-lg'>
                    <div className='flex items-center text-[#23ad0e]'>
                        <FaDonate></FaDonate>
                    </div>
                    <div className="flex items-center">
                        <p><span className='font-bold'>Donation Amount:</span> {donationMoney} TK</p>
                    </div>
                </div>
            </div>


            <div>
                {
                    status === 'Delivered' ?
                        <button disabled onClick={() => handleDelete(_id)} className="btn w-full bg-[#23ad0e] border-[#23ad0e] hover:bg-white hover:text-[#23ad0e] text-white hover:border-[#23ad0e] mt-5 mb-3">Cancel Request</button>
                        :
                        <button onClick={() => handleDelete(_id)} className="btn w-full bg-[#23ad0e] border-[#23ad0e] hover:bg-white hover:text-[#23ad0e] text-white hover:border-[#23ad0e] mt-5 mb-3">Cancel Request</button>
                }
            </div>
        </div>
    );
};

FoodRequestCard.propTypes = {
    foodRequest: PropTypes.object,
    myFoodRequest: PropTypes.array,
    setMyFoodRequest: PropTypes.func,
};

export default FoodRequestCard;