import { useContext } from "react";
import { Helmet } from "react-helmet";
import { BsFillCalendar2DateFill, BsCalendarDate } from "react-icons/bs";
import { FaLocationDot } from "react-icons/fa6";
import { GiNotebook } from "react-icons/gi";
import { MdProductionQuantityLimits } from "react-icons/md";
import { useLoaderData, useNavigate, useParams } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import { FaDonate, FaUserCircle } from "react-icons/fa";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";
import moment from 'moment';
import Swal from "sweetalert2";


const FoodDetails = () => {

    useEffect(() => {
        AOS.init();
    }, []);

    const { user } = useContext(AuthContext);
    const navigate = useNavigate();
    const foods = useLoaderData();
    const { id } = useParams();
    const food = foods.find(food => food._id === id);
    console.log(food);

    const { _id, foodName, quantity, pickUpLocation, foodImage, date, note, donatorImage, donatorName, email } = food;
    const requestDate = moment().format("YYYY-MM-D, h:mm a");
    const status = 'Available';

    const handleRequestFood = event => {
        event.preventDefault();
        const donationMoney = event.target.donationMoney.value;
        const additionalNotes = event.target.additionalNotes.value;
        console.log(donationMoney, additionalNotes);

        const newFood = {
            userName: user?.displayName,
            userImage: user?.photoURL,
            userEmail: user?.email,
            food,
            status: status,
            requestDate,
            donationMoney,
            additionalNotes
        };

        fetch('https://community-food-sharing-server-six.vercel.app/requestFood', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newFood),
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.insertedId) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'Request Send successfully',
                        icon: 'success',
                        confirmButtonText: 'OK'
                    });
                    navigate('/foodRequest');
                }
            })
    }


    return (
        <div>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Food Sharing | Available Food | Food Details</title>
            </Helmet>

            <div className="container mx-auto px-5 my-10">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                    <div data-aos="fade-down" data-aos-duration="3000" className="flex flex-col lg:flex-row rounded-xl shadow-xl lg:col-span-2">
                        <div className="flex-1">
                            <img className="h-full w-full" src={foodImage} alt="" />
                        </div>

                        <div className="flex items-center flex-1">
                            <div className="px-5 pb-8">
                                <div>
                                    <h2 className="text-3xl font-bold mb-3">{foodName}</h2>
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
                                        <p><span className='font-bold'>Expired Date:</span> {date}</p>
                                    </div>
                                    <p className='mt-2'>{note}</p>
                                </div>


                                {/*modal */}
                                <button onClick={() => document.getElementById('my_modal_4').showModal()} className="btn w-full bg-[#23ad0e] border-[#23ad0e] hover:bg-white hover:text-[#23ad0e] text-white hover:border-[#23ad0e] mt-5">Request Food</button>

                                <dialog id="my_modal_4" className="modal">
                                    <div className="modal-box w-11/12 max-w-5xl">
                                        <form method="dialog">
                                            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                                        </form>

                                        <form onSubmit={handleRequestFood}>
                                            {/* Modal Information */}
                                            <div>
                                                <div data-aos="fade-down" data-aos-duration="3000" className="flex flex-col md:flex-row gap-5 mt-10">
                                                    {/* User Information */}
                                                    <div className="border border-[#23ad0e] rounded-xl px-5 flex-1 py-2">
                                                        <div>
                                                            <div>
                                                                <p className="text-xl font-bold text-center">USER <span className=" text-[#23ad0e]">INFORMATION</span></p>

                                                                <hr className="my-2" />
                                                            </div>
                                                            <h2 className="text-2xl text-center font-bold">Name:  {user?.displayName}</h2>
                                                            <p className="text-sm font-bold text-center my-1">Email: {user?.email}</p>
                                                        </div>
                                                    </div>


                                                    {/* Donar Information */}
                                                    <div className="border border-[#23ad0e] rounded-xl px-5 flex-1 py-2">
                                                        <div>
                                                            <div>
                                                                <p className="text-xl font-bold text-center">DONATOR <span className=" text-[#23ad0e]">INFORMATION</span></p>

                                                                <hr className="my-2" />
                                                            </div>

                                                            <h2 className="text-2xl text-center font-bold">Name: {donatorName}</h2>
                                                            <p className="text-sm font-bold text-center my-1">Email: {email}</p>
                                                        </div>
                                                    </div>
                                                </div>

                                                {/* Food Information */}
                                                <div data-aos="fade-up" data-aos-duration="3000" className="flex flex-col md:flex-row border border-[#23ad0e] rounded-xl mt-5">
                                                    <div className="flex-1">
                                                        <img className="h-full w-full rounded-l-xl" src={foodImage} alt="" />
                                                    </div>
                                                    <div className="flex-1 p-5">
                                                        <h2 className="text-3xl font-bold mb-3">{foodName}</h2>
                                                        <p><span className="font-bold mb-2">Food Id: </span>{_id}</p>

                                                        <div className='flex gap-2 text-lg my-1'>
                                                            <div className='flex items-center text-[#23ad0e]'>
                                                                <FaLocationDot></FaLocationDot>
                                                            </div>
                                                            <p><span className='font-bold'>Pickup Location: </span>{pickUpLocation}</p>
                                                        </div>

                                                        <div className='flex gap-2 text-lg mb-1'>
                                                            <div className='flex items-center text-[#23ad0e]'>
                                                                <BsFillCalendar2DateFill></BsFillCalendar2DateFill>
                                                            </div>
                                                            <p><span className='font-bold'>Expired Date:</span> {date}</p>
                                                        </div>

                                                        <div className='flex gap-2 text-lg mb-1'>
                                                            <div className='flex items-center text-[#23ad0e]'>
                                                                <BsCalendarDate></BsCalendarDate>
                                                            </div>
                                                            <p><span className='font-bold'>Request Date:</span> {requestDate}</p>
                                                        </div>

                                                        <div>
                                                            <div className='flex gap-2 text-lg mb-2'>
                                                                <div className='flex items-center text-[#23ad0e]'>
                                                                    <FaDonate></FaDonate>
                                                                </div>
                                                                <div className="flex items-center">
                                                                    <p className='font-bold'>Donation Money:
                                                                    </p>
                                                                </div>
                                                            </div>
                                                            <div>
                                                                <textarea placeholder="Enter Amount" name="donationMoney" className="textarea textarea-bordered textarea-xs w-full max-w-xs" ></textarea>
                                                            </div>
                                                        </div>

                                                        <div className='text-lg'>
                                                            <div className="flex gap-2 mb-2">
                                                                <div className='flex items-center text-[#23ad0e]'>
                                                                    <GiNotebook></GiNotebook>
                                                                </div>
                                                                <div className="flex items-center">
                                                                    <p className='font-bold'>Additional Notes:
                                                                    </p>
                                                                </div>
                                                            </div>
                                                            <div>
                                                                <textarea placeholder="Write some notes" name="additionalNotes" className="textarea textarea-bordered textarea-xs w-full max-w-xs" ></textarea>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>


                                            {/* Food Request button */}
                                            <div className="flex justify-center my-5">
                                                <div className="w-full">
                                                    <button className="btn w-full bg-[#23ad0e] border-[#23ad0e] hover:bg-white hover:text-[#23ad0e] text-white hover:border-[#23ad0e]">Request Food</button>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </dialog>
                            </div>
                        </div>
                    </div>

                    <div data-aos="fade-up" data-aos-duration="3000" className="lg:col-span-1">
                        <div className="shadow-xl rounded-xl py-10 px-5 ">
                            <div className="flex justify-center mb-5">
                                {
                                    donatorImage ? (
                                        <div className='w-36'>
                                            <img className="w-36  rounded-full" src={donatorImage} alt="" />
                                        </div>
                                    ) : (
                                        <FaUserCircle className="text-9xl">
                                        </FaUserCircle>
                                    )
                                }
                            </div>
                            <div>
                                <h2 className="text-2xl text-center uppercase font-bold"><span className="text-lg">Donator:</span> <br /> {donatorName}</h2>
                                <p className="text-sm font-bold text-center my-1">{email}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default FoodDetails;