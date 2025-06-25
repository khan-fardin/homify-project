import React, { use, useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { FaPen, FaTrash } from 'react-icons/fa';
import { Link, useLoaderData } from 'react-router';
import { AuthContext } from '../provider/AuthProvider';
import Swal from 'sweetalert2';

const MyListing = () => {

    const [myPosts, setMyPosts] = useState([]);
    const { user } = use(AuthContext);
    const posts = useLoaderData();

    useEffect(() => {
        if (posts && user) {
            const filteredPosts = posts.filter(post => post.userEmail == user.email);
            setMyPosts(filteredPosts);
        }
    }, [posts, user]);

    const handleDeleteBtn = id => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`https://ph-assignment10.vercel.app/posts/${id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount) {

                            const remainingPosts = myPosts.filter(post => post._id !== id);
                            setMyPosts(remainingPosts);
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your user has been deleted.",
                                icon: "success"
                            });
                        }
                    })
            }
        });
    };

    return (
        <div className='bg-[#FDF0D5] px-[5%] py-4'>
            <Helmet>
                <title>My Listing</title>
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
                        {myPosts.map((listing) => (
                            <tr key={listing.id} className="text-center">
                                <td className="p-2 border">{listing.userName}</td>
                                <td className="p-2 border">{listing.location}</td>
                                <td className="p-2 border">${listing.rentBudget}</td>
                                <td className="p-2 border">{listing.roomType}</td>
                                <td className="p-2 border flex items-center gap-3">
                                    <Link to={`/update-find-room/${listing._id}`} className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600 text-sm mx-1 flex items-center gap-2 w-fit">
                                        <FaPen />Update
                                    </Link>
                                    <button onClick={() => handleDeleteBtn(listing._id)} className="bg-red-500 text-white px-3 py-1 rounded hover:bg-blue-600 text-sm flex items-center gap-2">
                                        <FaTrash />Delete
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {/* Mobile Card View */}
            <div className="md:hidden space-y-4 text-[#003049]">
                {myPosts.map((listing) => (
                    <div
                        key={listing.id}
                        className="border rounded-lg p-4 shadow-sm bg-white"
                    >
                        <p className="text-lg font-semibold">{listing.userName}</p>
                        <p className="text-sm">City: {listing.location}</p>
                        <p className="text-sm">Budget: ${listing.rentBudget}</p>
                        <p className="text-sm">Room Type: {listing.roomType}</p>
                        <Link to={`/update-find-room/${listing._id}`} className="mt-3 bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600 text-sm mx-1">
                            Update
                        </Link>
                        <button onClick={() => handleDeleteBtn(listing._id)} className="mt-3 bg-red-500 text-white px-3 py-1 rounded hover:bg-blue-600 text-sm">
                            Delete
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default MyListing;