import { Helmet } from "react-helmet";
import { FaGripfire } from "react-icons/fa";
import image from '../../assets/images/about2.png';
import { useLoaderData } from "react-router-dom";
import FoodCard from "../FoodCard/FoodCard";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect, useState } from "react";

const AvailableFood = () => {
    useEffect(() => {
        AOS.init();
    }, []);

    const [searchQuery, setSearchQuery] = useState('');
    const [searchText, setSearchText] = useState('');
    const [sortedFoods, setSortedFoods] = useState([]);
    const [sortByDate, setSortByDate] = useState(false);

    let foods = useLoaderData();

    useEffect(() => {
        if (sortByDate) {
            const sorted = [...foods].filter(item => item.foodName.toLowerCase().includes(searchText.toLowerCase()));
            sorted.sort((a, b) => new Date(a.date) - new Date(b.date));
            setSortedFoods(sorted);
        } else {
            const filteredFoods = foods.filter(item => item.foodName.toLowerCase().includes(searchText.toLowerCase()));
            setSortedFoods(filteredFoods);
        }
    }, [foods, sortByDate, searchText]);

    const handleSearchChange = event => {
        setSearchQuery(event.target.value);
    };

    const handleSearchButton = () => {
        setSearchText(searchQuery);
    };

    const handleSortByDate = () => {
        setSortByDate(!sortByDate);
    };


    return (
        <div>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Food Sharing | Available Food</title>
            </Helmet>

            <div>
                <div className="hero" style={{ backgroundImage: `url(${image})` }}>
                    <div className="hero-overlay bg-opacity-60 bg-white"></div>
                    <div
                        data-aos="fade-down" data-aos-duration="3000" className='container mx-auto px-5  py-32'>
                        <div className='mb-10'>
                            <div className="flex justify-center gap-3">
                                <div>
                                    <FaGripfire className="text-2xl text-[#23ad0e]"></FaGripfire>
                                </div>
                                <p className="mb-6 text-xl text-[#23ad0e]">Food Sharing</p>
                            </div>
                            <div>
                                <h1 className="mb-5 text-3xl lg:text-6xl font-bold text-black text-center">OUR <span className="text-[#23ad0e]"> AVAILABLE </span>FOOD</h1>


                                <div className="flex justify-center">
                                    <p className="font-bold text-xl text-center text-black w-full lg:w-3/4 ">Step into our Available Food section and experience a delightful feast for all your senses</p>
                                </div>

                                <div className="flex justify-center my-10">
                                    <button onClick={handleSortByDate} className="btn w-full lg:w-1/4 bg-[#23ad0e] border-[#23ad0e] hover:bg-white hover:text-[#23ad0e] text-white hover:border-[#23ad0e]">Sort by Date</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <div className="my-10 container mx-auto px-5 mb-20">
                <div data-aos="fade-right" data-aos-duration="3000" >
                    <div className="flex justify-start lg:justify-center  my-10 md:ml-0">
                        <div className="relative w-1/3">
                            <input
                                type="text"
                                value={searchQuery}
                                placeholder="Search"
                                onChange={handleSearchChange} className="input input-bordered w-20 md:w-full rounded-r-none" />
                            <button onClick={handleSearchButton} className="btn bg-[#23ad0e] border-[#23ad0e] hover:bg-white hover:text-[#23ad0e] text-white absolute rounded-l-none hover:border-[#23ad0e]">Search</button>
                        </div>
                    </div>
                </div>


                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                    {
                        sortedFoods.map(food => <FoodCard
                            key={food._id}
                            food={food}
                        ></FoodCard>)
                    }
                </div>
            </div>
        </div>
    );
};

export default AvailableFood;