import React, { use } from 'react';
import { Helmet } from 'react-helmet-async';
import { AuthContext } from '../provider/AuthProvider';
import { toast } from 'react-toastify';

const FindYourRoom = () => {

    const { user } = use(AuthContext)

    const handleAddPost = e => {
        e.preventDefault();
        const form = e.target;
        const formData = new FormData(form);
        const room = Object.fromEntries(formData.entries())

        // Build LifestylePreferences
        const LifestylePreferences = {
            Pets: formData.get("pets") ? true : false,
            Smoking: formData.get("smoking") ? true : false,
            NightOwl: formData.get("nightOwl") ? true : false,
        };

        // like count
        const likeCount = 0;

        // availability is true from the first
        const availability = true;

        const newRoom = {
            ...room,
            LifestylePreferences,
            likeCount,
            availability,
        };

        // send it to DB
        fetch('https://ph-assignment10.vercel.app/posts', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newRoom)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    toast.success('Coffee added successfully!!');
                    form.reset()
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                }
            })
    };


    return (
        <div className='bg-[#FDF0D5] text-[#003049] px-[5%]'>
            <Helmet>
                <title>Find Your Room</title>
            </Helmet>

            {/* post fill in the blanks */}
            <h1 className='text-center text-3xl font-bold py-10'>Post Your Requirements</h1>
            <form onSubmit={handleAddPost} className='flex flex-col space-y-5 py-10'>
                <label className='text-xl font-semibold text-[#003049] fieldset-legend'>Title</label>
                <input name='title' type="text" className='bg-white input w-full' placeholder='e.g., "Looking for a roommate in NYC"' />
                <label className='text-xl font-semibold text-[#003049] fieldset-legend'>Location</label>
                <input name='location' type="text" className='bg-white input w-full' placeholder='e.g., New York City' />
                <label className='text-xl font-semibold text-[#003049] fieldset-legend'>Rent Budget</label>
                <input name='rentBudget' type="text" className='bg-white input w-full' placeholder='e.g., 2000' />
                <label className='text-xl font-semibold text-[#003049] fieldset-legend'>Room Type</label>
                <input name='roomType' type="text" className='bg-white input w-full' placeholder='e.g., Single, Shared, etc.' />
                <label className='text-xl font-semibold text-[#003049] fieldset-legend'>Lifestyle Preferences</label>
                <div className='space-x-3'>
                    <label>
                        <input type="checkbox" name="pets" value="cat" /> Pet
                    </label>

                    <label>
                        <input type="checkbox" name="smoking" value="smoker" /> Smoker
                    </label>

                    <label>
                        <input type="checkbox" name="nightOwl" /> Night Owl
                    </label>
                </div>
                <label className='text-xl font-semibold text-[#003049] fieldset-legend'>Description</label>
                <input name='description' type="text" className='bg-white input w-full' placeholder='e.g., Full Description' />
                <label className='text-xl font-semibold text-[#003049] fieldset-legend'>Contact Info</label>
                <input name='contact' type="text" className='bg-white input w-full' placeholder='e.g., Phone' />
                <label className='text-xl font-semibold text-[#003049] fieldset-legend'>User Email  (Read Only/ you can not edit this field)</label>
                <input name='userEmail' type="text" className='bg-white input w-full' value={user.email} readOnly placeholder={user.email} />
                <label className='text-xl font-semibold text-[#003049] fieldset-legend'>User Name  (Read Only/ you can not edit this field)</label>
                <input name='userName' type="text" className='bg-white input w-full' value={user.displayName} readOnly placeholder={user.displayName} />
                <input type="submit" value="Add Post" className='btn' />
            </form>
        </div>
    );
};

export default FindYourRoom;