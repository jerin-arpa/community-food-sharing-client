import logo from '../../assets/images/logo1.png';
import { SocialIcon } from 'react-social-icons'


const Footer = () => {
    return (
        <footer className="py-10 bg-base-200 text-base-content pb-20">
            <div>
                <div className="footer flex flex-col md:flex-col lg:flex-row justify-between py-10 container mx-auto px-5">
                    <aside>
                        <img className='w-20' src={logo} alt="" />
                        <p className="text-sm md:text-2xl font-extrabold">Food <span className="text-[#23ad0e]">Sharing</span></p>
                        <p>Providing reliable tech since 2000</p>
                    </aside>
                    <nav>
                        <header className="footer-title">Services</header>
                        <a className="link link-hover">Branding</a>
                        <a className="link link-hover">Design</a>
                        <a className="link link-hover">Marketing</a>
                        <a className="link link-hover">Advertisement</a>
                    </nav>
                    <nav>
                        <header className="footer-title">Company</header>
                        <a className="link link-hover">About us</a>
                        <a className="link link-hover">Contact</a>
                        <a className="link link-hover">Available Food</a>
                        <a className="link link-hover">Press kit</a>
                    </nav>
                    <nav>
                        <header className="footer-title">Legal</header>
                        <a className="link link-hover">Terms of use</a>
                        <a className="link link-hover">Privacy policy</a>
                        <a className="link link-hover">Cookie policy</a>
                    </nav>
                    <div>
                        <header className="footer-title">Contact & Address</header>
                        <h2> <span className=" font-bold">Address: </span>Sylhet Bangladesh</h2>

                        <div className="my-1">
                            <h2 className="font-bold">Phone Number</h2>
                            <p>+880XXXXXXXXXX</p>
                        </div>

                        <div>
                            <h2 className="font-bold">Web Address</h2>
                            <p>info@example.com</p>
                        </div>
                    </div>
                </div>
            </div>
            <aside className='container mx-auto px-5'>
                <header className="footer-title text-center mb-5">Social Links</header>
                <nav>
                    <div className="flex flex-wrap justify-center gap-4 mb-8">
                        <SocialIcon url="https://twitter.com"></SocialIcon>
                        <SocialIcon url="https://www.facebook.com/"></SocialIcon>
                        <SocialIcon url="https://instagram.com"></SocialIcon>
                        <SocialIcon url="https://www.linkedin.com/"></SocialIcon>
                    </div>
                </nav>
                <p className='text-center px-5 text-sm'>Copyright © 2023 - All right reserved by Ismat Jerin</p>
            </aside>
        </footer>
    );
};

export default Footer;