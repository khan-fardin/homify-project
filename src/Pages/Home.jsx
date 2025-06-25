import React from 'react';
import { Helmet } from 'react-helmet-async';
import Banner from './PageThings.jsx/Banner';
import FeaturedRoommates from './PageThings.jsx/FeaturedRoommates';
import HowItWorks from './PageThings.jsx/HowItWorks';
import RoommateSafety from './PageThings.jsx/RoommateSafety';
import { useLoaderData } from 'react-router';

const Home = () => {

    const posts = useLoaderData();

    return (
        <div>
            <Helmet>
                <title>Home</title>
            </Helmet>
            <Banner />
            <HowItWorks />
            <FeaturedRoommates posts={posts} />
            <RoommateSafety />
        </div>
    );
};

export default Home;