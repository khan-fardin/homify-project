import React from 'react';
import { Link } from 'react-router';

const FeaturedRoommates = ({ posts }) => {
    return (
        <div className='bg-[#FDF0D5] dark:bg-[#0D1B2A] transition-colors duration-300'>
            <h1 className='text-center text-3xl font-bold py-10 text-black dark:text-white'>Featured Mates</h1>

            {/* post section */}
            <section className="py-10 px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {posts.map((post, index) => (
                        <div
                            key={post._id}
                            className={`rounded-xl p-5 shadow-md transition duration-300 ${index % 2 === 0
                                    ? 'bg-white dark:bg-[#1B263B]'
                                    : 'bg-[#E0E1DD] dark:bg-[#415A77]'
                                } text-black dark:text-white border border-gray-200 dark:border-gray-600`}
                        >
                            <h3 className="text-lg font-semibold text-[#003049] dark:text-white">{post.title}</h3>
                            <p><strong>Location:</strong> {post.location}</p>
                            <p><strong>Rent:</strong> ${post.rentBudget}</p>
                            <p><strong>Room Type:</strong> {post.roomType}</p>
                            <Link to={`/post-detail/${post._id}`}>
                                <button className="mt-4 bg-[#003049] text-white px-4 py-1 rounded hover:bg-blue-600">
                                    See More
                                </button>
                            </Link>
                        </div>
                    ))}
                </div>

                <div className='flex justify-center mt-10'>
                    <Link to="/browse-listing" className='btn bg-[#003049] text-white dark:bg-white dark:text-[#003049]'>
                        All Posts
                    </Link>
                </div>
            </section>
        </div>
    );
};

export default FeaturedRoommates;