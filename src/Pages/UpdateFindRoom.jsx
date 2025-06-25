import React, { use } from 'react';
import { Helmet } from 'react-helmet-async';
import { AuthContext } from '../provider/AuthProvider';
import { toast } from 'react-toastify';
import { useLoaderData, useNavigate } from 'react-router';

const UpdateFindRoom = () => {

    const { _id, title, location, rentBudget, roomType, description, contact, LifestylePreferences, availability } = useLoaderData();
    const { user } = use(AuthContext);
    const navigation = useNavigate();

    const handleUpdatePost = e => {
        e.preventDefault();
        const form = e.target;
        const formData = new FormData(form);
        const updateRoom = Object.fromEntries(formData.entries())

        // Build LifestylePreferences
        const LifestylePreferences = {
            Pets: formData.get("pets") ? true : false,
            Smoking: formData.get("smoking") ? true : false,
            NightOwl: formData.get("nightOwl") ? true : false,
        };

        // availability adding
        const availability = formData.get("availability") ? true : false;


        const newUpdatedRoom = {
            ...updateRoom,
            LifestylePreferences,
            availability,
        };

        // send updated coffee to the db
        fetch(`https://ph-assignment10.vercel.app/posts/${_id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newUpdatedRoom)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount) {
                    toast.success("Updated Successfully")
                }
                navigation('/');
                window.scrollTo({ top: 0, behavior: 'smooth' })
            })
    };

    return (
        <div className='bg-[#FDF0D5] text-[#003049] px-[5%]'>
            <Helmet>
                <title>Update Your Post</title>
            </Helmet>

            {/* post fill in the blanks */}
            <h1 className='text-center text-3xl font-bold py-10'>Update Your Requirements</h1>
            <form onSubmit={handleUpdatePost} className='flex flex-col space-y-5 py-10'>
                <label className='text-xl font-semibold text-[#003049] fieldset-legend'>Title</label>
                <input name='title' type="text" className='bg-white input w-full' defaultValue={title} />
                <label className='text-xl font-semibold text-[#003049] fieldset-legend'>Location</label>
                <input name='location' type="text" className='bg-white input w-full' defaultValue={location} />
                <label className='text-xl font-semibold text-[#003049] fieldset-legend'>Rent Budget</label>
                <input name='rentBudget' type="text" className='bg-white input w-full' defaultValue={rentBudget} />
                <label className='text-xl font-semibold text-[#003049] fieldset-legend'>Room Type</label>
                <input name='roomType' type="text" className='bg-white input w-full' defaultValue={roomType} />
                <label className='text-xl font-semibold text-[#003049] fieldset-legend'>Lifestyle Preferences</label>
                <div className='space-x-3'>
                    <label>
                        <input type="checkbox" name="pets" defaultChecked={LifestylePreferences.Pets} /> Pet
                    </label>

                    <label>
                        <input type="checkbox" name="smoking" value="smoker" defaultChecked={LifestylePreferences.Smoking} /> Smoker
                    </label>

                    <label>
                        <input type="checkbox" name="nightOwl" defaultChecked={LifestylePreferences.NightOwl} /> Night Owl
                    </label>
                </div>

                <label className='text-xl font-semibold text-[#003049] fieldset-legend'>Description</label>
                <input name='description' type="text" className='bg-white input w-full' defaultValue={description} />
                <label className='text-xl font-semibold text-[#003049] fieldset-legend'>Contact Info</label>
                <input name='contact' type="text" className='bg-white input w-full' defaultValue={contact} />

                <p className='font-medium'>If Not Available, uncheck the checkbox</p>
                <label>
                    <input type="checkbox" name="availability" defaultChecked={availability} /> Availability
                </label>
                <label className='text-xl font-semibold text-[#003049] fieldset-legend'>User Email  (Read Only/ you can not edit this field)</label>
                <input name='userEmail' type="text" className='bg-white input w-full' value={user.email} readOnly placeholder={user.email} />
                <label className='text-xl font-semibold text-[#003049] fieldset-legend'>User Name  (Read Only/ you can not edit this field)</label>
                <input name='userName' type="text" className='bg-white input w-full' value={user.displayName} readOnly placeholder={user.displayName} />
                <input type="submit" value="Update Post" className='btn' />
            </form>
        </div>
    );
};

export default UpdateFindRoom;