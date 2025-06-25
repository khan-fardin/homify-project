import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link, useLoaderData } from 'react-router';

const BrowseList = () => {

    const posts = useLoaderData(); 
    
    return (
        <div className='bg-[#FDF0D5] px-[5%] py-4'>
            <Helmet>
                <title>Browse List</title>
            </Helmet>

            <h2 className="text-center text-3xl font-bold text-black py-10">Browse Listings</h2>

            {/* Desktop Table */}
            <div className="hidden md:block overflow-x-auto text-[#003049]">
                <table className="w-full border">
                    <thead>
                        <tr className="bg-gray-200">
                            <th className="p-2 border">Name</th>
                            <th className="p-2 border">City</th>
                            <th className="p-2 border">Budget</th>
                            <th className="p-2 border">Room Type</th>
                            <th className="p-2 border">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {posts.map((listing) => (
                            <tr key={listing.id} className="text-center">
                                <td className="p-2 border">{listing.userName}</td>
                                <td className="p-2 border">{listing.location}</td>
                                <td className="p-2 border">${listing.rentBudget}</td>
                                <td className="p-2 border">{listing.roomType}</td>
                                <td className="p-2 border">
                                    <Link to={`/post-detail/${listing._id}`} className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600 text-sm">
                                        See More
                                    </Link>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {/* Mobile Card View */}
            <div className="md:hidden space-y-4 text-[#003049]">
                {posts.map((listing) => (
                    <div
                        key={listing.id}
                        className="border rounded-lg p-4 shadow-sm bg-white"
                    >
                        <p className="text-lg font-semibold">{listing.userName}</p>
                        <p className="text-sm">City: {listing.location}</p>
                        <p className="text-sm">Budget: ${listing.rentBudget}</p>
                        <p className="text-sm">Room Type: {listing.roomType}</p>
                        <Link to={`/post-detail/${listing._id}`} className="mt-3 bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600 text-sm">
                            See More
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default BrowseList;