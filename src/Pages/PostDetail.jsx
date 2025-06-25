import React, { use } from 'react';
import { Helmet } from 'react-helmet-async';
import { BiLike, BiSolidLike } from 'react-icons/bi';
import { FaPhoneAlt, FaSmoking } from 'react-icons/fa';
import { FaLocationDot, FaMoneyCheckDollar } from 'react-icons/fa6';
import { MdMeetingRoom, MdNightlight, MdOutlinePets } from 'react-icons/md';
import { useLoaderData } from 'react-router';
import { AuthContext } from '../provider/AuthProvider';
import { toast } from 'react-toastify';

const PostDetail = () => {

    const { user } = use(AuthContext);
    const post = useLoaderData();

    const handleLike = (post) => {
        if (post.userEmail === user.email) {
            toast.error("You can't like your own post!");
            return;
        }

        const updatedLikes = post.likeCount + 1;

        fetch(`https://ph-assignment10.vercel.app/posts/${post._id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'user-email': user.email 
            },
            body: JSON.stringify({ likeCount: updatedLikes })
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    // optionally refresh or update local state
                    toast.success('Liked!');
                }
            });
    };


    return (
        <div className='bg-[#FDF0D5] text-[#003049] px-[5%] py-5'>
            <Helmet>
                <title>Post Detail</title>
            </Helmet>
            <h1 className='text-center text-3xl font-bold py-10'>Detail Post</h1>

            <h1 className='p-2 bg-[#669BBC] border-2 rounded-2xl flex items-center gap-3 w-fit text-2xl text-[#780000] my-5'><div onClick={() => handleLike(post)} className={post.userEmail === user.email ? 'pointer-events-none opacity-50' : ''}>{
                post.likeCount > 0 ? <BiSolidLike /> : <BiLike />
            }
            </div> <span>{post.likeCount}</span></h1>

            <div className='bg-white rounded-2xl p-5 space-y-2'>
                <div className='flex items-center justify-between'>
                    <h1 className='text-xl font-semibold'>{post.title}</h1>
                    <p className='flex items-center gap-3'><FaLocationDot />{post.location}</p>
                </div>
                <p className='opacity-50'>Description: {post.description}.</p>
                <p className='flex items-center gap-3 font-semibold'><FaPhoneAlt />ContactInfo: <span className='font-normal'>{post.contact}</span></p>
                <p className='flex items-center gap-3 font-semibold'><MdMeetingRoom />Room Type: <span className='font-normal'>{post.roomType}</span></p>
                <div>
                    <p className='flex items-center gap-3 font-semibold'><MdOutlinePets />Pet: <span className='font-normal'>
                        {
                            post.LifestylePreferences.Pets ? "Yes" : "No"
                        }</span></p>
                    <p className='flex items-center gap-3 font-semibold'><FaSmoking />Smoking: <span className='font-normal'>
                        {
                            post.LifestylePreferences.Smoking ? "Smoker" : "Non-Smoker"
                        }</span></p>
                    <p className='flex items-center gap-3 font-semibold'><MdNightlight />Night Owl: <span className='font-normal'>
                        {
                            post.LifestylePreferences.NightOwl ? "Yes" : "No"
                        }
                    </span></p>
                </div>
                <p className='text-lg font-medium'>Availability: {post.availability ? "Available Now" : "Not Available"}</p>
                <p className='flex items-center gap-3 text-xl font-semibold justify-end'><FaMoneyCheckDollar />$<span className='font-normal'>{post.rentBudget}</span></p>
            </div>
        </div>
    );
};

export default PostDetail;