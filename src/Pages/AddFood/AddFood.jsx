import { Helmet } from "react-helmet";


const AddFood = () => {
    return (
        <div>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Food Sharing | Add Food</title>
            </Helmet>


            <div className="container mx-auto px-5 mb-20">
                <div className="flex justify-center">
                    <form className="w-full lg:w-2/3 mt-16 border p-10 pb-14 rounded-xl">
                        <h2 className="text-4xl font-bold text-center pb-5"><span>ADD</span> <span className="text-[#23ad0e]">A FOOD</span></h2>
                        <hr className="my-5" />

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
                                    <input type="text" name="name" placeholder="Enter Food name" className="input input-bordered" required />
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
                                        <input type="text" name="image" placeholder="Enter product image" className="input input-bordered" required />
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
                                    <input type="text" name="status" defaultValue={'Available'} className="input input-bordered" required />
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


                        <h2 className="text-xl font-bold pb-1 mt-10">DONATOR INFORMATION</h2>
                        <div>
                            <hr className="w-1/5 h-2 bg-[#23ad0e] mb-5" />
                        </div>

                        <div className="w-full">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Donator Image</span>
                                </label>
                                <input type="text" name="note" placeholder="Enter your Image" className="input input-bordered" required />
                            </div>
                        </div>


                        <div className="flex flex-col lg:flex-row gap-10">
                            <div className="form-control w-full">
                                <label className="label">
                                    <span className="label-text">Donator Image</span>
                                </label>
                                <input type="text" name="note" placeholder="Enter your Image" className="input input-bordered" required />
                            </div>

                            <div className="form-control w-full">
                                <label className="label">
                                    <span className="label-text">Donator Image</span>
                                </label>
                                <input type="text" name="note" placeholder="Enter your Image" className="input input-bordered" required />
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