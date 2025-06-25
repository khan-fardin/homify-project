import React from 'react';
import { Helmet } from 'react-helmet-async';

const ErrorPage = () => {
    return (
        <div className=''>
            <Helmet>
                <title>Error 404</title>
            </Helmet>
            <img src="https://img.freepik.com/free-vector/breakage-page-404-found_80328-231.jpg?t=st=1747667280~exp=1747670880~hmac=0282d2dfce3b436d9d2d99e1a66a58ff7e322abcf95bc71d116ac1bedc2c50c2&w=826" alt="" className='mx-auto min-h-screen'/>
        </div>
    );
};

export default ErrorPage;