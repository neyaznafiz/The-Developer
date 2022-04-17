import React from 'react';
import { Link } from 'react-router-dom';

const NotFundError = () => {
    return (
        <div className='py-44 text-center'>

            <div>
            <p className='lg:text-6xl font-bold text-red-500'>404</p>
            <p className='lg:text-2xl font-semibold border-b mx-52 border-black py-5'>Your page is not fund.</p>

            <div className='lg:pt-20 md:pt-10 pt-5'>
            <Link to='/' className='coustom-shadow px-4 py-3 text-white text-opacity-75 hover:text-opacity-100'> BACK TO HOME</Link>
            </div>
            </div>

        </div>
    );
};

export default NotFundError;