import { useContext } from "react";
import { Helmet } from "react-helmet";
import { AuthContext } from "../../Provider/AuthProvider";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import { FaGripfire } from "react-icons/fa";
import image from '../../assets/images/about4.png';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";

const AddFood = () => {

    useEffect(() => {
        AOS.init();
    }, []);

    const { user } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleAddFood = event => {
        event.preventDefault();
        const form = event.target;

        // Food Information
        const foodName = form.foodName.value;
        const quantity = form.quantity.value;
        const pickUpLocation = form.location.value;
        const foodImage = form.foodImage.value;
        const date = form.date.value;
        const status = form.status.value;
        const note = form.note.value;

        // Donator Information
        const donatorImage = user?.photoURL;
        const donatorName = user?.displayName;
        const email = user?.email;

        const addFoodInfo = { foodName, quantity, pickUpLocation, foodImage, date, status, note, donatorImage, donatorName, email };

        console.log(addFoodInfo);


        fetch('https://community-food-sharing-server-six.vercel.app/food', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(addFoodInfo),
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.insertedId) {
                    Swal.fire({
                        position: "center",
                        icon: "success",
                        title: "Food Added Successfully",
                        showConfirmButton: true,
                        timer: 1500
                    });
                    form.reset();
                    navigate('/availableFoods')
                }
            })
    }


    return (
        <div>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Food Sharing | Add Food</title>
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
                                <h1 className="mb-5 text-3xl lg:text-6xl font-bold text-black text-center">SHARE THE LOVE &<span className="text-[#23ad0e]">  ADD A FOOD </span></h1>


                                <div className="flex justify-center">
                                    <p className="font-bold text-xl text-center text-black w-full lg:w-3/4 ">At our community food-sharing website, we believe in the power of sharing, and we have made it even easier with our Add Food in a Card feature. It is like sending a delicious gift to your neighbors and fellow food enthusiasts.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <div className="container mx-auto px-5 mb-20">
                <div className="flex justify-center">
                    <form onSubmit={handleAddFood} className="w-full lg:w-2/3 mt-16 border p-10 pb-14 rounded-xl">
                        <h2 className="text-4xl font-bold text-center pb-5"><span>ADD</span> <span className="text-[#23ad0e]">A FOOD</span></h2>
                        <hr className="my-5" />

                        {/* Food Information */}
                        <h2 className="text-xl font-bold pb-1">FOOD INFORMATION</h2>
                        <div>
                            <hr className="w-1/5 h-2 bg-[#23ad0e] mb-5" />
                        </div>
                        <div className="flex flex-col lg:flex-row gap-10">
                            <div className="w-full">
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Food Name</span>
                                    </label>
                                    <input type="text" name="foodName" placeholder="Enter Food name" className="input input-bordered" required />
                                </div>


                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Food Quantity</span>
                                    </label>
                                    <input type="number" name="quantity" placeholder="Enter Food Quantity" className="input input-bordered" required />
                                </div>


                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Pickup Location</span>
                                    </label>
                                    <input type="text" name="location" placeholder="Enter Pickup Location" className="input input-bordered" required />
                                </div>
                            </div>

                            <div className="w-full">
                                <div className="w-full">
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Food Image</span>
                                        </label>
                                        <input type="text" name="foodImage" placeholder="Enter product image" className="input input-bordered" required />
                                    </div>
                                </div>


                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Expire Date</span>
                                    </label>
                                    <input type="date" name="date" placeholder="Enter Expire Date" className="input input-bordered" required />
                                </div>


                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Food Status</span>
                                    </label>
                                    <input type="text" name="status" disabled defaultValue={'Available'} className="input input-bordered" required />
                                </div>
                            </div>
                        </div>




                        <div className="w-full">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Additional Note</span>
                                </label>
                                <input type="text" name="note" placeholder="Write Additional Note" className="input input-bordered" required />
                            </div>
                        </div>


                        {/* Donator Information */}
                        <h2 className="text-xl font-bold pb-1 mt-10">DONATOR INFORMATION</h2>
                        <div>
                            <hr className="w-1/5 h-2 bg-[#23ad0e] mb-5" />
                        </div>

                        <div className="w-full">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Donator Image</span>
                                </label>
                                <input type="text" name="donatorImage"
                                    defaultValue={user?.photoURL} className="input input-bordered" />
                            </div>
                        </div>


                        <div className="flex flex-col lg:flex-row gap-10">
                            <div className="form-control w-full">
                                <label className="label">
                                    <span className="label-text">Donator Name</span>
                                </label>
                                <input type="text" name="donatorName" defaultValue={user?.displayName} className="input input-bordered" required />
                            </div>

                            <div className="form-control w-full">
                                <label className="label">
                                    <span className="label-text">Donator Email</span>
                                </label>
                                <input type="email" name="email" defaultValue={user?.email} className="input input-bordered" required />
                            </div>
                        </div>


                        <div>
                            <button className="btn bg-[#23ad0e] border-[#23ad0e] hover:bg-white hover:text-[#23ad0e] text-white font-bold w-full mt-8">Add Food</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddFood;