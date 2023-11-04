import { Link } from 'react-router-dom';
import image from '../../assets/images/error-page.png';


const ErrorPage = () => {
    return (
        <div className='min-h-screen flex items-center justify-center'>
            <div>
                <div>
                    <img className='w-[1000px]' src={image} alt="" />
                </div>

                <div className='flex justify-center'>
                    <Link to='/'>
                        <button className="btn bg-[#23ad0e] border-[#23ad0e] text-white hover:bg-white hover:text-[#23ad0e] hover:border-[#23ad0e]">Go Home</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default ErrorPage;