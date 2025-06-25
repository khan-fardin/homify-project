import React from 'react';

const HowItWorks = () => {
    return (
        <div className='bg-[#FDF0D5] dark:bg-[#1B263B] transition-colors duration-300'>
            <h1 className='text-center text-3xl font-bold text-black dark:text-white py-10'>How It Works</h1>

            <div className='text-center text-black dark:text-white flex max-lg:flex-col items-center space-y-10 py-10'>
                <div className='bg-[#669BBC] dark:bg-[#2A9D8F] hover:scale-105 transition-all duration-300 shadow-lg p-6 rounded-lg w-fit mx-auto max-w-[250px]'>
                    <h1 className='text-xl font-semibold mb-2'>Create Your Profile</h1>
                    <p className='mb-3'>Add your details like location, budget, lifestyle preferences, and interests to help us match you with the right people.</p>
                    <ul className='text-start space-y-1'>
                        <li className='font-medium'>✏️ Name, Email, Photo</li>
                        <li className='font-medium'>📍 Preferred city/area</li>
                        <li className='font-medium'>💬 Personal interests (e.g., introvert, gamer, early riser)</li>
                    </ul>
                </div>

                <div className='bg-[#669BBC] dark:bg-[#2A9D8F] hover:scale-105 transition-all duration-300 shadow-lg p-6 rounded-lg w-fit mx-auto max-w-[250px]'>
                    <h1 className='text-xl font-semibold mb-2'>Post or Browse Listings</h1>
                    <p className='mb-3'>You can either create your own roommate listing or browse others that match your criteria.</p>
                    <ul className='text-start space-y-1'>
                        <li className='font-medium'>➕ Add a listing with rent, room type, availability</li>
                        <li className='font-medium'>🔍 Use filters to find roommates by city, rent, lifestyle</li>
                        <li className='font-medium'>📌 Each post shows key info: location, room type, rent, lifestyle tags</li>
                    </ul>
                </div>

                <div className='bg-[#669BBC] dark:bg-[#2A9D8F] hover:scale-105 transition-all duration-300 shadow-lg p-6 rounded-lg w-fit mx-auto max-w-[250px]'>
                    <h1 className='text-xl font-semibold mb-2'>Connect & Chats</h1>
                    <p className='mb-3'>Found someone who seems like a match? Start a conversation and see if it clicks.</p>
                    <ul className='text-start space-y-1'>
                        <li className='font-medium'>💬 In-app messaging (if planned) or shared contact info</li>
                        <li className='font-medium'>💡 Tip: Use the Like button to save posts you’re interested in</li>
                        <li className='font-medium'>✅ Once you agree, arrange to meet or move in!</li>
                    </ul>
                </div>
            </div>
        </div>

    );
};

export default HowItWorks;