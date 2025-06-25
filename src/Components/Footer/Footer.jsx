import React from 'react';
import { Link } from 'react-router';
import logoImg from '../../assets/logo.png';
import { FaFacebookSquare, FaInstagramSquare } from 'react-icons/fa';
import { FaSquareXTwitter } from 'react-icons/fa6';

const Footer = () => {
    return (
        <div>
            <footer className='bg-[#669BBC] dark:bg-[#1B263B] p-10 text-center space-y-5'>
                <div className='space-y-3'>
                    <Link to='/' className="w-fit mx-auto text-2xl text-[#003049] dark:text-white md:text-3xl font-bold flex items-center justify-center gap-3">
                        <img src={logoImg} alt="" className='w-[30px] md:w-[50px]' />
                        <h1>Hom<span className='text-[#C1121F]'>iFy</span></h1>
                    </Link>
                    <p className='font-semibold text-white dark:text-gray-200'>
                        Contact us: <a href="mailto:support@homify.com" className='text-[#FDF0D5] dark:text-[#FDF0D5]'>support@homify.com</a>
                    </p>
                    <p className='font-semibold text-white dark:text-gray-200'>
                        Phone: <span className='text-[#FDF0D5] dark:text-[#FDF0D5]'>+8802200 - 000000</span>
                    </p>
                </div>

                <div className='text-[#003049] dark:text-white space-x-4 underline'>
                    <a href="">Terms & Conditions</a>
                    <a href="">Privacy Policy</a>
                    <a href="">About Us</a>
                </div>

                <div className='flex items-center justify-center gap-5 text-3xl text-[#FDF0D5] dark:text-[#FDF0D5]'>
                    <a href="https://facebook.com/homify" target="_blank" rel="noopener noreferrer">
                        <FaSquareXTwitter />
                    </a>
                    <a href="https://twitter.com/homify" target="_blank" rel="noopener noreferrer">
                        <FaInstagramSquare />
                    </a>
                    <a href="https://instagram.com/homify" target="_blank" rel="noopener noreferrer">
                        <FaFacebookSquare />
                    </a>
                </div>
            </footer>

            <footer className="footer sm:footer-horizontal footer-center bg-base-300 dark:bg-gray-800 text-base-content dark:text-white p-4">
                <aside>
                    <p>Copyright © {new Date().getFullYear()} - All right reserved by Homify Housing Ltd</p>
                </aside>
            </footer>
        </div>

    );
};

export default Footer;