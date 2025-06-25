import React from 'react';
import googleApp from '../../assets/get-app-google.png';
import appleApp from '../../assets/get-app-apple.png';
import { Typewriter } from 'react-simple-typewriter';

const Banner = () => {
    return (
        <div className='bg-[url("https://img.freepik.com/free-vector/flat-students-dormitory-room-preparing-exams_88138-1043.jpg?t=st=1747752038~exp=1747755638~hmac=bd1ecf6bfa8c18564c29931103d1116d2bd0d1ffc75fa45affcfe6cd48c0f105&w=826")] bg-cover bg-center min-h-screen text-center p-5 md:p-20 space-y-10'>

            {/* Hero Text */}
            <h1 className='text-3xl md:text-6xl text-[#C1121F] font-bold mt-10'>
                <Typewriter words={["Find Your Perfect Roommate From Your Community"]} loop={true} />
            </h1>

            {/* Store Buttons */}
            <div className='flex items-center justify-center gap-5'>
                <a href="https://play.google.com/store/games?device=windows&pli=1">
                    <img src={googleApp} alt="" className='w-[130px] md:w-[150px]' />
                </a>
                <a href="https://www.apple.com/app-store/">
                    <img src={appleApp} alt="" className='w-[130px] md:w-[150px]' />
                </a>
            </div>

            {/* Slider 1: Testimonials */}
            <div className="overflow-x-auto whitespace-nowrap space-x-4 scrollbar-hide py-4">
                {[1, 2, 3, 4].map((item, i) => (
                    <div key={i} className="inline-block bg-white/80 dark:bg-black/50 text-black dark:text-white rounded-xl p-4 min-w-[280px] shadow-md mx-2">
                        <p className="italic">"Matched with someone from my own department. We’re best friends now!"</p>
                        <p className="font-semibold mt-2">— Student {i + 1}</p>
                    </div>
                ))}
            </div>

            {/* Slider 2: Room Styles */}
            <div className="overflow-x-auto whitespace-nowrap space-x-4 scrollbar-hide py-4">
                {['Studio', 'Shared Flat', 'Private Room', 'Loft'].map((type, i) => (
                    <div key={i} className="inline-block bg-[#669BBC]/90 dark:bg-[#003049]/70 text-white rounded-lg p-4 min-w-[240px] shadow-lg mx-2">
                        <h2 className="text-lg font-bold">{type}</h2>
                        <p className="text-sm">Available near you</p>
                    </div>
                ))}
            </div>

            {/* Slider 3: Lifestyle Tags */}
            <div className="overflow-x-auto whitespace-nowrap space-x-3 scrollbar-hide py-2">
                {['Gamer', 'Early Riser', 'Quiet', 'Clean', 'Night Owl', 'Pet Friendly'].map((tag, i) => (
                    <span key={i} className="inline-block bg-[#FDF0D5] dark:bg-gray-800 text-black dark:text-white px-4 py-2 rounded-full font-medium shadow">
                        #{tag}
                    </span>
                ))}
            </div>
        </div>
    );
};

export default Banner;