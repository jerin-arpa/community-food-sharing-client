// import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { FaGripfire } from 'react-icons/fa';
import image from '../../assets/images/about1.png';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect, useState } from "react";
import { useLoaderData, useParams } from 'react-router-dom';
import { BsFillEmojiSmileFill } from 'react-icons/bs';
import ManageSingleFoodCard from '../ManageSingleFoodCard/ManageSingleFoodCard';
import Swal from 'sweetalert2';


const ManageSingleFood = () => {

    useEffect(() => {
        AOS.init();
    }, []);


    const foods = useLoaderData();
    const { id } = useParams();
    const userFoods = foods.filter(item => item.food._id === id);
    const [myFood, setMyFood] = useState(userFoods);


    const handlePending = (id, foodId) => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, Delivered it!'
        })
            .then((result) => {
                if (result.isConfirmed) {
                    fetch(`https://community-food-sharing-server-six.vercel.app/requestFood/${id}`, {
                        method: 'PATCH',
                        headers: {
                            'content-type': 'application/json'
                        },
                        body: JSON.stringify({ status: 'Delivered' }),
                    })
                        .then(res => res.json())
                        .then(data => {
                            console.log(data);
                            if (data.modifiedCount > 0) {
                                Swal.fire(
                                    'Delivered!',
                                    'Updated Food Status Successfully',
                                    'success'
                                )
                                const remaining = myFood.filter(request => request._id !== id);
                                const updated = myFood.find(update => update._id === id);
                                updated.status = 'Delivered';
                                const newUpdatedFood = [updated, ...remaining];
                                setMyFood(newUpdatedFood);
                            }
                        })
                    fetch(`https://community-food-sharing-server-six.vercel.app/food/${foodId}`, {
                        method: 'DELETE',
                    })
                        .then(res => res.json())
                        .then(data => {
                            console.log(data);
                            if (data.deletedCount > 0) {
                                Swal.fire(
                                    'Deleted!',
                                    'Your food card has been deleted.',
                                    'success'
                                )
                                const remaining = myFood.filter(request => request._id !== foodId)
                                setMyFood(remaining);
                            }
                        })
                }
            })
    }


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
                                <h1 className="mb-5 text-3xl lg:text-6xl font-bold text-black text-center">ALL  <span className="text-[#23ad0e]">REQUESTER </span>INFORMATION </h1>


                                <div className='flex justify-center'>
                                    <p className="font-bold text-xl text-center text-black w-full lg:w-3/4 ">At our community food-sharing website, we believe in the power of sharing, and we have made it even easier with our Add Food in a Card feature.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <div className='container mx-auto px-5 my-10'>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mb-20'>
                    {
                        myFood.length === 0 ? <div className="col-span-3 flex justify-center">
                            <div>
                                <div className="flex justify-center">
                                    <BsFillEmojiSmileFill className="text-9xl text-[#ffcc33] mb-5"></BsFillEmojiSmileFill>
                                </div>
                                <h2 className="
                         text-4xl font-bold text-[#23ad0e] text-center"> There are currently <br /> no request for this food. </h2>
                            </div>
                        </div>
                            :
                            myFood.map(food => <ManageSingleFoodCard
                                key={food._id}
                                food={food}
                                handlePending={handlePending}
                            ></ManageSingleFoodCard>)
                    }
                </div>
            </div>

        </div>
    );
};

ManageSingleFood.propTypes = {

};

export default ManageSingleFood;